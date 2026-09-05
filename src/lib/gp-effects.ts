// @ts-nocheck
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NETWORK_PALETTE_EVENT, NETWORK_PALETTES, isPhotoNetworkPalette, readNetworkPalette } from "@/lib/network-palette";

export function initNetworkCanvas() {
  if (typeof window === "undefined") return () => {};
  const C=document.getElementById('networkCanvas');if(!C)return () => {};
  const X=C.getContext('2d');if(!X)return () => {};
  let stopped = false;
  const reduced =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    document.documentElement.classList.contains("dbp-a11y-motion");
  let W,H,T=0,mouse={x:-1e4,y:-1e4,active:false};
  const DPR=Math.min(devicePixelRatio||1,2);
  let paletteId=readNetworkPalette();
  let pal=NETWORK_PALETTES[paletteId];
  let isPhoto=isPhotoNetworkPalette(paletteId);
  let isGalaxy=paletteId==='galaxy';
  let isStation=paletteId==='station';
  let isSolar=paletteId==='solar';
  function hexFor(key){return key===0?pal.a:key===1?pal.b:pal.c}
  function applyPalette(){
    paletteId=readNetworkPalette();
    pal=NETWORK_PALETTES[paletteId];
    isPhoto=isPhotoNetworkPalette(paletteId);
    isGalaxy=paletteId==='galaxy';
    isStation=paletteId==='station';
    isSolar=paletteId==='solar';
    for(const n of nodes) n.color=hexFor(n.colorKey);
    initNodes();
    updateConnections();
  }

  function resize(){
    W=window.innerWidth;H=window.innerHeight;
    C.width=W*DPR;C.height=H*DPR;
    C.style.width=W+'px';C.style.height=H+'px';
    X.setTransform(DPR,0,0,DPR,0,0);
    initNodes();
  }

// --- NODES ---
const nodes=[];
const LAYERS=3; // depth layers
const NODE_COUNT=280;
const connections=[];
const cascades=[];
const streams=[];

function initNodes(){
  nodes.length=0;connections.length=0;
  const count=isPhoto?Math.min(NODE_COUNT+(isStation?40:80),isStation?320:380):NODE_COUNT;
  for(let i=0;i<count;i++){
    const layer=Math.floor(Math.random()*LAYERS);
    const depth=0.3+layer*0.35; // 0.3, 0.65, 1.0
    // Galaxy keeps occasional sparkle stars; Station/Solar stay matte HD points
    const bright=isGalaxy&&Math.random()>0.88;
    const planet=isSolar&&Math.random()>0.94;
    const drift=isStation?0.03:isPhoto?0.06:0.15;
    nodes.push({
      x:Math.random()*W,
      y:Math.random()*H,
      baseX:0,baseY:0,
      vx:(Math.random()-0.5)*drift,
      vy:(Math.random()-0.5)*drift,
      r:planet?depth*4.5+Math.random()*3:bright?depth*2.8+Math.random()*2:depth*(isStation?1.5:2)+Math.random()*(isStation?1:1.5),
      depth:depth,
      layer:layer,
      phase:Math.random()*Math.PI*2,
      colorKey:Math.random()>0.8?0:Math.random()>0.6?1:2,
      color:'#1a9afa',
      alpha:isStation?(0.35+depth*0.25):isPhoto?(0.55+depth*0.3):(0.55+depth*0.45),
      breathPhase:Math.random()*Math.PI*2,
      bright:bright,
      planet:planet,
    });
    nodes[i].baseX=nodes[i].x;
    nodes[i].baseY=nodes[i].y;
    nodes[i].color=hexFor(nodes[i].colorKey);
  }
}

// --- CONNECTION CACHE (recalculated periodically) ---
let connFrame=0;
function updateConnections(){
  connections.length=0;
  const maxLinks=isStation?1:isPhoto?2:6;
  for(let i=0;i<nodes.length;i++){
    const a=nodes[i];
    let linked=0;
    for(let j=i+1;j<nodes.length;j++){
      if(linked>=maxLinks)break;
      const b=nodes[j];
      if(Math.abs(a.layer-b.layer)>1)continue;
      const dx=a.x-b.x,dy=a.y-b.y;
      const maxD=(isStation?55:isPhoto?70:110)+a.depth*55;
      if(dx*dx+dy*dy<maxD*maxD){
        connections.push({a:i,b:j,maxD:maxD});
        linked++;
      }
    }
  }
}

// --- DECISION CASCADE ---
function triggerCascade(){
  const seed=Math.floor(Math.random()*nodes.length);
  const n=nodes[seed];
  cascades.push({
    cx:n.x,cy:n.y,
    radius:0,maxRadius:250+Math.random()*200,
    speed:2.5+Math.random()*2.5,
    alpha:1,
    color:Math.random()>0.5?pal.rgbB:pal.rgbA
  });
}

// --- DATA STREAMS ---
function spawnStream(){
  if(streams.length>30)return;
  const i=Math.floor(Math.random()*connections.length);
  if(i>=connections.length)return;
  const c=connections[i];
  const a=nodes[c.a],b=nodes[c.b];
  streams.push({
    ax:a.x,ay:a.y,bx:b.x,by:b.y,
    p:0,speed:0.015+Math.random()*0.015,
    color:Math.random()>0.5?pal.rgbA:pal.rgbB,
    size:1+Math.random()*1.5
  });
}

// --- UPDATE ---
function update(){
  const breathCycle=Math.sin(T*0.008)*0.5+0.5; // 0-1 breathing
  for(const n of nodes){
    // Gentle drift
    n.x+=n.vx;n.y+=n.vy;
    // Breathing: expand/contract from center
    const bcx=W*0.5,bcy=H*0.48;
    const bdx=n.baseX-bcx,bdy=n.baseY-bcy;
    const breathOffset=Math.sin(T*0.008+n.breathPhase)*8*n.depth;
    n.x=n.baseX+bdx*0.01*breathOffset;
    n.y=n.baseY+bdy*0.01*breathOffset;

    // Wrap edges with margin
    if(n.x<-40){n.x=W+40;n.baseX=n.x}
    if(n.x>W+40){n.x=-40;n.baseX=n.x}
    if(n.y<-40){n.y=H+40;n.baseY=n.y}
    if(n.y>H+40){n.y=-40;n.baseY=n.y}
    n.baseX+=(n.x-n.baseX)*0.001;
    n.baseY+=(n.y-n.baseY)*0.001;

    // Mouse gravitational distortion
    if(mouse.active){
      const dx=n.x-mouse.x,dy=n.y-mouse.y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      const radius=200;
      if(dist<radius){
        const force=(radius-dist)/radius;
        const angle=Math.atan2(dy,dx);
        // Push away with falloff
        n.x+=Math.cos(angle)*force*3*n.depth;
        n.y+=Math.sin(angle)*force*3*n.depth;
      }
    }
  }

  // Update cascades
  for(let i=cascades.length-1;i>=0;i--){
    const c=cascades[i];
    c.radius+=c.speed;
    c.alpha=1-(c.radius/c.maxRadius);
    if(c.radius>=c.maxRadius)cascades.splice(i,1);
  }

  // Update streams
  for(let i=streams.length-1;i>=0;i--){
    const s=streams[i];
    s.p+=s.speed;
    if(s.p>=1)streams.splice(i,1);
  }
}

// --- DRAW ---
function draw(){
  X.clearRect(0,0,W,H);

  // Subtle grid (skip on photo stills — image is the field)
  if(!isPhoto){
    X.globalAlpha=0.045;X.strokeStyle=pal.b;X.lineWidth=0.5;
    const gs=80;
    for(let x=0;x<W;x+=gs){X.beginPath();X.moveTo(x,0);X.lineTo(x,H);X.stroke()}
    for(let y=0;y<H;y+=gs){X.beginPath();X.moveTo(0,y);X.lineTo(W,y);X.stroke()}
    X.globalAlpha=1;
  }

  // Connections
  for(const c of connections){
    const a=nodes[c.a],b=nodes[c.b];
    const dx=a.x-b.x,dy=a.y-b.y;
    const dist=Math.sqrt(dx*dx+dy*dy);
    if(dist>c.maxD)continue;
    const fade=(1-dist/c.maxD);
    const avgDepth=(a.depth+b.depth)/2;

    // Check if cascade is affecting this connection
    let cascadeBoost=0;
    for(const cas of cascades){
      const midX=(a.x+b.x)/2,midY=(a.y+b.y)/2;
      const cdx=midX-cas.cx,cdy=midY-cas.cy;
      const cd=Math.sqrt(cdx*cdx+cdy*cdy);
      if(cd<cas.radius+30&&cd>cas.radius-30){
        cascadeBoost=Math.max(cascadeBoost,cas.alpha*0.9);
      }
    }

    X.beginPath();X.moveTo(a.x,a.y);X.lineTo(b.x,b.y);
    const lineAlpha=isStation
      ? fade*avgDepth*0.05+cascadeBoost*0.2
      : isPhoto
      ? fade*avgDepth*0.12+cascadeBoost*0.4
      : fade*avgDepth*0.32+cascadeBoost;
    X.strokeStyle=cascadeBoost>0?`rgba(${cascades.length>0?cascades[0].color:pal.rgbB},${lineAlpha})`:`rgba(${pal.rgbB},${lineAlpha})`;
    X.lineWidth=0.8+cascadeBoost*3;
    X.stroke();
  }

  // Data streams
  for(const s of streams){
    const x=s.ax+(s.bx-s.ax)*s.p;
    const y=s.ay+(s.by-s.ay)*s.p;
    const a=Math.sin(s.p*Math.PI);
    // Glow
    const g=X.createRadialGradient(x,y,0,x,y,s.size*6);
    g.addColorStop(0,`rgba(${s.color},${a*0.7})`);
    g.addColorStop(1,'transparent');
    X.fillStyle=g;X.beginPath();X.arc(x,y,s.size*6,0,Math.PI*2);X.fill();
    // Core
    X.beginPath();X.arc(x,y,s.size,0,Math.PI*2);
    X.fillStyle=`rgba(${s.color},${a*0.95})`;X.fill();
  }

  // Cascade rings — propagating reasoning pathways
  for(const c of cascades){
    // Outer ring
    X.beginPath();X.arc(c.cx,c.cy,c.radius,0,Math.PI*2);
    X.strokeStyle=`rgba(${c.color},${c.alpha*0.45})`;
    X.lineWidth=2.5;X.stroke();
    // Inner shimmer ring
    X.beginPath();X.arc(c.cx,c.cy,c.radius*0.92,0,Math.PI*2);
    X.strokeStyle=`rgba(${c.color},${c.alpha*0.08})`;
    X.lineWidth=6;X.stroke();
    // Wave-front glow
    const g=X.createRadialGradient(c.cx,c.cy,c.radius*0.8,c.cx,c.cy,c.radius*1.1);
    g.addColorStop(0,'transparent');
    g.addColorStop(0.5,`rgba(${c.color},${c.alpha*0.06})`);
    g.addColorStop(1,'transparent');
    X.fillStyle=g;X.beginPath();X.arc(c.cx,c.cy,c.radius*1.1,0,Math.PI*2);X.fill();
    // Origin flash (fades fast)
    if(c.radius<40){
      const og=X.createRadialGradient(c.cx,c.cy,0,c.cx,c.cy,30);
      og.addColorStop(0,`rgba(${c.color},${c.alpha*0.3})`);og.addColorStop(1,'transparent');
      X.fillStyle=og;X.beginPath();X.arc(c.cx,c.cy,30,0,Math.PI*2);X.fill();
    }
  }

  // Nodes
  for(const n of nodes){
    // Soft HD glow only — Station never flashes; Galaxy keeps sparkle; Solar soft planet discs
    if(n.planet){
      const g=X.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r*4);
      g.addColorStop(0,n.color+'55');g.addColorStop(0.55,n.color+'18');g.addColorStop(1,'transparent');
      X.fillStyle=g;X.beginPath();X.arc(n.x,n.y,n.r*4,0,Math.PI*2);X.fill();
    }else if((n.r>1.6||n.bright)&&!isStation){
      const glowR=n.r*(isGalaxy?12:7);
      const g=X.createRadialGradient(n.x,n.y,0,n.x,n.y,glowR);
      g.addColorStop(0,n.color+(isGalaxy?'70':'40'));g.addColorStop(1,'transparent');
      X.fillStyle=g;X.beginPath();X.arc(n.x,n.y,n.r*(isGalaxy?8:5),0,Math.PI*2);X.fill();
    }

    // Check cascade proximity for brightness boost
    let boost=0;
    for(const cas of cascades){
      const dx=n.x-cas.cx,dy=n.y-cas.cy;
      const d=Math.sqrt(dx*dx+dy*dy);
      if(d<cas.radius+20&&d>cas.radius-20){
        boost=Math.max(boost,cas.alpha);
      }
    }

    // Node core — Station stays matte (no white flash pulses)
    const pulse=isStation?0.92:Math.sin(T*0.02+n.phase)*0.15+0.85;
    X.beginPath();X.arc(n.x,n.y,n.r*pulse,0,Math.PI*2);
    X.fillStyle=(n.bright&&!isStation)?'#ffffff':n.color;
    X.globalAlpha=n.alpha*pulse+(isStation?0:boost);
    X.fill();
    X.globalAlpha=1;
  }

  // Central decision node (subtle) — skip on photo stills
  if(!isPhoto){
  const cx=W*0.5,cy=H*0.46;
  const cpulse=Math.sin(T*0.025)*0.3+0.7;
  // Outer rings
  for(let r=3;r>0;r--){
    X.beginPath();X.arc(cx,cy,6+r*25,0,Math.PI*2);
    X.strokeStyle=`rgba(${pal.rgbB},${0.04*cpulse*(4-r)})`;
    X.lineWidth=0.8;X.stroke();
  }
  // Core
  X.beginPath();X.arc(cx,cy,5,0,Math.PI*2);
  const cg=X.createRadialGradient(cx,cy,0,cx,cy,5);
  cg.addColorStop(0,pal.c);cg.addColorStop(1,pal.b);
  X.fillStyle=cg;X.globalAlpha=cpulse*0.9;X.fill();
  // Core glow
  const cgg=X.createRadialGradient(cx,cy,0,cx,cy,50);
  cgg.addColorStop(0,`rgba(${pal.rgbB},${0.22*cpulse})`);cgg.addColorStop(1,'transparent');
  X.fillStyle=cgg;X.beginPath();X.arc(cx,cy,50,0,Math.PI*2);X.fill();
  X.globalAlpha=1;
  }

  // Mouse glow when active
  if(mouse.active){
    const mg=X.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,200);
    mg.addColorStop(0,`rgba(${pal.rgbB},0.08)`);mg.addColorStop(1,'transparent');
    X.fillStyle=mg;X.beginPath();X.arc(mouse.x,mouse.y,200,0,Math.PI*2);X.fill();
  }
}

