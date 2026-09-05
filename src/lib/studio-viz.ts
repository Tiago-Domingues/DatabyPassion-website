export type StudioVizVariant = "architecture" | "orbit";

export type StudioVizOptions = {
  variant: StudioVizVariant;
  phaseEl?: HTMLElement | null;
  getPaused?: () => boolean;
};

type RingDot = {
  cx: number;
  cy: number;
  angle: number;
  startR: number;
  r: number;
  speed: number;
  color: string;
  size: number;
};

function ease(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function setPhase(phaseEl: HTMLElement | null | undefined, text: string) {
  if (!phaseEl) return;
  if (!phaseEl.querySelector("span")) phaseEl.innerHTML = "<span></span>";
  const sp = phaseEl.querySelector("span");
  if (!sp) return;
  if (sp.textContent !== text) sp.textContent = text;
  sp.classList.toggle("visible", !!text);
}

function sizeCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const parent = canvas.parentElement;
  if (!parent) return { W: 320, H: 260 };
  const styles = getComputedStyle(parent);
  const padX = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
  let W = Math.round(parent.clientWidth - padX);
  if (W < 120) W = Math.max(120, parent.clientWidth);
  const H =
    W < 500
      ? Math.max(310, Math.round(W * 0.88))
      : Math.max(420, Math.min(Math.round(W * 0.56), 520));
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = W * DPR;
  canvas.height = H * DPR;
  canvas.style.width = "100%";
  canvas.style.height = `${H}px`;
  canvas.style.display = "block";
  canvas.style.marginLeft = "auto";
  canvas.style.marginRight = "auto";
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  return { W, H };
}

type Star = { u: number; v: number; size: number; twinkle: number };
type DistantNode = { u: number; v: number; size: number };
type SpaceField = {
  stars: Star[];
  nodes: DistantNode[];
  links: Array<{ a: number; b: number }>;
  spokes: number[];
};

function buildSpaceField(kind: "orbit" | "architecture"): SpaceField {
  const stars: Star[] = [];
  let s = kind === "orbit" ? 0x51ed : 0xa11e;
  const rand = () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
  const count = kind === "orbit" ? 48 : 26;
  for (let i = 0; i < count; i++) {
    const corner = i % 4;
    const alongEdge = rand() < 0.32;
    let u: number;
    let v: number;
    if (alongEdge) {
      u = rand();
      v = rand() < 0.5 ? rand() * 0.14 : 0.86 + rand() * 0.14;
    } else {
      u = corner % 2 === 0 ? rand() * 0.22 : 0.78 + rand() * 0.22;
      v = corner < 2 ? rand() * 0.2 : 0.8 + rand() * 0.2;
    }
    stars.push({ u, v, size: 0.35 + rand() * 0.85, twinkle: rand() * Math.PI * 2 });
  }

  const nodes: DistantNode[] =
    kind === "orbit"
      ? [
          { u: 0.07, v: 0.1, size: 1.55 },
          { u: 0.155, v: 0.055, size: 1.05 },
          { u: 0.9, v: 0.085, size: 1.7 },
          { u: 0.96, v: 0.2, size: 1.0 },
          { u: 0.055, v: 0.8, size: 1.15 },
          { u: 0.145, v: 0.935, size: 1.6 },
          { u: 0.88, v: 0.91, size: 1.1 },
          { u: 0.95, v: 0.755, size: 1.05 },
          { u: 0.035, v: 0.44, size: 1.2 },
          { u: 0.97, v: 0.5, size: 1.25 },
        ]
      : [
          { u: 0.08, v: 0.1, size: 1.2 },
          { u: 0.93, v: 0.12, size: 1.15 },
          { u: 0.07, v: 0.88, size: 1.1 },
          { u: 0.93, v: 0.86, size: 1.05 },
        ];

  const links =
    kind === "orbit"
      ? [
          { a: 0, b: 1 },
          { a: 2, b: 3 },
          { a: 4, b: 5 },
          { a: 6, b: 7 },
          { a: 0, b: 4 },
          { a: 3, b: 7 },
          { a: 0, b: 8 },
          { a: 3, b: 9 },
        ]
      : [
          { a: 0, b: 2 },
          { a: 1, b: 3 },
        ];

  return { stars, nodes, links, spokes: kind === "orbit" ? [1, 3, 8] : [] };
}

function drawGrid(X: CanvasRenderingContext2D, W: number, H: number, alpha = 0.03) {
  X.save();
  X.globalAlpha = alpha;
  X.strokeStyle = "#1a9afa";
  X.lineWidth = 0.5;
  const step = 36;
  for (let gx = 0; gx < W; gx += step) {
    X.beginPath();
    X.moveTo(gx + 0.5, 0);
    X.lineTo(gx + 0.5, H);
    X.stroke();
  }
  for (let gy = 0; gy < H; gy += step) {
    X.beginPath();
    X.moveTo(0, gy + 0.5);
    X.lineTo(W, gy + 0.5);
    X.stroke();
  }
  X.restore();
}

