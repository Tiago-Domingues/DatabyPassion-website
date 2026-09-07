type StudioVizFigureProps = {
  variant: "orbit" | "architecture";
};

const CX = 500;
const CY = 286;

const STARS: Array<{ x: number; y: number; r: number; delay: string }> = [
  { x: 133.9, y: 25.6, r: 0.7, delay: "0s" },
  { x: 886.3, y: 14.4, r: 1.2, delay: "-1.4s" },
  { x: 66.7, y: 536.2, r: 0.85, delay: "-2.1s" },
  { x: 958.4, y: 509.4, r: 1.05, delay: "-0.6s" },
  { x: 165.2, y: 23.6, r: 0.8, delay: "-3.2s" },
  { x: 927.1, y: 59.5, r: 0.95, delay: "-0.9s" },
  { x: 49.2, y: 566.6, r: 1.3, delay: "-2.8s" },
  { x: 831.5, y: 585, r: 0.85, delay: "-1.1s" },
  { x: 77.9, y: 88.8, r: 0.8, delay: "-4s" },
  { x: 967.1, y: 67.9, r: 0.9, delay: "-1.7s" },
  { x: 103.7, y: 45.2, r: 1.05, delay: "-2.4s" },
  { x: 115, y: 0.9, r: 0.95, delay: "-0.3s" },
  { x: 188.3, y: 95.1, r: 0.85, delay: "-3.6s" },
  { x: 993.2, y: 545.2, r: 1.2, delay: "-2.2s" },
  { x: 941.7, y: 503.6, r: 0.75, delay: "-5s" },
  { x: 66.3, y: 98.7, r: 1.1, delay: "-1.8s" },
  { x: 972.1, y: 52, r: 1.15, delay: "-0.5s" },
  { x: 89.7, y: 545.3, r: 1.3, delay: "-3.9s" },
  { x: 69.2, y: 34.4, r: 1.2, delay: "-2.6s" },
  { x: 890.2, y: 41.5, r: 0.85, delay: "-4.4s" },
  { x: 62.1, y: 525, r: 1.3, delay: "-1.2s" },
  { x: 22.1, y: 62.6, r: 1.25, delay: "-3.1s" },
  { x: 965.7, y: 114.4, r: 0.8, delay: "-0.8s" },
  { x: 82.1, y: 519, r: 0.7, delay: "-4.7s" },
  { x: 854.4, y: 538.6, r: 1, delay: "-2s" },
  { x: 169.9, y: 53.5, r: 0.95, delay: "-1.5s" },
  { x: 91, y: 25, r: 0.8, delay: "-3.4s" },
  { x: 65.9, y: 33.6, r: 1.15, delay: "-0.2s" },
  { x: 41, y: 577.6, r: 1.25, delay: "-2.9s" },
  { x: 919.6, y: 565.7, r: 1.3, delay: "-4.1s" },
  { x: 197.1, y: 52.7, r: 1.15, delay: "-1.9s" },
  { x: 834.9, y: 79, r: 0.85, delay: "-3.7s" },
  { x: 127.1, y: 540.5, r: 0.8, delay: "-0.4s" },
];

const NODES = [
  { x: 70, y: 62, r: 1.55 },
  { x: 155, y: 34, r: 1.05 },
  { x: 900, y: 53, r: 1.7 },
  { x: 960, y: 124, r: 1.0 },
  { x: 55, y: 496, r: 1.15 },
  { x: 145, y: 580, r: 1.6 },
  { x: 880, y: 564, r: 1.1 },
  { x: 950, y: 468, r: 1.05 },
];

const NODE_LINKS: Array<[number, number]> = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
  [0, 4],
  [3, 7],
];

const RINGS = [
  { label: "Understand", radius: 176, className: "studio-viz-ring--understand" },
  { label: "Shape", radius: 130, className: "studio-viz-ring--shape" },
  { label: "Build", radius: 88, className: "studio-viz-ring--build" },
  { label: "Evolve", radius: 52, className: "studio-viz-ring--evolve" },
] as const;

