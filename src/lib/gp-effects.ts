// @ts-nocheck
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    document.querySelectorAll(".reveal, .hero-tag, .hero h1, .hero-sub, .hero-ctas, .hero-metrics").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }


/* ═══════════════════════════════════════════════════
   HERO CANVAS — THE REASONING WEB
   Cinematic multi-layer network with:
   - 250+ nodes at varying depths
   - Luminous connection filaments
   - Breathing/pulsing network
   - Mouse gravitational distortion
   - Decision cascade events
   - Flowing data streams
   ═══════════════════════════════════════════════════ */
(function(){
const C=document.getElementById('heroCanvas');if(!C)return;const X=C.getContext('2d');if(!X)return;
let W,H,T=0,mouse={x:-1e4,y:-1e4,active:false};
const DPR=Math.min(devicePixelRatio||1,2);

function resize(){
  W=C.parentElement.clientWidth;H=C.parentElement.clientHeight;
  C.width=W*DPR;C.height=H*DPR;
  C.style.width=W+'px';C.style.height=H+'px';
  X.setTransform(DPR,0,0,DPR,0,0);
  initNodes();
}

// --- NODES ---
const nodes=[];
const LAYERS=3; // depth layers
const NODE_COUNT=220;
const connections=[];
const cascades=[];
const streams=[];

function initNodes(){
  nodes.length=0;connections.length=0;
  for(let i=0;i<NODE_COUNT;i++){
    const layer=Math.floor(Math.random()*LAYERS);
    const depth=0.3+layer*0.35; // 0.3, 0.65, 1.0
    nodes.push({
      x:Math.random()*W,
      y:Math.random()*H,
      baseX:0,baseY:0,
      vx:(Math.random()-0.5)*0.15,
      vy:(Math.random()-0.5)*0.15,
      r:depth*2+Math.random()*1.5,
      depth:depth,
      layer:layer,
      phase:Math.random()*Math.PI*2,
      color:Math.random()>0.8?'#67e8f9':Math.random()>0.6?'#a78afa':'#c4b5fd',
      alpha:depth*0.6,
      breathPhase:Math.random()*Math.PI*2,
    });
    nodes[i].baseX=nodes[i].x;
    nodes[i].baseY=nodes[i].y;
  }
}

// --- CONNECTION CACHE (recalculated periodically) ---
let connFrame=0;
function updateConnections(){
  connections.length=0;
  for(let i=0;i<nodes.length;i++){
    const a=nodes[i];
    for(let j=i+1;j<nodes.length;j++){
      const b=nodes[j];
      if(Math.abs(a.layer-b.layer)>1)continue;
      const dx=a.x-b.x,dy=a.y-b.y;
      const maxD=80+a.depth*40;
      if(dx*dx+dy*dy<maxD*maxD){
        connections.push({a:i,b:j,maxD:maxD});
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
    color:Math.random()>0.5?'167,138,250':'103,232,249'
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
    color:Math.random()>0.5?'103,232,249':'167,138,250',
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

  // Subtle grid
  X.globalAlpha=0.012;X.strokeStyle='#a78afa';X.lineWidth=0.5;
  const gs=80;
  for(let x=0;x<W;x+=gs){X.beginPath();X.moveTo(x,0);X.lineTo(x,H);X.stroke()}
  for(let y=0;y<H;y+=gs){X.beginPath();X.moveTo(0,y);X.lineTo(W,y);X.stroke()}
  X.globalAlpha=1;

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
    const lineAlpha=fade*avgDepth*0.12+cascadeBoost;
    X.strokeStyle=cascadeBoost>0?`rgba(${cascades.length>0?cascades[0].color:'167,138,250'},${lineAlpha})`:`rgba(167,138,250,${lineAlpha})`;
    X.lineWidth=0.5+cascadeBoost*3;
    X.stroke();
  }

  // Data streams
  for(const s of streams){
    const x=s.ax+(s.bx-s.ax)*s.p;
    const y=s.ay+(s.by-s.ay)*s.p;
    const a=Math.sin(s.p*Math.PI);
    // Glow
    const g=X.createRadialGradient(x,y,0,x,y,s.size*6);
    g.addColorStop(0,`rgba(${s.color},${a*0.4})`);
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
    X.strokeStyle=`rgba(${c.color},${c.alpha*0.25})`;
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
    // Node glow for larger nodes
    if(n.r>2.5){
      const g=X.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r*5);
      g.addColorStop(0,n.color+'15');g.addColorStop(1,'transparent');
      X.fillStyle=g;X.beginPath();X.arc(n.x,n.y,n.r*5,0,Math.PI*2);X.fill();
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

    // Node core
    const pulse=Math.sin(T*0.02+n.phase)*0.15+0.85;
    X.beginPath();X.arc(n.x,n.y,n.r*pulse,0,Math.PI*2);
    X.fillStyle=n.color;
    X.globalAlpha=n.alpha*pulse+boost;
    X.fill();
    X.globalAlpha=1;
  }

  // Central decision node (subtle)
  const cx=W*0.5,cy=H*0.46;
  const cpulse=Math.sin(T*0.025)*0.3+0.7;
  // Outer rings
  for(let r=3;r>0;r--){
    X.beginPath();X.arc(cx,cy,6+r*25,0,Math.PI*2);
    X.strokeStyle=`rgba(167,138,250,${0.015*cpulse*(4-r)})`;
    X.lineWidth=0.8;X.stroke();
  }
  // Core
  X.beginPath();X.arc(cx,cy,5,0,Math.PI*2);
  const cg=X.createRadialGradient(cx,cy,0,cx,cy,5);
  cg.addColorStop(0,'#c4b5fd');cg.addColorStop(1,'#a78afa');
  X.fillStyle=cg;X.globalAlpha=cpulse*0.9;X.fill();
  // Core glow
  const cgg=X.createRadialGradient(cx,cy,0,cx,cy,50);
  cgg.addColorStop(0,`rgba(167,138,250,${0.12*cpulse})`);cgg.addColorStop(1,'transparent');
  X.fillStyle=cgg;X.beginPath();X.arc(cx,cy,50,0,Math.PI*2);X.fill();
  X.globalAlpha=1;

  // Mouse glow when active
  if(mouse.active){
    const mg=X.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,200);
    mg.addColorStop(0,'rgba(167,138,250,0.03)');mg.addColorStop(1,'transparent');
    X.fillStyle=mg;X.beginPath();X.arc(mouse.x,mouse.y,200,0,Math.PI*2);X.fill();
  }
}

function loop(){
  T++;
  // Recalc connections every 30 frames
  if(T%30===0)updateConnections();
  // Spawn streams
  if(Math.random()<0.2)spawnStream();
  // Decision cascade every ~2 seconds
  if(Math.random()<0.008)triggerCascade();
  update();draw();
  if(!stopped) requestAnimationFrame(loop);
}

window.addEventListener('resize',resize);
C.parentElement.addEventListener('mousemove',e=>{
  const r=C.getBoundingClientRect();
  mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;mouse.active=true;
});
C.parentElement.addEventListener('mouseleave',()=>{mouse.active=false});

resize();updateConnections();loop();
})();

/* ═══════════════════════════════════════════════════
   REASONING ENGINE CANVAS — Cinematic Architecture v2
   All sources converge → Unified Data → Ring-inward flow → Decision
   ═══════════════════════════════════════════════════ */
(function(){
const C=document.getElementById('reasoningCanvas');if(!C)return;
const X=C.getContext('2d');let W,H,T=0;
const DPR=Math.min(devicePixelRatio||1,2);
const ringDots=[];
let journey=null;
let journeyCooldown=30;

function resize(){
  const p=C.parentElement;W=p.clientWidth-40;
  if(W<500){H=Math.max(260,W*0.75)}else{H=Math.max(400,Math.min(W*0.52,500))}
  C.width=W*DPR;C.height=H*DPR;
  C.style.width=W+'px';C.style.height=H+'px';
  X.setTransform(DPR,0,0,DPR,0,0);
}

function getLayout(){
  const cx=W/2,cy=H/2;
  const mobile=W<500;
  const col1=mobile?W*0.12:W*0.06, col2=mobile?W*0.28:W*0.23;
  const engL=mobile?W*0.28:W*0.34, engR=mobile?W*0.72:W*0.66;
  const col4=mobile?W*0.72:W*0.77, col5=mobile?W*0.88:W*0.94;
  const boxW=engR-engL, boxH=mobile?H*0.58:H*0.68, boxT=cy-boxH/2;
  const sp=mobile?55:95, sp2=mobile?18:32;
  const src=[
    {x:col1,y:cy-sp,l:mobile?'Systems':'Systems of Record',sub:mobile?'':'ERP · CRM · HRM',c:'#fbbf24'},
    {x:col1,y:cy-sp2,l:mobile?'Market':'Market Data',sub:mobile?'':'Pricing · Trends · Signals',c:'#fbbf24'},
    {x:col1,y:cy+sp2,l:mobile?'Industry':'Industry Feeds',sub:mobile?'':'Regulatory · Competitive',c:'#fbbf24'},
    {x:col1,y:cy+sp,l:mobile?'Proprietary':'Proprietary Data',sub:mobile?'':'Models · IP · History',c:'#fbbf24'}
  ];
  const eng={box:{x:engL,y:boxT,w:boxW,h:boxH,r:mobile?10:14},core:{x:cx,y:cy,c:'#a78afa',r:mobile?7:10}};
  const out=[
    {x:col5,y:cy-sp,l:mobile?'Market Entry':'Market Entry',c:'#a78afa'},
    {x:col5,y:cy-sp2,l:mobile?'Acquisition':'Acquisition',c:'#a78afa'},
    {x:col5,y:cy+sp2,l:mobile?'Pricing':'Price Adjustment',c:'#a78afa'},
    {x:col5,y:cy+sp,l:mobile?'Claims':'Claim Resolution',c:'#a78afa'}
  ];
  return{src,eng,out,cx,cy,col1,col2,engL,engR,col4,col5,boxW,boxH}
}

function startJourney(L){
  const oi=Math.floor(Math.random()*L.out.length);
  journey={
    out:L.out[oi],phase:'toData',p:0,speed:0.02,
    srcParticles:L.src.map(s=>({src:s})),
    dataX:L.col2,engL:L.engL,engR:L.engR,decX:L.col4,
    coreCx:L.cx,coreCy:L.cy,core:L.eng.core,
    arcBright:[0,0,0],ringFlowStage:0,ringFlowTimer:0,
    bloomLife:0,bloomRing:0,sparkleList:[]
  };
}

function roundRect(x,y,w,h,r){
  X.beginPath();X.moveTo(x+r,y);X.lineTo(x+w-r,y);X.quadraticCurveTo(x+w,y,x+w,y+r);
  X.lineTo(x+w,y+h-r);X.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  X.lineTo(x+r,y+h);X.quadraticCurveTo(x,y+h,x,y+h-r);
  X.lineTo(x,y+r);X.quadraticCurveTo(x,y,x+r,y);X.closePath();
}

function drawP(x,y,size,color,glowR,alpha){
  if(alpha<0.01)return;
  const g=X.createRadialGradient(x,y,0,x,y,glowR);
  const h=Math.round(Math.min(alpha,1)*50).toString(16).padStart(2,'0');
  g.addColorStop(0,color+h);g.addColorStop(1,'transparent');
  X.fillStyle=g;X.beginPath();X.arc(x,y,glowR,0,Math.PI*2);X.fill();
  X.beginPath();X.arc(x,y,size,0,Math.PI*2);
  X.fillStyle=color;X.globalAlpha=Math.min(alpha,1);X.fill();X.globalAlpha=1;
}

function ease(t){return t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2}

function spawnRingDots(cx,cy,ringR,count,color,speed){
  for(let i=0;i<count;i++){
    const angle=Math.random()*Math.PI*2;
    ringDots.push({cx,cy,angle,startR:ringR,r:ringR,speed:speed+Math.random()*0.4,color,size:1+Math.random()*0.5});
  }
}

function animate(){
  T++;X.clearRect(0,0,W,H);const L=getLayout();
  const{eng,src,out,cx,cy}=L;
  const box=eng.box;const core=eng.core;
  const pulse=Math.sin(T*0.025)*0.2+0.8;
  const ecy=cy+4;
  
  // Grid
  X.globalAlpha=0.012;X.strokeStyle='#a78afa';X.lineWidth=0.5;
  for(let gx=0;gx<W;gx+=40){X.beginPath();X.moveTo(gx,0);X.lineTo(gx,H);X.stroke()}
  for(let gy=0;gy<H;gy+=40){X.beginPath();X.moveTo(0,gy);X.lineTo(W,gy);X.stroke()}
  X.globalAlpha=1;

  // Stage zones
  const zoneH=H*0.62,zoneTop=cy-zoneH/2,zoneW=W*0.09;
  roundRect(L.col2-zoneW/2,zoneTop,zoneW,zoneH,8);
  X.fillStyle='rgba(251,191,36,0.012)';X.fill();
  roundRect(L.col2-zoneW/2,zoneTop,zoneW,zoneH,8);
  X.strokeStyle='rgba(251,191,36,0.05)';X.lineWidth=0.5;X.stroke();
  roundRect(L.col4-zoneW/2,zoneTop,zoneW,zoneH,8);
  X.fillStyle='rgba(167,138,250,0.012)';X.fill();
  roundRect(L.col4-zoneW/2,zoneTop,zoneW,zoneH,8);
  X.strokeStyle='rgba(167,138,250,0.05)';X.lineWidth=0.5;X.stroke();
  
  X.font="600 "+(W<500?"5.5":"7")+"px 'DM Mono',monospace";X.textAlign='center';
  X.fillStyle='#ffffff';X.globalAlpha=0.4;
  X.fillText('UNIFIED',L.col2,zoneTop+zoneH+14);
  X.fillText('DATA LAYER',L.col2,zoneTop+zoneH+24);
  X.fillText('DECISIONS',L.col4,zoneTop+zoneH+14);
  X.fillText('& ACTIONS',L.col4,zoneTop+zoneH+24);
  X.globalAlpha=1;

  // Static paths
  src.forEach(s=>{
    X.beginPath();X.moveTo(s.x+12,s.y);
    X.quadraticCurveTo((s.x+L.col2)/2,s.y,L.col2,cy);
    X.strokeStyle='rgba(251,191,36,0.03)';X.lineWidth=0.8;X.stroke();
  });
  X.beginPath();X.moveTo(L.col2+6,cy);X.lineTo(L.engL,cy);
  X.strokeStyle='rgba(251,191,36,0.025)';X.lineWidth=0.8;X.stroke();
  X.beginPath();X.moveTo(L.engR,cy);X.lineTo(L.col4-6,cy);
  X.strokeStyle='rgba(167,138,250,0.025)';X.lineWidth=0.8;X.stroke();
  out.forEach(o=>{
    X.beginPath();X.moveTo(L.col4,cy);
    X.quadraticCurveTo((L.col4+o.x)/2,o.y,o.x-12,o.y);
    X.strokeStyle='rgba(167,138,250,0.03)';X.lineWidth=0.8;X.stroke();
  });

  // Engine box
  const boxGlow=X.createRadialGradient(cx,cy,0,cx,cy,box.w*0.55);
  boxGlow.addColorStop(0,'rgba(167,138,250,0.025)');boxGlow.addColorStop(1,'transparent');
  X.fillStyle=boxGlow;X.beginPath();X.arc(cx,cy,box.w*0.55,0,Math.PI*2);X.fill();
  roundRect(box.x,box.y,box.w,box.h,box.r);
  X.fillStyle='rgba(167,138,250,0.012)';X.fill();
  roundRect(box.x,box.y,box.w,box.h,box.r);
  X.strokeStyle=`rgba(167,138,250,${0.06+pulse*0.03})`;X.lineWidth=1.2;X.stroke();
  X.font="600 "+(W<500?"7":"9")+"px 'DM Mono',monospace";X.fillStyle='#ffffff';
  X.globalAlpha=0.55;X.textAlign='center';X.fillText('REASONING ENGINE',cx,box.y+18);
  X.font="400 6.5px 'DM Mono',monospace";X.fillStyle='#a78afa';
  X.globalAlpha=0.3;X.fillText('NEURO-SYMBOLIC ARCHITECTURE',cx,box.y+29);X.globalAlpha=1;

  // ─── ENGINE INTERIOR: Concentric rings ───
  const maxR=Math.min(box.w,box.h)*0.38;
  const rings=[
    {r:maxR,      label:'INGESTION',  c:'#34d399',segs:16,dotR:1.2},
    {r:maxR*0.66, label:'REASONING',  c:'#67e8f9',segs:12,dotR:1.0},
    {r:maxR*0.33, label:'SYNTHESIS',  c:'#a78afa',segs:8, dotR:0.8}
  ];
  let arcB=[0.04,0.04,0.04];
  if(journey&&journey.phase==='inEngine')arcB=journey.arcBright.map(v=>Math.max(0.04,v));

  rings.forEach((ring,ri)=>{
    const bright=arcB[ri],r=ring.r;
    const segArc=Math.PI*2/ring.segs,gap=segArc*0.15;
    for(let s=0;s<ring.segs;s++){
      X.beginPath();X.arc(cx,ecy,r,s*segArc+gap/2,(s+1)*segArc-gap/2);
      X.strokeStyle=ring.c;X.globalAlpha=bright;X.lineWidth=0.8;X.stroke();X.globalAlpha=1;
    }
    for(let s=0;s<ring.segs;s++){
      const a=s*segArc;
      X.beginPath();X.moveTo(cx+Math.cos(a)*(r-3),ecy+Math.sin(a)*(r-3));
      X.lineTo(cx+Math.cos(a)*(r+3),ecy+Math.sin(a)*(r+3));
      X.strokeStyle=ring.c;X.globalAlpha=bright*0.6;X.lineWidth=0.4;X.stroke();X.globalAlpha=1;
    }
    for(let d=0;d<ring.segs;d++){
      const a=(d/ring.segs)*Math.PI*2+T*0.0015*(ri+1);
      X.beginPath();X.arc(cx+Math.cos(a)*r,ecy+Math.sin(a)*r,ring.dotR,0,Math.PI*2);
      X.fillStyle=ring.c;X.globalAlpha=bright>0.1?bright*0.6:0.02;X.fill();X.globalAlpha=1;
    }
    if(bright>0.06){
      X.font="500 5.5px 'DM Mono',monospace";X.fillStyle=ring.c;
      X.globalAlpha=Math.min(bright*1.5,0.35);X.textAlign='center';
      X.fillText(ring.label,cx,ecy-r-5);X.globalAlpha=1;
    }
  });

  // Crosshairs
  const chR=maxR*0.14;
  X.globalAlpha=0.035;X.strokeStyle='#a78afa';X.lineWidth=0.5;
  X.beginPath();X.moveTo(cx-chR,ecy);X.lineTo(cx+chR,ecy);X.stroke();
  X.beginPath();X.moveTo(cx,ecy-chR);X.lineTo(cx,ecy+chR);X.stroke();X.globalAlpha=1;

  // Ring dots flowing inward
  for(let i=ringDots.length-1;i>=0;i--){
    const d=ringDots[i];d.r-=d.speed;d.angle+=0.008;
    if(d.r<=8){ringDots.splice(i,1);continue}
    const dx=d.cx+Math.cos(d.angle)*d.r,dy=d.cy+Math.sin(d.angle)*d.r;
    const a=Math.sin((d.r/d.startR)*Math.PI)*0.7;
    const tg=X.createRadialGradient(dx,dy,0,dx,dy,4);
    tg.addColorStop(0,d.color+Math.round(a*40).toString(16).padStart(2,'0'));tg.addColorStop(1,'transparent');
    X.fillStyle=tg;X.beginPath();X.arc(dx,dy,4,0,Math.PI*2);X.fill();
    X.beginPath();X.arc(dx,dy,d.size,0,Math.PI*2);
    X.fillStyle=d.color;X.globalAlpha=a;X.fill();X.globalAlpha=1;
  }

  // Core node
  const cA=journey&&journey.phase==='inEngine';
  const cp=cA?pulse*1.2:pulse;
  const coreG=X.createRadialGradient(cx,ecy,0,cx,ecy,core.r*3);
  coreG.addColorStop(0,`rgba(167,138,250,${0.06*cp})`);coreG.addColorStop(1,'transparent');
  X.fillStyle=coreG;X.beginPath();X.arc(cx,ecy,core.r*3,0,Math.PI*2);X.fill();
  const cg=X.createRadialGradient(cx,ecy,0,cx,ecy,core.r);
  cg.addColorStop(0,'#e0d4ff');cg.addColorStop(1,'#a78afa');
  X.fillStyle=cg;X.globalAlpha=cp*0.85;
  X.beginPath();X.arc(cx,ecy,core.r,0,Math.PI*2);X.fill();X.globalAlpha=1;
  X.beginPath();X.arc(cx,ecy,core.r+4,0,Math.PI*2);
  X.strokeStyle=`rgba(167,138,250,${0.05*cp})`;X.lineWidth=0.5;X.stroke();

  // Source nodes with subtitles
  src.forEach(s=>{
    X.beginPath();X.arc(s.x,s.y,4,0,Math.PI*2);X.fillStyle=s.c+'70';X.fill();
    const sg=X.createRadialGradient(s.x,s.y,0,s.x,s.y,12);
    sg.addColorStop(0,s.c+'08');sg.addColorStop(1,'transparent');
    X.fillStyle=sg;X.beginPath();X.arc(s.x,s.y,12,0,Math.PI*2);X.fill();
    X.font="500 "+(W<500?"6":"7.5")+"px 'DM Mono',monospace";X.fillStyle=s.c;
    X.globalAlpha=0.55;X.textAlign='center';X.fillText(s.l,s.x,s.y+16);
    X.font="400 "+(W<500?"4.5":"5.5")+"px 'DM Mono',monospace";X.fillStyle='#9893a6';
    X.globalAlpha=0.3;X.fillText(s.sub,s.x,s.y+25);X.globalAlpha=1;
  });

  // Output nodes
  out.forEach(o=>{
    let bg=0;
    if(journey&&journey.phase==='bloom'&&journey.out===o)bg=journey.bloomLife;
    const r=4+bg*3;
    const og=X.createRadialGradient(o.x,o.y,0,o.x,o.y,12+bg*28);
    og.addColorStop(0,`rgba(167,138,250,${0.05+bg*0.2})`);og.addColorStop(1,'transparent');
    X.fillStyle=og;X.beginPath();X.arc(o.x,o.y,12+bg*28,0,Math.PI*2);X.fill();
    X.beginPath();X.arc(o.x,o.y,r,0,Math.PI*2);
    X.fillStyle=bg>0.3?'#e0d4ff':o.c+'70';X.fill();
    if(bg>0.1){X.beginPath();X.arc(o.x,o.y,r+3,0,Math.PI*2);
      X.strokeStyle=`rgba(196,181,253,${bg*0.35})`;X.lineWidth=1;X.stroke();}
    X.font=`${bg>0.3?'600':'500'} ${W<500?'6':'7.5'}px 'DM Mono',monospace`;
    X.fillStyle=bg>0.3?'#ffffff':o.c;
    X.globalAlpha=0.5+bg*0.5;X.textAlign='center';X.fillText(o.l,o.x,o.y+17);X.globalAlpha=1;
  });

  X.font="700 8.5px 'DM Mono',monospace";X.globalAlpha=0.45;
  X.fillStyle='#fbbf24';X.textAlign='center';X.fillText('DATA SOURCES',L.col1,18);
  X.fillStyle='#a78afa';X.fillText('OUTCOMES',L.col5,18);X.globalAlpha=1;

  // ─── JOURNEY STATE MACHINE ───
  if(!journey){journeyCooldown--;if(journeyCooldown<=0)startJourney(L);
    const phaseEl=document.getElementById('reasoningPhase');
    if(phaseEl){const sp=phaseEl.querySelector('span');if(sp)sp.classList.remove('visible');}
  }
  else{
    const j=journey;
    if(j.phase==='toData'){
      j.p+=j.speed;const ep=ease(j.p);const a=Math.min(j.p*5,1);
      j.srcParticles.forEach(sp=>{
        const x=sp.src.x+12+(j.dataX-(sp.src.x+12))*ep;
        const y=sp.src.y+(cy-sp.src.y)*ep;
        drawP(x,y,2,'#fbbf24',9,a*0.8);
        X.beginPath();X.moveTo(sp.src.x+12,sp.src.y);
        X.quadraticCurveTo((sp.src.x+j.dataX)/2,sp.src.y,j.dataX,cy);
        X.strokeStyle=`rgba(251,191,36,${a*0.05})`;X.lineWidth=1;X.stroke();
      });
      if(j.p>=1){j.phase='inData';j.p=0;}
    }
    else if(j.phase==='inData'){
      j.p+=0.05;const a=Math.sin(j.p*Math.PI);
      const mg=X.createRadialGradient(j.dataX,cy,0,j.dataX,cy,20);
      mg.addColorStop(0,`rgba(251,191,36,${a*0.2})`);mg.addColorStop(1,'transparent');
      X.fillStyle=mg;X.beginPath();X.arc(j.dataX,cy,20,0,Math.PI*2);X.fill();
      drawP(j.dataX,cy,3.5,'#fbbf24',10,0.5+a*0.4);
      if(j.p>=1){j.phase='toEngine';j.p=0;}
    }
    else if(j.phase==='toEngine'){
      j.p+=j.speed*1.3;const ep=ease(j.p);
      drawP(j.dataX+6+(j.engL-j.dataX-6)*ep,cy,2.5,'#fbbf24',10,0.85);
      if(j.p>=1){j.phase='inEngine';j.p=0;j.ringFlowStage=0;j.ringFlowTimer=0;j.arcBright=[0,0,0];}
    }
    else if(j.phase==='inEngine'){
      j.ringFlowTimer++;
      const mr=Math.min(L.boxW,eng.box.h)*0.38;
      if(j.ringFlowStage===0){
        j.arcBright[0]=Math.min(j.arcBright[0]+0.02,0.3);
        if(j.ringFlowTimer===5||j.ringFlowTimer===20)spawnRingDots(cx,ecy,mr,6,'#34d399',0.6);
        if(j.ringFlowTimer>38){j.ringFlowStage=1;j.ringFlowTimer=0;}
      }
      if(j.ringFlowStage===1){
        j.arcBright[0]=Math.max(j.arcBright[0]-0.004,0.14);
        j.arcBright[1]=Math.min(j.arcBright[1]+0.02,0.3);
        if(j.ringFlowTimer===5||j.ringFlowTimer===20)spawnRingDots(cx,ecy,mr*0.66,5,'#67e8f9',0.5);
        if(j.ringFlowTimer>38){j.ringFlowStage=2;j.ringFlowTimer=0;}
      }
      if(j.ringFlowStage===2){
        j.arcBright[1]=Math.max(j.arcBright[1]-0.004,0.14);
        j.arcBright[2]=Math.min(j.arcBright[2]+0.025,0.35);
        if(j.ringFlowTimer===5||j.ringFlowTimer===20)spawnRingDots(cx,ecy,mr*0.33,4,'#a78afa',0.4);
        if(j.ringFlowTimer>38){j.ringFlowStage=3;j.ringFlowTimer=0;}
      }
      if(j.ringFlowStage===3){
        j.arcBright[0]=0.2;j.arcBright[1]=0.2;j.arcBright[2]=0.25;
        if(j.ringFlowTimer<8){
          const fg=X.createRadialGradient(cx,ecy,0,cx,ecy,core.r*4);
          fg.addColorStop(0,`rgba(196,181,253,${0.15*(1-j.ringFlowTimer/8)})`);fg.addColorStop(1,'transparent');
          X.fillStyle=fg;X.beginPath();X.arc(cx,ecy,core.r*4,0,Math.PI*2);X.fill();
        }
        if(j.ringFlowTimer>22){j.phase='toDecision';j.p=0;}
      }
    }
    else if(j.phase==='toDecision'){
      j.p+=j.speed*1.3;const ep=ease(j.p);
      drawP(j.engR+(j.decX-6-j.engR)*ep,cy,3,'#a78afa',13,0.9);
      drawP(j.engR+(j.decX-6-j.engR)*ep,cy,1.2,'#e0d4ff',4,0.5);
      if(j.p>=1){j.phase='inDecision';j.p=0;}
    }
    else if(j.phase==='inDecision'){
      j.p+=0.05;const a=Math.sin(j.p*Math.PI);
      const dg=X.createRadialGradient(j.decX,cy,0,j.decX,cy,18);
      dg.addColorStop(0,`rgba(167,138,250,${a*0.12})`);dg.addColorStop(1,'transparent');
      X.fillStyle=dg;X.beginPath();X.arc(j.decX,cy,18,0,Math.PI*2);X.fill();
      drawP(j.decX,cy,3,'#a78afa',10,0.8);
      if(j.p>=1){j.phase='toOutput';j.p=0;}
    }
    else if(j.phase==='toOutput'){
      j.p+=j.speed;const ep=ease(j.p);
      const x=j.decX+(j.out.x-12-j.decX)*ep,y=cy+(j.out.y-cy)*ep;
      drawP(x,y,3.5,'#c4b5fd',15,0.9);drawP(x,y,1.5,'#ffffff',4,0.45);
      X.beginPath();X.moveTo(j.decX,cy);
      X.quadraticCurveTo((j.decX+j.out.x)/2,j.out.y,j.out.x-12,j.out.y);
      X.strokeStyle=`rgba(167,138,250,${0.05*(1-ep*0.5)})`;X.lineWidth=1;X.stroke();
      if(j.p>=1){
        j.phase='bloom';j.bloomLife=1;j.bloomRing=0;
        for(let i=0;i<8;i++){const angle=(Math.PI*2/8)*i+Math.random()*0.2;
          j.sparkleList.push({x:j.out.x,y:j.out.y,
            vx:Math.cos(angle)*(0.8+Math.random()*1.2),vy:Math.sin(angle)*(0.8+Math.random()*1.2),
            life:1,size:0.5+Math.random()*0.6,color:Math.random()>0.5?'#c4b5fd':'#67e8f9'});}
      }
    }
    else if(j.phase==='bloom'){
      j.bloomLife-=0.012;j.bloomRing+=1.8;
      if(j.bloomRing<45){X.beginPath();X.arc(j.out.x,j.out.y,j.bloomRing,0,Math.PI*2);
        X.strokeStyle=`rgba(196,181,253,${j.bloomLife*0.18*(1-j.bloomRing/45)})`;X.lineWidth=1.2;X.stroke();}
      if(j.bloomLife>0.4){const fg=X.createRadialGradient(j.out.x,j.out.y,0,j.out.x,j.out.y,20);
        fg.addColorStop(0,`rgba(255,255,255,${j.bloomLife*0.1})`);fg.addColorStop(0.5,`rgba(196,181,253,${j.bloomLife*0.05})`);
        fg.addColorStop(1,'transparent');X.fillStyle=fg;X.beginPath();X.arc(j.out.x,j.out.y,20,0,Math.PI*2);X.fill();}
      for(let k=j.sparkleList.length-1;k>=0;k--){const s=j.sparkleList[k];
        s.x+=s.vx;s.y+=s.vy;s.vx*=0.97;s.vy*=0.97;s.life-=0.014;
        if(s.life<=0){j.sparkleList.splice(k,1);continue}
        X.beginPath();X.arc(s.x,s.y,s.size*s.life,0,Math.PI*2);
        X.fillStyle=s.color;X.globalAlpha=s.life*0.6;X.fill();X.globalAlpha=1;}
      if(j.bloomLife<=0){journey=null;journeyCooldown=25;}
    }
    // Update phase annotation
    const phaseEl=document.getElementById('reasoningPhase');
    if(phaseEl){
      const labels={toData:'Ingesting data sources',inData:'Unifying data streams',toEngine:'Entering reasoning engine',inEngine:['Ingestion layer processing','Applying symbolic reasoning','Synthesizing recommendations','Core analysis complete'][j.ringFlowStage||0],toDecision:'Generating decision',inDecision:'Crystallizing recommendation',toOutput:'Delivering outcome',bloom:'Decision deployed'};
      const txt=labels[j.phase]||'';
      if(!phaseEl.querySelector('span'))phaseEl.innerHTML='<span></span>';
      const sp=phaseEl.querySelector('span');
      if(sp.textContent!==txt){sp.textContent=txt;}
      sp.classList.toggle('visible',!!txt);
    }
  }

  if(!stopped) requestAnimationFrame(animate);
}
window.addEventListener('resize',resize);resize();animate();
})();


/* ═══ GSAP ═══ */
if (!reduced) {
gsap.registerPlugin(ScrollTrigger);
gsap.timeline({delay:0.3})
  .to('.hero-tag',{opacity:1,y:0,duration:0.8,ease:'power3.out'})
  .to('.hero h1',{opacity:1,y:0,duration:0.8,ease:'power3.out'},'-=0.5')
  .to('.hero-sub',{opacity:1,y:0,duration:0.8,ease:'power3.out'},'-=0.5')
  .to('.hero-ctas',{opacity:1,y:0,duration:0.8,ease:'power3.out'},'-=0.5')
  .to('.hero-metrics',{opacity:1,y:0,duration:0.8,ease:'power3.out'},'-=0.4');
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