function drawSpaceField(
  X: CanvasRenderingContext2D,
  W: number,
  H: number,
  T: number,
  cx: number,
  cy: number,
  wellR: number,
  field: SpaceField,
  opts: { ticks: boolean; mobile: boolean },
) {
  const nodes = opts.mobile ? field.nodes.slice(0, 4) : field.nodes;

  for (const star of field.stars) {
    const x = star.u * W;
    const y = star.v * H;
    if (Math.hypot(x - cx, y - cy) < wellR) continue;
    const tw = 0.24 + 0.36 * (0.5 + 0.5 * Math.sin(T * 0.016 + star.twinkle));
    X.globalAlpha = tw;
    X.fillStyle = "#d7e7ff";
    X.beginPath();
    X.arc(x, y, star.size, 0, Math.PI * 2);
    X.fill();
  }
  X.globalAlpha = 1;

  const links = field.links.filter((l) => l.a < nodes.length && l.b < nodes.length);
  for (const link of links) {
    const a = nodes[link.a];
    const b = nodes[link.b];
    X.beginPath();
    X.moveTo(a.u * W, a.v * H);
    X.lineTo(b.u * W, b.v * H);
    X.strokeStyle = "rgba(155,188,230,0.16)";
    X.lineWidth = 0.6;
    X.stroke();
  }

  for (const spoke of field.spokes) {
    if (spoke >= nodes.length) continue;
    const n = nodes[spoke];
    const x = n.u * W;
    const y = n.v * H;
    const ang = Math.atan2(cy - y, cx - x);
    X.beginPath();
    X.moveTo(x, y);
    X.lineTo(cx + Math.cos(ang) * wellR, cy + Math.sin(ang) * wellR);
    X.strokeStyle = "rgba(155,188,230,0.06)";
    X.lineWidth = 0.5;
    X.stroke();
  }

  if (opts.ticks && links.length && !opts.mobile) {
    const li = Math.floor((T * 0.0035) % links.length);
    const t = (T * 0.005) % 1;
    const a = nodes[links[li].a];
    const b = nodes[links[li].b];
    X.fillStyle = "rgba(210,226,255,0.42)";
    X.beginPath();
    X.arc(a.u * W + (b.u * W - a.u * W) * t, a.v * H + (b.v * H - a.v * H) * t, 1.1, 0, Math.PI * 2);
    X.fill();
  }

  for (const n of nodes) {
    const x = n.u * W;
    const y = n.v * H;
    if (Math.hypot(x - cx, y - cy) < wellR * 0.82) continue;
    const pulse = 0.24 + 0.1 * (0.5 + 0.5 * Math.sin(T * 0.011 + n.u * 7));
    X.globalAlpha = pulse;
    const g = X.createRadialGradient(x, y, 0, x, y, n.size * 4.5);
    g.addColorStop(0, "rgba(180,205,240,0.32)");
    g.addColorStop(1, "transparent");
    X.fillStyle = g;
    X.beginPath();
    X.arc(x, y, n.size * 4.5, 0, Math.PI * 2);
    X.fill();
    X.fillStyle = "#9eb6d8";
    X.beginPath();
    X.arc(x, y, n.size, 0, Math.PI * 2);
    X.fill();
  }
  X.globalAlpha = 1;
}

function quadPoint(
  t: number,
  sx: number,
  sy: number,
  cpx: number,
  cpy: number,
  ex: number,
  ey: number,
) {
  const mt = 1 - t;
  return {
    x: mt * mt * sx + 2 * mt * t * cpx + t * t * ex,
    y: mt * mt * sy + 2 * mt * t * cpy + t * t * ey,
  };
}

export function initStudioViz(canvas: HTMLCanvasElement, options: StudioVizOptions) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const reduced =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    document.documentElement.classList.contains("dbp-a11y-motion");

  let stopped = false;
  let W = 320;
  let H = 260;
  let T = 0;
  const getPaused = options.getPaused ?? (() => false);

  function resize() {
    const size = sizeCanvas(canvas, ctx!);
    W = size.W;
    H = size.H;
  }

  const cleanup =
    options.variant === "orbit"
      ? initOrbit(canvas, ctx, options.phaseEl, () => ({ W, H, T, reduced, getPaused, stopped, bump: () => T++ }))
      : initArchitecture(canvas, ctx, options.phaseEl, () => ({ W, H, T, reduced, getPaused, stopped, bump: () => T++ }));

  window.addEventListener("resize", resize);
  resize();

  function tick() {
    if (stopped) return;
    if (!getPaused()) {
      T += 1;
      cleanup.draw();
    }
    requestAnimationFrame(tick);
  }

  cleanup.draw();
  if (reduced) {
    T = 80;
    cleanup.draw();
  } else {
    tick();
  }

  return () => {
    stopped = true;
    window.removeEventListener("resize", resize);
    cleanup.stop();
  };
}

type Frame = {
  W: number;
  H: number;
  T: number;
  reduced: boolean;
  getPaused: () => boolean;
  stopped: boolean;
  bump: () => void;
};