const BRAIN_NODES = [
  { x: CX + 0, y: CY - 36, r: 1.45 },
  { x: CX + 22, y: CY - 28, r: 1.1 },
  { x: CX + 32, y: CY - 8, r: 1.3 },
  { x: CX + 28, y: CY + 18, r: 1.05 },
  { x: CX + 12, y: CY + 34, r: 1.2 },
  { x: CX - 10, y: CY + 36, r: 1.1 },
  { x: CX - 28, y: CY + 20, r: 1.35 },
  { x: CX - 34, y: CY - 4, r: 1.15 },
  { x: CX - 24, y: CY - 26, r: 1.05 },
  { x: CX + 8, y: CY - 22, r: 0.95 },
  { x: CX + 18, y: CY + 6, r: 1.0 },
  { x: CX - 6, y: CY + 20, r: 0.9 },
  { x: CX - 16, y: CY + 4, r: 1.05 },
  { x: CX + 4, y: CY + 14, r: 0.85 },
  { x: CX - 18, y: CY - 14, r: 1.0 },
  { x: CX + 14, y: CY - 10, r: 0.9 },
  { x: CX + 24, y: CY + 28, r: 1.0 },
  { x: CX - 32, y: CY + 8, r: 0.95 },
  { x: CX + 6, y: CY - 32, r: 0.85 },
  { x: CX - 8, y: CY - 30, r: 1.1 },
];

const BRAIN_LINKS: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 0],
  [0, 9],
  [9, 15],
  [2, 10],
  [10, 13],
  [5, 11],
  [11, 12],
  [7, 14],
  [14, 12],
  [1, 19],
  [8, 19],
  [3, 16],
  [6, 17],
  [0, 18],
  [12, 13],
  [15, 2],
];

const BRAIN_INWARD = [
  { d: `M${CX} ${CY - 46} L${CX} ${CY - 16}`, duration: "2.4s", delay: "0s", r: 2.2 },
  { d: `M${CX + 38} ${CY - 22} L${CX + 11} ${CY - 6}`, duration: "2.8s", delay: "-0.7s", r: 1.8 },
  { d: `M${CX + 28} ${CY + 36} L${CX + 8} ${CY + 10}`, duration: "3.1s", delay: "-1.4s", r: 2.0 },
  { d: `M${CX - 24} ${CY + 40} L${CX - 7} ${CY + 12}`, duration: "2.6s", delay: "-0.4s", r: 1.7 },
  { d: `M${CX - 44} ${CY - 6} L${CX - 14} ${CY - 2}`, duration: "2.9s", delay: "-1.9s", r: 2.1 },
  { d: `M${CX + 16} ${CY + 44} L${CX + 5} ${CY + 14}`, duration: "3.3s", delay: "-2.2s", r: 1.6 },
] as const;

const PLANETS = [
  {
    id: "data",
    label: "Data",
    x: 308.9,
    y: 127.9,
    className: "studio-viz-node--data",
    moons: ["Warehouses", "Pipelines", "Quality"],
    stream: "M308.9 127.9 Q 314.5 369.5 320 567",
    valueX: 320,
    valueY: 567,
    delay: "0s",
  },
  {
    id: "products",
    label: "Products",
    x: 308.9,
    y: 444.1,
    className: "studio-viz-node--products",
    moons: ["Web apps", "Internal tools", "Experiences"],
    stream: "M308.9 444.1 Q 374.5 369.5 440 567",
    valueX: 440,
    valueY: 567,
    delay: "-3.2s",
  },
  {
    id: "decisions",
    label: "Decisions",
    x: 658.1,
    y: 94.9,
    className: "studio-viz-node--decisions",
    moons: ["Metrics", "Forecasts", "Experiments"],
    stream: "M658.1 94.9 Q 609.1 369.5 560 567",
    valueX: 560,
    valueY: 567,
    delay: "-6.4s",
  },
  {
    id: "intel",
    label: "Intelligence",
    x: 691.1,
    y: 444.1,
    className: "studio-viz-node--intel",
    moons: ["Workflows", "Assistants", "Agents"],
    stream: "M691.1 444.1 Q 685.6 369.5 680 567",
    valueX: 680,
    valueY: 567,
    delay: "-9.6s",
  },
] as const;