function loop(){
  T++;
  // Recalc connections every 30 frames
  if(T%30===0)updateConnections();
  // Spawn streams
  if(Math.random()<(isStation?0.04:isPhoto?0.12:0.35))spawnStream();
  // Decision cascade every ~1.5 seconds
  if(!isPhoto&&Math.random()<0.012)triggerCascade();
  update();draw();
  if(!stopped) requestAnimationFrame(loop);
}

function onMove(e){
  mouse.x=e.clientX;mouse.y=e.clientY;mouse.active=true;
}
function onLeave(){mouse.active=false}

window.addEventListener('resize',resize);
window.addEventListener('mousemove',onMove);
window.addEventListener('mouseleave',onLeave);
window.addEventListener(NETWORK_PALETTE_EVENT,onPalette);
function onPalette(){applyPalette();if(reduced)draw();}

resize();updateConnections();
if(reduced){
  draw();
}else{
  loop();
}

return () => {
  stopped = true;
  window.removeEventListener('resize',resize);
  window.removeEventListener('mousemove',onMove);
  window.removeEventListener('mouseleave',onLeave);
  window.removeEventListener(NETWORK_PALETTE_EVENT,onPalette);
};
}

export function initGpEffects() {
  if (typeof window === "undefined") return () => {};
  let stopped = false;
  const reduced =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    document.documentElement.classList.contains("dbp-a11y-motion");
  const cleanups = [];
  cleanups.push(() => {
    stopped = true;
  });
  if (reduced) {
    document.querySelectorAll(".reveal, .hero-tag, .hero h1, .hero-sub").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }

/* Studio architecture / orbit canvases now live in StudioVizFlip. */



/* ═══ GSAP ═══ */
if (!reduced) {
gsap.registerPlugin(ScrollTrigger);
if(document.getElementById('hero')){
  gsap.set('.hero-tag, .hero h1, .hero-sub',{opacity:1,y:0});
}
document.querySelectorAll('.reveal').forEach((el,i)=>{gsap.to(el,{scrollTrigger:{trigger:el,start:'top 85%'},opacity:1,y:0,duration:0.7,delay:(i%4)*0.08,ease:'power3.out'})});
document.querySelectorAll('.counter-val').forEach(el=>{const t=parseFloat(el.dataset.target),pre=el.dataset.prefix||'',suf=el.dataset.suffix||'';ScrollTrigger.create({trigger:el,start:'top 85%',onEnter:()=>{let o={v:0};gsap.to(o,{v:t,duration:2,ease:'power2.out',onUpdate:()=>{const v=t>=100?Math.round(o.v):Math.round(o.v*10)/10;el.textContent=pre+v+suf}})},once:true})});
}
function onScroll(){document.getElementById('nav')?.classList.toggle('scrolled',scrollY>50)}
window.addEventListener('scroll',onScroll);
cleanups.push(()=>window.removeEventListener('scroll',onScroll));
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const href=a.getAttribute('href');if(!href||href.length<2)return;const t=document.querySelector(href);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}})});

/* ═══ TESTIMONIAL CAROUSEL ═══ */
(function(){
  const slides=document.querySelectorAll('.testimonial-slide');
  const dots=document.querySelectorAll('.testimonial-dot');
  if(!slides.length)return;
  let cur=0;
  function go(n){slides[cur].classList.remove('active');dots[cur].classList.remove('active');cur=n;slides[cur].classList.add('active');dots[cur].classList.add('active')}
  dots.forEach(d=>d.addEventListener('click',()=>go(parseInt(d.dataset.dot))));
  const iv=window.setInterval(()=>{if(!stopped)go((cur+1)%slides.length)},5000);
  cleanups.push(()=>window.clearInterval(iv));
})();


  return () => {
    stopped = true;
    try { ScrollTrigger.getAll().forEach((st) => st.kill()); } catch {}
    cleanups.forEach((fn) => { try { fn(); } catch {} });
  };
}