function initArchitecture(
  canvas: HTMLCanvasElement,
  X: CanvasRenderingContext2D,
  phaseEl: HTMLElement | null | undefined,
  frame: () => Frame,
) {
  const ringDots: RingDot[] = [];
  const field = buildSpaceField("architecture");
  let journey: Record<string, unknown> | null = null;
  let journeyCooldown = 30;

  function roundRect(x: number, y: number, w: number, h: number, r: number) {
    X.beginPath();
    X.moveTo(x + r, y);
    X.lineTo(x + w - r, y);
    X.quadraticCurveTo(x + w, y, x + w, y + r);
    X.lineTo(x + w, y + h - r);
    X.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    X.lineTo(x + r, y + h);
    X.quadraticCurveTo(x, y + h, x, y + h - r);
    X.lineTo(x, y + r);
    X.quadraticCurveTo(x, y, x + r, y);
    X.closePath();
  }

  function drawP(x: number, y: number, size: number, color: string, glowR: number, alpha: number) {
    if (alpha < 0.01) return;
    const g = X.createRadialGradient(x, y, 0, x, y, glowR);
    const h = Math.round(Math.min(alpha, 1) * 50)
      .toString(16)
      .padStart(2, "0");
    g.addColorStop(0, color + h);
    g.addColorStop(1, "transparent");
    X.fillStyle = g;
    X.beginPath();
    X.arc(x, y, glowR, 0, Math.PI * 2);
    X.fill();
    X.beginPath();
    X.arc(x, y, size, 0, Math.PI * 2);
    X.fillStyle = color;
    X.globalAlpha = Math.min(alpha, 1);
    X.fill();
    X.globalAlpha = 1;
  }

  function getLayout() {
    const { W, H } = frame();
    const cx = W / 2;
    const cy = H / 2;
    const mobile = W < 500;
    const col1 = mobile ? W * 0.12 : W * 0.06;
    const col2 = mobile ? W * 0.28 : W * 0.23;
    const engL = mobile ? W * 0.28 : W * 0.34;
    const engR = mobile ? W * 0.72 : W * 0.66;
    const col4 = mobile ? W * 0.72 : W * 0.77;
    const col5 = mobile ? W * 0.88 : W * 0.94;
    const boxW = engR - engL;
    const boxH = mobile ? H * 0.58 : H * 0.68;
    const boxT = cy - boxH / 2;
    const sp = mobile ? 55 : 95;
    const sp2 = mobile ? 18 : 32;
    const src = [
      { x: col1, y: cy - sp, l: "Data", sub: mobile ? "" : "Nobody fully trusts it", c: "#fbbf24" },
      { x: col1, y: cy - sp2, l: "Decision", sub: mobile ? "" : "The number is disputed", c: "#fbbf24" },
      { x: col1, y: cy + sp2, l: "Workflow", sub: mobile ? "" : "Still stuck in inboxes", c: "#fbbf24" },
      { x: col1, y: cy + sp, l: mobile ? "Product" : "Product gap", sub: mobile ? "" : "No path to software", c: "#fbbf24" },
    ];
    const eng = { box: { x: engL, y: boxT, w: boxW, h: boxH, r: mobile ? 10 : 14 }, core: { x: cx, y: cy, c: "#1a9afa", r: mobile ? 7 : 10 } };
    const out = [
      { x: col5, y: cy - sp, l: mobile ? "Trusted" : "Trusted data", c: "#1a9afa" },
      { x: col5, y: cy - sp2, l: mobile ? "Shared" : "Shared number", c: "#1a9afa" },
      { x: col5, y: cy + sp2, l: mobile ? "Governed" : "Governed workflow", c: "#1a9afa" },
      { x: col5, y: cy + sp, l: mobile ? "Product" : "Working product", c: "#1a9afa" },
    ];
    return { src, eng, out, cx, cy, col1, col2, engL, engR, col4, col5, boxW, boxH };
  }

  function startJourney(L: ReturnType<typeof getLayout>) {
    const oi = Math.floor(Math.random() * L.out.length);
    journey = {
      out: L.out[oi],
      phase: "toData",
      p: 0,
      speed: 0.02,
      srcParticles: L.src.map((s) => ({ src: s })),
      dataX: L.col2,
      engL: L.engL,
      engR: L.engR,
      decX: L.col4,
      coreCx: L.cx,
      coreCy: L.cy,
      core: L.eng.core,
      arcBright: [0, 0, 0],
      ringFlowStage: 0,
      ringFlowTimer: 0,
      bloomLife: 0,
      bloomRing: 0,
      sparkleList: [] as Array<{ x: number; y: number; vx: number; vy: number; life: number; size: number; color: string }>,
    };
  }

  function spawnRingDots(cx: number, cy: number, ringR: number, count: number, color: string, speed: number) {
    for (let i = 0; i < count; i++) {
      ringDots.push({
        cx,
        cy,
        angle: Math.random() * Math.PI * 2,
        startR: ringR,
        r: ringR,
        speed: speed + Math.random() * 0.4,
        color,
        size: 1 + Math.random() * 0.5,
      });
    }
  }

  function draw() {
    const { W, H, T } = frame();
    X.clearRect(0, 0, W, H);
    const L = getLayout();
    const { eng, src, out, cx, cy } = L;
    const box = eng.box;
    const core = eng.core;
    const pulse = Math.sin(T * 0.025) * 0.2 + 0.8;
    const ecy = cy + 4;

    drawGrid(X, W, H, 0.028);
    drawSpaceField(X, W, H, T, cx, cy, Math.min(box.w, box.h) * 0.52, field, {
      ticks: false,
      mobile: W < 500,
    });

    const zoneH = H * 0.62;
    const zoneTop = cy - zoneH / 2;
    const zoneW = W * 0.09;
    roundRect(L.col2 - zoneW / 2, zoneTop, zoneW, zoneH, 8);
    X.fillStyle = "rgba(251,191,36,0.012)";
    X.fill();
    roundRect(L.col2 - zoneW / 2, zoneTop, zoneW, zoneH, 8);
    X.strokeStyle = "rgba(251,191,36,0.05)";
    X.lineWidth = 0.5;
    X.stroke();
    roundRect(L.col4 - zoneW / 2, zoneTop, zoneW, zoneH, 8);
    X.fillStyle = "rgba(26,154,250,0.012)";
    X.fill();
    roundRect(L.col4 - zoneW / 2, zoneTop, zoneW, zoneH, 8);
    X.strokeStyle = "rgba(26,154,250,0.05)";
    X.lineWidth = 0.5;
    X.stroke();

    X.font = `600 ${W < 500 ? "6.5" : "8"}px 'DM Mono',monospace`;
    X.textAlign = "center";
    X.fillStyle = "#eeedf5";
    X.globalAlpha = 0.92;
    X.fillText("UNIFIED", L.col2, zoneTop + zoneH + 16);
    X.fillText("DATA LAYER", L.col2, zoneTop + zoneH + 28);
    X.fillText("DECISIONS", L.col4, zoneTop + zoneH + 16);
    X.fillText("& ACTIONS", L.col4, zoneTop + zoneH + 28);
    X.globalAlpha = 1;

    src.forEach((s) => {
      X.beginPath();
      X.moveTo(s.x + 12, s.y);
      X.quadraticCurveTo((s.x + L.col2) / 2, s.y, L.col2, cy);
      X.strokeStyle = "rgba(251,191,36,0.18)";
      X.lineWidth = 1.2;
      X.stroke();
    });
    X.beginPath();
    X.moveTo(L.col2 + 6, cy);
    X.lineTo(L.engL, cy);
    X.strokeStyle = "rgba(251,191,36,0.14)";
    X.lineWidth = 1.2;
    X.stroke();
    X.beginPath();
    X.moveTo(L.engR, cy);
    X.lineTo(L.col4 - 6, cy);
    X.strokeStyle = "rgba(26,154,250,0.16)";
    X.lineWidth = 1.2;
    X.stroke();
    out.forEach((o) => {
      X.beginPath();
      X.moveTo(L.col4, cy);
      X.quadraticCurveTo((L.col4 + o.x) / 2, o.y, o.x - 12, o.y);
      X.strokeStyle = "rgba(26,154,250,0.18)";
      X.lineWidth = 1.2;
      X.stroke();
    });

    const bolt = T % 90;
    if (bolt < 40) {
      const t = bolt / 40;
      src.forEach((s, i) => {
        const delay = (i % 4) * 0.08;
        const p = Math.min(1, Math.max(0, (t - delay) * 1.4));
        if (p <= 0 || p >= 1) return;
        const x = s.x + 12 + (L.col2 - (s.x + 12)) * p;
        const y = s.y + (cy - s.y) * p;
        const g = X.createRadialGradient(x, y, 0, x, y, 14);
        g.addColorStop(0, "rgba(255,255,255,0.85)");
        g.addColorStop(0.4, "rgba(251,191,36,0.55)");
        g.addColorStop(1, "transparent");
        X.fillStyle = g;
        X.beginPath();
        X.arc(x, y, 14, 0, Math.PI * 2);
        X.fill();
      });
      out.forEach((o, i) => {
        const delay = 0.2 + (i % 4) * 0.08;
        const p = Math.min(1, Math.max(0, (t - delay) * 1.4));
        if (p <= 0 || p >= 1) return;
        const x = L.col4 + (o.x - 12 - L.col4) * p;
        const y = cy + (o.y - cy) * p;
        const g = X.createRadialGradient(x, y, 0, x, y, 14);
        g.addColorStop(0, "rgba(255,255,255,0.85)");
        g.addColorStop(0.4, "rgba(91,184,255,0.55)");
        g.addColorStop(1, "transparent");
        X.fillStyle = g;
        X.beginPath();
        X.arc(x, y, 14, 0, Math.PI * 2);
        X.fill();
      });
    }

    const boxGlow = X.createRadialGradient(cx, cy, 0, cx, cy, box.w * 0.55);
    boxGlow.addColorStop(0, "rgba(26,154,250,0.025)");
    boxGlow.addColorStop(1, "transparent");
    X.fillStyle = boxGlow;
    X.beginPath();
    X.arc(cx, cy, box.w * 0.55, 0, Math.PI * 2);
    X.fill();
    roundRect(box.x, box.y, box.w, box.h, box.r);
    X.fillStyle = "rgba(26,154,250,0.012)";
    X.fill();
    roundRect(box.x, box.y, box.w, box.h, box.r);
    X.strokeStyle = `rgba(26,154,250,${0.06 + pulse * 0.03})`;
    X.lineWidth = 1.2;
    X.stroke();
    X.font = `600 ${W < 500 ? "8" : "10"}px 'DM Mono',monospace`;
    X.fillStyle = "#ffffff";
    X.globalAlpha = 0.85;
    X.textAlign = "center";
    X.fillText("THE STUDIO", cx, box.y + 20);
    X.font = `400 ${W < 500 ? "6.5" : "7.5"}px 'DM Mono',monospace`;
    X.fillStyle = "#c8e7ff";
    X.globalAlpha = 0.7;
    X.fillText("DATA AND AI EXPERTISE", cx, box.y + 34);
    X.globalAlpha = 1;

    const maxR = Math.min(box.w, box.h) * 0.38;
    const rings = [
      { r: maxR, label: "UNDERSTAND", c: "#34d399", segs: 16, dotR: 1.2 },
      { r: maxR * 0.66, label: "SHAPE", c: "#67e8f9", segs: 12, dotR: 1.0 },
      { r: maxR * 0.33, label: "BUILD", c: "#1a9afa", segs: 8, dotR: 0.8 },
    ];
    let arcB = [0.04, 0.04, 0.04];
    const j = journey as {
      phase?: string;
      arcBright?: number[];
      ringFlowStage?: number;
      p?: number;
      speed?: number;
      srcParticles?: Array<{ src: (typeof src)[number] }>;
      dataX?: number;
      engL?: number;
      engR?: number;
      decX?: number;
      out?: (typeof out)[number];
      bloomLife?: number;
      bloomRing?: number;
      ringFlowTimer?: number;
      sparkleList?: Array<{ x: number; y: number; vx: number; vy: number; life: number; size: number; color: string }>;
    } | null;
    if (j?.phase === "inEngine" && j.arcBright) arcB = j.arcBright.map((v) => Math.max(0.04, v));

    rings.forEach((ring, ri) => {
      const bright = arcB[ri];
      const r = ring.r;
      const segArc = (Math.PI * 2) / ring.segs;
      const gap = segArc * 0.15;
      for (let s = 0; s < ring.segs; s++) {
        X.beginPath();
        X.arc(cx, ecy, r, s * segArc + gap / 2, (s + 1) * segArc - gap / 2);
        X.strokeStyle = ring.c;
        X.globalAlpha = bright;
        X.lineWidth = 0.8;
        X.stroke();
        X.globalAlpha = 1;
      }
      for (let d = 0; d < ring.segs; d++) {
        const a = (d / ring.segs) * Math.PI * 2 + T * 0.0015 * (ri + 1);
        X.beginPath();
        X.arc(cx + Math.cos(a) * r, ecy + Math.sin(a) * r, ring.dotR, 0, Math.PI * 2);
        X.fillStyle = ring.c;
        X.globalAlpha = bright > 0.1 ? bright * 0.6 : 0.02;
        X.fill();
        X.globalAlpha = 1;
      }
      X.font = "500 5.5px 'DM Mono',monospace";
      X.fillStyle = ring.c;
      X.globalAlpha = Math.max(0.45, Math.min(bright * 2.2, 0.85));
      X.textAlign = "center";
      X.fillText(ring.label, cx, ecy - r - 5);
      X.globalAlpha = 1;
    });

    for (let i = ringDots.length - 1; i >= 0; i--) {
      const d = ringDots[i];
      d.r -= d.speed;
      d.angle += 0.008;
      if (d.r <= 8) {
        ringDots.splice(i, 1);
        continue;
      }
      const dx = d.cx + Math.cos(d.angle) * d.r;
      const dy = d.cy + Math.sin(d.angle) * d.r;
      const a = Math.sin((d.r / d.startR) * Math.PI) * 0.7;
      X.beginPath();
      X.arc(dx, dy, d.size, 0, Math.PI * 2);
      X.fillStyle = d.color;
      X.globalAlpha = a;
      X.fill();
      X.globalAlpha = 1;
    }

    const cA = j?.phase === "inEngine";
    const cp = cA ? pulse * 1.2 : pulse;
    const coreG = X.createRadialGradient(cx, ecy, 0, cx, ecy, core.r * 3);
    coreG.addColorStop(0, `rgba(26,154,250,${0.06 * cp})`);
    coreG.addColorStop(1, "transparent");
    X.fillStyle = coreG;
    X.beginPath();
    X.arc(cx, ecy, core.r * 3, 0, Math.PI * 2);
    X.fill();
    const cg = X.createRadialGradient(cx, ecy, 0, cx, ecy, core.r);
    cg.addColorStop(0, "#c8e7ff");
    cg.addColorStop(1, "#1a9afa");
    X.fillStyle = cg;
    X.globalAlpha = cp * 0.85;
    X.beginPath();
    X.arc(cx, ecy, core.r, 0, Math.PI * 2);
    X.fill();
    X.globalAlpha = 1;

    src.forEach((s) => {
      X.beginPath();
      X.arc(s.x, s.y, 5, 0, Math.PI * 2);
      X.fillStyle = s.c;
      X.globalAlpha = 0.9;
      X.fill();
      X.globalAlpha = 1;
      X.font = `600 ${W < 500 ? "8" : "11"}px 'DM Mono',monospace`;
      X.fillStyle = "#eeedf5";
      X.globalAlpha = 0.95;
      X.textAlign = "center";
      X.fillText(s.l, s.x, s.y + 20);
      X.font = `400 ${W < 500 ? "6" : "8"}px 'DM Mono',monospace`;
      X.fillStyle = "#c4c0d0";
      X.globalAlpha = 0.8;
      X.fillText(s.sub, s.x, s.y + 32);
      X.globalAlpha = 1;
    });

    out.forEach((o) => {
      let bg = 0;
      if (j?.phase === "bloom" && j.out === o) bg = j.bloomLife ?? 0;
      const r = 5 + bg * 3;
      const og = X.createRadialGradient(o.x, o.y, 0, o.x, o.y, 16 + bg * 28);
      og.addColorStop(0, `rgba(26,154,250,${0.2 + bg * 0.3})`);
      og.addColorStop(1, "transparent");
      X.fillStyle = og;
      X.beginPath();
      X.arc(o.x, o.y, 16 + bg * 28, 0, Math.PI * 2);
      X.fill();
      X.beginPath();
      X.arc(o.x, o.y, r, 0, Math.PI * 2);
      X.fillStyle = bg > 0.3 ? "#ffffff" : o.c;
      X.globalAlpha = 0.95;
      X.fill();
      X.globalAlpha = 1;
      X.font = `${bg > 0.3 ? "700" : "600"} ${W < 500 ? "8" : "11"}px 'DM Mono',monospace`;
      X.fillStyle = "#eeedf5";
      X.globalAlpha = 0.95;
      X.textAlign = "center";
      X.fillText(o.l, o.x, o.y + 22);
      X.globalAlpha = 1;
    });

    X.font = `700 ${W < 500 ? "8" : "10"}px 'DM Mono',monospace`;
    X.globalAlpha = 0.9;
    X.fillStyle = "#fbbf24";
    X.textAlign = "center";
    X.fillText("CLIENT NEED", L.col1, 20);
    X.fillStyle = "#ffffff";
    X.fillText("THE STUDIO", cx, 20);
    X.fillStyle = "#5bb8ff";
    X.fillText("EVOLVE", L.col5, 20);
    X.globalAlpha = 1;

    if (!journey) {
      journeyCooldown -= 1;
      if (journeyCooldown <= 0) startJourney(L);
      setPhase(phaseEl, "");
    } else if (j) {
      if (j.phase === "toData") {
        j.p = (j.p ?? 0) + (j.speed ?? 0.02);
        const ep = ease(j.p);
        const a = Math.min(j.p * 5, 1);
        j.srcParticles?.forEach((sp) => {
          const x = sp.src.x + 12 + ((j.dataX ?? L.col2) - (sp.src.x + 12)) * ep;
          const y = sp.src.y + (cy - sp.src.y) * ep;
          drawP(x, y, 2, "#fbbf24", 9, a * 0.8);
        });
        if (j.p >= 1) {
          j.phase = "inData";
          j.p = 0;
        }
      } else if (j.phase === "inData") {
        j.p = (j.p ?? 0) + 0.05;
        const a = Math.sin(j.p * Math.PI);
        drawP(j.dataX ?? L.col2, cy, 3.5, "#fbbf24", 10, 0.5 + a * 0.4);
        if (j.p >= 1) {
          j.phase = "toEngine";
          j.p = 0;
        }
      } else if (j.phase === "toEngine") {
        j.p = (j.p ?? 0) + (j.speed ?? 0.02) * 1.3;
        const ep = ease(j.p);
        drawP((j.dataX ?? L.col2) + 6 + ((j.engL ?? L.engL) - (j.dataX ?? L.col2) - 6) * ep, cy, 2.5, "#fbbf24", 10, 0.85);
        if (j.p >= 1) {
          j.phase = "inEngine";
          j.p = 0;
          j.ringFlowStage = 0;
          j.ringFlowTimer = 0;
          j.arcBright = [0, 0, 0];
        }
      } else if (j.phase === "inEngine") {
        j.ringFlowTimer = (j.ringFlowTimer ?? 0) + 1;
        const mr = Math.min(L.boxW, eng.box.h) * 0.38;
        if (!j.arcBright) j.arcBright = [0, 0, 0];
        if (j.ringFlowStage === 0) {
          j.arcBright[0] = Math.min(j.arcBright[0] + 0.02, 0.3);
          if (j.ringFlowTimer === 5 || j.ringFlowTimer === 20) spawnRingDots(cx, ecy, mr, 6, "#34d399", 0.6);
          if (j.ringFlowTimer > 38) {
            j.ringFlowStage = 1;
            j.ringFlowTimer = 0;
          }
        }
        if (j.ringFlowStage === 1) {
          j.arcBright[0] = Math.max(j.arcBright[0] - 0.004, 0.14);
          j.arcBright[1] = Math.min(j.arcBright[1] + 0.02, 0.3);
          if (j.ringFlowTimer === 5 || j.ringFlowTimer === 20) spawnRingDots(cx, ecy, mr * 0.66, 5, "#67e8f9", 0.5);
          if (j.ringFlowTimer > 38) {
            j.ringFlowStage = 2;
            j.ringFlowTimer = 0;
          }
        }
        if (j.ringFlowStage === 2) {
          j.arcBright[1] = Math.max(j.arcBright[1] - 0.004, 0.14);
          j.arcBright[2] = Math.min(j.arcBright[2] + 0.025, 0.35);
          if (j.ringFlowTimer === 5 || j.ringFlowTimer === 20) spawnRingDots(cx, ecy, mr * 0.33, 4, "#1a9afa", 0.4);
          if (j.ringFlowTimer > 38) {
            j.ringFlowStage = 3;
            j.ringFlowTimer = 0;
          }
        }
        if (j.ringFlowStage === 3 && j.ringFlowTimer > 22) {
          j.phase = "toDecision";
          j.p = 0;
        }
      } else if (j.phase === "toDecision") {
        j.p = (j.p ?? 0) + (j.speed ?? 0.02) * 1.3;
        const ep = ease(j.p);
        drawP((j.engR ?? L.engR) + ((j.decX ?? L.col4) - 6 - (j.engR ?? L.engR)) * ep, cy, 3, "#1a9afa", 13, 0.9);
        if (j.p >= 1) {
          j.phase = "inDecision";
          j.p = 0;
        }
      } else if (j.phase === "inDecision") {
        j.p = (j.p ?? 0) + 0.05;
        drawP(j.decX ?? L.col4, cy, 3, "#1a9afa", 10, 0.8);
        if (j.p >= 1) {
          j.phase = "toOutput";
          j.p = 0;
        }
      } else if (j.phase === "toOutput" && j.out) {
        j.p = (j.p ?? 0) + (j.speed ?? 0.02);
        const ep = ease(j.p);
        const x = (j.decX ?? L.col4) + (j.out.x - 12 - (j.decX ?? L.col4)) * ep;
        const y = cy + (j.out.y - cy) * ep;
        drawP(x, y, 3.5, "#5bb8ff", 15, 0.9);
        if (j.p >= 1) {
          j.phase = "bloom";
          j.bloomLife = 1;
          j.bloomRing = 0;
          j.sparkleList = [];
          for (let i = 0; i < 8; i++) {
            const angle = (Math.PI * 2) / 8 * i + Math.random() * 0.2;
            j.sparkleList.push({
              x: j.out.x,
              y: j.out.y,
              vx: Math.cos(angle) * (0.8 + Math.random() * 1.2),
              vy: Math.sin(angle) * (0.8 + Math.random() * 1.2),
              life: 1,
              size: 0.5 + Math.random() * 0.6,
              color: Math.random() > 0.5 ? "#5bb8ff" : "#67e8f9",
            });
          }
        }
      } else if (j.phase === "bloom" && j.out) {
        j.bloomLife = (j.bloomLife ?? 1) - 0.012;
        j.bloomRing = (j.bloomRing ?? 0) + 1.8;
        if ((j.bloomRing ?? 0) < 45) {
          X.beginPath();
          X.arc(j.out.x, j.out.y, j.bloomRing ?? 0, 0, Math.PI * 2);
          X.strokeStyle = `rgba(196,181,253,${(j.bloomLife ?? 0) * 0.18 * (1 - (j.bloomRing ?? 0) / 45)})`;
          X.lineWidth = 1.2;
          X.stroke();
        }
        j.sparkleList?.forEach((s) => {
          s.x += s.vx;
          s.y += s.vy;
          s.life -= 0.014;
          X.beginPath();
          X.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
          X.fillStyle = s.color;
          X.globalAlpha = s.life * 0.6;
          X.fill();
          X.globalAlpha = 1;
        });
        if ((j.bloomLife ?? 0) <= 0) {
          journey = null;
          journeyCooldown = 25;
        }
      }

      const labels: Record<string, string> = {
        toData: "Starting from the need",
        inData: "Naming the constraint",
        toEngine: "Bringing studio expertise",
        inEngine: ["Understanding the problem", "Shaping the approach", "Building the path", "Expertise applied"][j.ringFlowStage || 0],
        toDecision: "Turning expertise into value",
        inDecision: "Settling what you keep",
        toOutput: "Leaving something you can run",
        bloom: "Operating value in hand",
      };
      setPhase(phaseEl, labels[j.phase ?? ""] || "");
    }

    void canvas;
  }

  return { draw, stop() {} };
}