function OrbitTraveler({
  radius,
  duration,
  delay,
  className,
}: {
  radius: number;
  duration: string;
  delay?: string;
  className: string;
}) {
  return (
    <g
      className={`studio-viz-traveler ${className}`}
      style={{ animationDuration: duration, animationDelay: delay ?? "0s" }}
    >
      <circle className="studio-viz-flow" r="3.4" cx={radius} cy="0" />
    </g>
  );
}

function Planet({ planet }: { planet: (typeof PLANETS)[number] }) {
  const labelBelow = planet.y > CY;
  const dx = planet.x - CX;
  const dy = planet.y - CY;
  const len = Math.hypot(dx, dy) || 1;
  const spokeX = CX + (dx / len) * 178;
  const spokeY = CY + (dy / len) * 178;

  return (
    <g className={`studio-viz-cap studio-viz-cap--${planet.id}`}>
      <line
        className={`studio-viz-spoke ${planet.className}`}
        x1={spokeX}
        y1={spokeY}
        x2={planet.x}
        y2={planet.y}
      />
      <g transform={`translate(${planet.x} ${planet.y})`}>
        {planet.moons.map((moon, index) => (
          <g
            key={moon}
            className="studio-viz-moon-orbit"
            style={{ animationDelay: `${(-index * 10) / 3}s` }}
          >
            <circle className={`studio-viz-moon-dot ${planet.className}`} r="1.7" cx="26" cy="0" />
            <g className="studio-viz-moon-label" transform="translate(38 0)">
              <g className="studio-viz-moon-unspin" style={{ animationDelay: `${(-index * 10) / 3}s` }}>
                <text className="studio-viz-moon-text" x="0" y="3">
                  {moon}
                </text>
              </g>
            </g>
          </g>
        ))}
        <circle className={`studio-viz-node ${planet.className}`} r="5.4" />
        <text className="studio-viz-node-label" y={labelBelow ? 24 : -18} textAnchor="middle">
          {planet.label}
        </text>
      </g>
    </g>
  );
}