function initOrbit(
  canvas: HTMLCanvasElement,
  X: CanvasRenderingContext2D,
  phaseEl: HTMLElement | null | undefined,
  frame: () => Frame,
) {
  const field = buildSpaceField("orbit");
  const caps = [
    { label: "Data", color: "#fbbf24", angle: -Math.PI * 0.78, moons: ["Warehouses", "Pipelines", "Quality"] },
    { label: "Decisions", color: "#34d399", angle: -Math.PI * 0.28, moons: ["Metrics", "Forecasts", "Experiments"] },
    { label: "Intelligence", color: "#67e8f9", angle: Math.PI * 0.22, moons: ["Workflows", "Assistants", "Agents"] },
    { label: "Products", color: "#5bb8ff", angle: Math.PI * 0.78, moons: ["Web apps", "Internal tools", "Experiences"] },
  ];
  const rings = [
    { label: "UNDERSTAND", color: "#34d399", scale: 1, segs: 18, dotR: 1.15 },
    { label: "SHAPE", color: "#67e8f9", scale: 0.68, segs: 14, dotR: 1 },
    { label: "BUILD", color: "#1a9afa", scale: 0.38, segs: 10, dotR: 0.85 },
  ];

  const { reduced } = frame();
  let phase: "engage" | "shape" | "handoff" = reduced ? "shape" : "engage";
  let p = reduced ? 0.42 : 0;
  let capIndex = 0;
  let bloom = 0;

  function draw() {
    const { W, H, T, reduced: freeze } = frame();
    X.clearRect(0, 0, W, H);
    const narrow = W < 560;
    const cx = W / 2;
    const cy = H * 0.455;
    const outerR = Math.min(W, H) * (narrow ? 0.34 : 0.355);
    const maxR = outerR * 0.7;
    const pulse = Math.sin(T * 0.02) * 0.12 + 0.88;

    drawGrid(X, W, H, 0.03);
    drawSpaceField(X, W, H, T, cx, cy, outerR * 0.92, field, {
      ticks: !freeze,
      mobile: narrow,
    });

    const well = X.createRadialGradient(cx, cy, 0, cx, cy, maxR * 1.2);
    well.addColorStop(0, "rgba(26,154,250,0.1)");
    well.addColorStop(0.5, "rgba(26,154,250,0.03)");
    well.addColorStop(1, "transparent");
    X.fillStyle = well;
    X.beginPath();
    X.arc(cx, cy, maxR * 1.2, 0, Math.PI * 2);
    X.fill();

    const valueY = H * 0.905;
    const valueW = Math.min(W * 0.38, 240);
    const valueAnchors = caps.map((_, i) => ({
      x: cx - valueW + (valueW * 2 * (i + 0.5)) / caps.length,
      y: valueY + 6,
    }));

    caps.forEach((cap, i) => {
      const sx = cx + Math.cos(cap.angle) * outerR;
      const sy = cy + Math.sin(cap.angle) * outerR;
      const dest = valueAnchors[i];
      const cpx = (sx + dest.x) * 0.5;
      const cpy = Math.max(sy, dest.y) * 0.62 + 18;
      X.beginPath();
      X.moveTo(sx, sy);
      X.quadraticCurveTo(cpx, cpy, dest.x, dest.y);
      X.strokeStyle = cap.color;
      const live = i === capIndex && phase === "handoff";
      X.globalAlpha = live ? 0.22 + bloom * 0.35 : 0.06;
      X.lineWidth = live ? 1.2 : 0.7;
      X.stroke();
    });

    X.beginPath();
    X.moveTo(cx - valueW, valueY);
    X.quadraticCurveTo(cx, valueY + 20, cx + valueW, valueY);
    X.strokeStyle = "#5bb8ff";
    X.globalAlpha = 0.28 + (phase === "handoff" ? bloom * 0.22 : 0);
    X.lineWidth = 1.15;
    X.stroke();
    X.globalAlpha = 0.78;
    X.font = `600 ${narrow ? 6.5 : 8}px 'DM Mono',monospace`;
    X.fillStyle = "#c8e7ff";
    X.textAlign = "center";
    X.fillText("OPERATING VALUE", cx, valueY + 28);
    X.globalAlpha = 1;

    X.beginPath();
    X.arc(cx, cy, outerR, 0, Math.PI * 2);
    X.strokeStyle = "rgba(238,237,245,0.08)";
    X.lineWidth = 0.7;
    X.stroke();

    rings.forEach((ring, ri) => {
      const r = maxR * ring.scale;
      const shaping = phase === "shape" && p > ri * 0.28;
      const bright = 0.14 + (shaping ? 0.18 : 0);
      const segArc = (Math.PI * 2) / ring.segs;
      const gap = segArc * 0.16;
      for (let s = 0; s < ring.segs; s++) {
        X.beginPath();
        X.arc(cx, cy, r, s * segArc + gap / 2, (s + 1) * segArc - gap / 2);
        X.strokeStyle = ring.color;
        X.globalAlpha = bright;
        X.lineWidth = 0.9;
        X.stroke();
      }
      for (let d = 0; d < ring.segs; d++) {
        const a = (d / ring.segs) * Math.PI * 2 + T * 0.0012 * (ri + 1);
        X.beginPath();
        X.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, ring.dotR, 0, Math.PI * 2);
        X.fillStyle = ring.color;
        X.globalAlpha = shaping ? 0.45 : 0.12;
        X.fill();
      }
      X.font = `500 ${narrow ? 5.5 : 6.5}px 'DM Mono',monospace`;
      X.fillStyle = ring.color;
      X.globalAlpha = 0.62;
      X.textAlign = "center";
      X.fillText(ring.label, cx, cy - r - 6);
      X.globalAlpha = 1;
    });

    const coreR = narrow ? 10 : 11.5;
    const coreG = X.createRadialGradient(cx, cy, 0, cx, cy, coreR * 3.4);
    coreG.addColorStop(0, `rgba(26,154,250,${0.12 * pulse})`);
    coreG.addColorStop(1, "transparent");
    X.fillStyle = coreG;
    X.beginPath();
    X.arc(cx, cy, coreR * 3.4, 0, Math.PI * 2);
    X.fill();
    const cg = X.createRadialGradient(cx, cy, 0, cx, cy, coreR);
    cg.addColorStop(0, "#c8e7ff");
    cg.addColorStop(1, "#1a9afa");
    X.fillStyle = cg;
    X.globalAlpha = 0.92 * pulse;
    X.beginPath();
    X.arc(cx, cy, coreR, 0, Math.PI * 2);
    X.fill();
    X.globalAlpha = 0.88;
    X.font = `600 ${narrow ? 8 : 9}px 'DM Mono',monospace`;
    X.fillStyle = "#ffffff";
    X.textAlign = "center";
    X.fillText("THE STUDIO", cx, cy + coreR + 15);
    X.globalAlpha = 1;

    const moonR = narrow ? 15 : 21;
    caps.forEach((cap, i) => {
      const x = cx + Math.cos(cap.angle) * outerR;
      const y = cy + Math.sin(cap.angle) * outerR;
      const active = i === capIndex;
      X.beginPath();
      X.moveTo(cx + Math.cos(cap.angle) * (maxR * 1.02), cy + Math.sin(cap.angle) * (maxR * 1.02));
      X.lineTo(x, y);
      X.strokeStyle = cap.color;
      X.globalAlpha = active ? 0.32 : 0.1;
      X.lineWidth = 0.9;
      X.stroke();

      cap.moons.forEach((moon, mi) => {
        const a = T * 0.006 + cap.angle + (mi * Math.PI * 2) / 3;
        const mx = x + Math.cos(a) * moonR;
        const my = y + Math.sin(a) * moonR;
        X.beginPath();
        X.arc(mx, my, active ? 1.7 : 1.25, 0, Math.PI * 2);
        X.fillStyle = cap.color;
        X.globalAlpha = active ? 0.82 : 0.22;
        X.fill();
        if (!narrow) {
          const lx = mx + Math.cos(a) * 8;
          const ly = my + Math.sin(a) * 8 + 2;
          if (lx > 26 && lx < W - 26 && ly > 12 && ly < H - 18) {
            X.font = "500 5.5px 'DM Mono',monospace";
            X.fillStyle = "#eeedf5";
            X.globalAlpha = active ? 0.7 : 0.28;
            X.textAlign = "center";
            const outward = Math.cos(a) * Math.cos(cap.angle) + Math.sin(a) * Math.sin(cap.angle);
            if (active || outward > 0.15) X.fillText(moon, lx, ly);
          }
        }
      });

      const nodeG = X.createRadialGradient(x, y, 0, x, y, 14);
      nodeG.addColorStop(0, active ? `${cap.color}55` : `${cap.color}18`);
      nodeG.addColorStop(1, "transparent");
      X.fillStyle = nodeG;
      X.globalAlpha = 1;
      X.beginPath();
      X.arc(x, y, 14, 0, Math.PI * 2);
      X.fill();
      X.beginPath();
      X.arc(x, y, active ? 5.4 : 4.1, 0, Math.PI * 2);
      X.fillStyle = cap.color;
      X.globalAlpha = active ? 1 : 0.68;
      X.fill();

      const labelOut = Math.sin(cap.angle) < 0.15 ? 18 : -12;
      X.globalAlpha = active ? 0.95 : 0.72;
      X.font = `600 ${narrow ? 7.5 : 8.5}px 'DM Mono',monospace`;
      X.fillStyle = "#eeedf5";
      X.textAlign = "center";
      X.fillText(cap.label, x, y + labelOut);
      X.globalAlpha = 1;
    });

    const cap = caps[capIndex];
    const sx = cx + Math.cos(cap.angle) * outerR;
    const sy = cy + Math.sin(cap.angle) * outerR;
    const dest = valueAnchors[capIndex];
    const cpx = (sx + dest.x) * 0.5;
    const cpy = Math.max(sy, dest.y) * 0.62 + 18;

    if (phase === "engage") {
      if (!freeze) p += 0.011;
      const ep = ease(Math.min(p, 1));
      const x = sx + (cx + Math.cos(cap.angle) * maxR - sx) * ep;
      const y = sy + (cy + Math.sin(cap.angle) * maxR - sy) * ep;
      X.beginPath();
      X.arc(x, y, 3, 0, Math.PI * 2);
      X.fillStyle = cap.color;
      X.fill();
      if (p >= 1) {
        phase = "shape";
        p = 0;
      }
      setPhase(phaseEl, "A capability engages");
    } else if (phase === "shape") {
      if (!freeze) p += 0.009;
      const ri = Math.min(2.999, p * 3);
      const i0 = Math.min(2, Math.floor(ri));
      const i1 = Math.min(2, i0 + 1);
      const frac = ri - i0;
      const r = maxR * (rings[i0].scale + (rings[i1].scale - rings[i0].scale) * frac);
      const a = cap.angle + p * Math.PI * 1.55;
      X.beginPath();
      X.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 2.7, 0, Math.PI * 2);
      X.fillStyle = rings[i0].color;
      X.fill();
      if (p >= 1) {
        phase = "handoff";
        p = 0;
        bloom = 1;
      }
      setPhase(phaseEl, "The studio shapes it");
    } else {
      if (!freeze) {
        p += 0.012;
        bloom = Math.max(0, bloom - 0.01);
      }
      const t = ease(Math.min(p, 1));
      const pt = quadPoint(t, cx, cy, cpx, cpy, dest.x, dest.y);
      if (p < 1) {
        X.beginPath();
        X.arc(pt.x, pt.y, 3.1, 0, Math.PI * 2);
        X.fillStyle = cap.color;
        X.fill();
      }
      const bloomR = (1 - bloom) * 22;
      X.beginPath();
      X.arc(dest.x, dest.y, 4.2 + (1 - bloom) * 2, 0, Math.PI * 2);
      X.fillStyle = bloom > 0.45 ? "#ffffff" : cap.color;
      X.globalAlpha = 0.95;
      X.fill();
      if (bloomR > 2) {
        X.beginPath();
        X.arc(dest.x, dest.y, bloomR, 0, Math.PI * 2);
        X.strokeStyle = cap.color;
        X.globalAlpha = bloom * 0.35;
        X.lineWidth = 1.1;
        X.stroke();
      }
      X.globalAlpha = 1;
      setPhase(phaseEl, "Operating value in the client's hands");
      if (!freeze && bloom <= 0 && p >= 1) {
        phase = "engage";
        p = 0;
        capIndex = (capIndex + 1) % caps.length;
      }
    }

    void canvas;
  }

  return { draw, stop() {} };
}