function ArchitectureFigure() {
  return (
    <svg
      className="studio-viz-figure studio-viz-figure--architecture"
      viewBox="0 0 1000 620"
      role="img"
      aria-label="Delivery path from client need through studio expertise to operating value"
    >
      <text className="studio-viz-kicker studio-viz-kicker--need" x="90" y="36" textAnchor="middle">
        Client need
      </text>
      <text className="studio-viz-kicker" x="500" y="36" textAnchor="middle">
        The studio
      </text>
      <text className="studio-viz-kicker studio-viz-kicker--value" x="910" y="36" textAnchor="middle">
        Operating value
      </text>

      <path className="studio-viz-link studio-viz-link--need" d="M120 150 C 220 150 260 310 320 310" />
      <path className="studio-viz-link studio-viz-link--need" d="M120 240 C 220 240 260 310 320 310" />
      <path className="studio-viz-link studio-viz-link--need" d="M120 380 C 220 380 260 310 320 310" />
      <path className="studio-viz-link studio-viz-link--need" d="M120 470 C 220 470 260 310 320 310" />
      <path className="studio-viz-link studio-viz-link--need" d="M320 310 H 380" />
      <path className="studio-viz-link studio-viz-link--out" d="M620 310 H 680" />
      <path className="studio-viz-link studio-viz-link--out" d="M680 310 C 740 310 780 150 880 150" />
      <path className="studio-viz-link studio-viz-link--out" d="M680 310 C 740 310 780 240 880 240" />
      <path className="studio-viz-link studio-viz-link--out" d="M680 310 C 740 310 780 380 880 380" />
      <path className="studio-viz-link studio-viz-link--out" d="M680 310 C 740 310 780 470 880 470" />

      <circle
        className="studio-viz-flow studio-viz-flow--need studio-viz-flow-dot"
        style={{ offsetPath: "path('M120 150 C 220 150 260 310 320 310')", animationDuration: "3.6s" }}
        r="4"
      />
      <circle
        className="studio-viz-flow studio-viz-flow--need studio-viz-flow-dot"
        style={{
          offsetPath: "path('M120 470 C 220 470 260 310 320 310')",
          animationDuration: "4s",
          animationDelay: "-1.4s",
        }}
        r="3.2"
      />
      <circle
        className="studio-viz-flow studio-viz-flow--out studio-viz-flow-dot"
        style={{
          offsetPath: "path('M680 310 C 740 310 780 150 880 150')",
          animationDuration: "3.8s",
          animationDelay: "-1.2s",
        }}
        r="4"
      />
      <circle
        className="studio-viz-flow studio-viz-flow--out studio-viz-flow-dot"
        style={{
          offsetPath: "path('M680 310 C 740 310 780 470 880 470')",
          animationDuration: "4.1s",
          animationDelay: "-2s",
        }}
        r="3.2"
      />

      {[
        ["Data", 120, 150],
        ["Decision", 120, 240],
        ["Workflow", 120, 380],
        ["Product gap", 120, 470],
      ].map(([label, x, y]) => (
        <g key={label} transform={`translate(${x} ${y})`}>
          <circle className="studio-viz-node studio-viz-node--need" r="6" />
          <text className="studio-viz-node-label" y="22" textAnchor="middle">
            {label}
          </text>
        </g>
      ))}

      <rect className="studio-viz-studio-box" x="380" y="128" width="240" height="364" rx="16" />
      <circle className="studio-viz-core" cx="500" cy="310" r="12" />
      <text className="studio-viz-core-label" x="500" y="336" textAnchor="middle">
        The studio
      </text>
      <text className="studio-viz-ring-label studio-viz-ring-label--understand" x="500" y="176" textAnchor="middle">
        Understand
      </text>
      <text className="studio-viz-ring-label studio-viz-ring-label--shape" x="500" y="232" textAnchor="middle">
        Shape
      </text>
      <text className="studio-viz-ring-label studio-viz-ring-label--build" x="500" y="392" textAnchor="middle">
        Build
      </text>
      <text className="studio-viz-ring-label studio-viz-ring-label--evolve" x="500" y="448" textAnchor="middle">
        Evolve
      </text>
      <text className="studio-viz-zone" x="320" y="560" textAnchor="middle">
        Unified data layer
      </text>
      <text className="studio-viz-zone studio-viz-kicker--out" x="680" y="560" textAnchor="middle">
        Decisions & actions
      </text>

      {[
        ["Trusted data", 880, 150],
        ["Shared number", 880, 240],
        ["Governed workflow", 880, 380],
        ["Working product", 880, 470],
      ].map(([label, x, y]) => (
        <g key={label} transform={`translate(${x} ${y})`}>
          <circle className="studio-viz-node studio-viz-node--out" r="6" />
          <text className="studio-viz-node-label" y="22" textAnchor="middle">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function StudioVizFigure({ variant }: StudioVizFigureProps) {
  if (variant === "architecture") {
    return <ArchitectureFigure />;
  }

  return (
    <svg
      className="studio-viz-figure studio-viz-figure--orbit"
      viewBox="0 0 1000 620"
      role="img"
      aria-label="Orbital studio: four practices around a studio core, with moons and streams into operating value"
    >
      <defs>
        <radialGradient id="studio-orbit-well" cx="50%" cy="46%" r="42%">
          <stop offset="0%" stopColor="rgba(26,154,250,0.12)" />
          <stop offset="55%" stopColor="rgba(26,154,250,0.035)" />
          <stop offset="100%" stopColor="rgba(26,154,250,0)" />
        </radialGradient>
        <clipPath id="studio-orbit-brain-clip">
          <circle cx={CX} cy={CY} r="50" />
        </clipPath>
      </defs>

      {STARS.map((star) => (
        <circle
          key={`${star.x}-${star.y}`}
          className="studio-viz-star"
          cx={star.x}
          cy={star.y}
          r={star.r}
          style={{ animationDelay: star.delay }}
        />
      ))}

      {NODE_LINKS.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          className="studio-viz-constellation"
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
        />
      ))}
      {NODES.map((node) => (
        <circle key={`${node.x}-${node.y}`} className="studio-viz-distant" cx={node.x} cy={node.y} r={node.r} />
      ))}

      <circle className="studio-viz-well" cx={CX} cy={CY} r="220" fill="url(#studio-orbit-well)" />

      <g className="studio-viz-brain" clipPath="url(#studio-orbit-brain-clip)">
        {BRAIN_LINKS.map(([a, b]) => (
          <line
            key={`brain-${a}-${b}`}
            className="studio-viz-brain-link"
            x1={BRAIN_NODES[a].x}
            y1={BRAIN_NODES[a].y}
            x2={BRAIN_NODES[b].x}
            y2={BRAIN_NODES[b].y}
          />
        ))}
        {BRAIN_NODES.map((node) => (
          <circle
            key={`brain-${node.x}-${node.y}`}
            className="studio-viz-brain-node"
            cx={node.x}
            cy={node.y}
            r={node.r}
          />
        ))}
        {BRAIN_INWARD.map((path) => (
          <circle
            key={path.d}
            className="studio-viz-brain-dot"
            r={path.r}
            style={{
              offsetPath: `path('${path.d}')`,
              animationDuration: path.duration,
              animationDelay: path.delay,
            }}
          />
        ))}
      </g>

      {PLANETS.map((planet) => (
        <g key={`${planet.id}-stream`}>
          <path className={`studio-viz-stream ${planet.className}`} d={planet.stream} />
          <circle
            className={`studio-viz-flow-dot ${planet.className}`}
            r="3.1"
            style={{
              offsetPath: `path('${planet.stream}')`,
              animationDelay: planet.delay,
            }}
          />
          <circle
            className={`studio-viz-value-anchor ${planet.className}`}
            cx={planet.valueX}
            cy={planet.valueY}
            r="3.4"
          />
        </g>
      ))}

      <g className="studio-viz-orbit-spin" transform={`translate(${CX} ${CY})`}>
        <circle className="studio-viz-orbit-guide" r="248" />
        {RINGS.map((ring) => (
          <g key={ring.label} className={`studio-viz-ring ${ring.className}`}>
            <circle className="studio-viz-ring-band" r={ring.radius} />
            <circle className="studio-viz-ring-dots" r={ring.radius} />
            <text
              className={`studio-viz-ring-label ${ring.className.replace("studio-viz-ring", "studio-viz-ring-label")}`}
              y={-ring.radius - 12}
              textAnchor="middle"
            >
              {ring.label}
            </text>
          </g>
        ))}
        <OrbitTraveler radius={176} duration="6s" className="studio-viz-flow--understand" />
        <OrbitTraveler radius={130} duration="5s" delay="-1.2s" className="studio-viz-flow--shape" />
        <OrbitTraveler radius={88} duration="4s" delay="-2s" className="studio-viz-flow--build" />
        <OrbitTraveler radius={52} duration="3.2s" delay="-0.6s" className="studio-viz-flow--evolve" />
        <circle className="studio-viz-core-glow" r="38" />
        <circle className="studio-viz-core" r="12" />
        <text className="studio-viz-core-label" y="32" textAnchor="middle">
          The studio
        </text>
      </g>

      {PLANETS.map((planet) => (
        <Planet key={planet.id} planet={planet} />
      ))}

      <path className="studio-viz-value-arc" d="M260 561 Q 500 581 740 561" />
      <text className="studio-viz-value-label" x="500" y="608" textAnchor="middle">
        Operating value
      </text>
    </svg>
  );
}
