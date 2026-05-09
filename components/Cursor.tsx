"use client";

import { useEffect, useRef, useState } from "react";

const SPRITE_W = 24;
const SPRITE_H = 18;

/* shared sitting body — head, ears, eyes, nose, paws */
function SittingBody() {
  return (
    <>
      <g fill="#ffffff">
        {/* ears */}
        <rect x="3" y="1" width="2" height="2" />
        <rect x="2" y="2" width="4" height="2" />
        <rect x="9" y="1" width="2" height="2" />
        <rect x="8" y="2" width="4" height="2" />
        {/* head */}
        <rect x="2" y="3" width="10" height="6" />
        {/* sitting body, widening downward */}
        <rect x="3" y="8" width="9" height="2" />
        <rect x="2" y="9" width="11" height="2" />
        <rect x="1" y="11" width="13" height="4" />
        {/* base */}
        <rect x="2" y="15" width="11" height="1" />
        {/* front paws */}
        <rect x="3" y="14" width="2" height="3" />
        <rect x="9" y="14" width="2" height="3" />
      </g>
      {/* inner ears */}
      <rect x="3" y="2" width="1" height="1" fill="#ff71ce" />
      <rect x="9" y="2" width="1" height="1" fill="#ff71ce" />
      {/* eyes */}
      <rect x="4" y="5" width="1" height="2" fill="#01cdfe" />
      <rect x="9" y="5" width="1" height="2" fill="#01cdfe" />
      {/* nose */}
      <rect x="6" y="7" width="2" height="1" fill="#ff2d95" />
    </>
  );
}

/* Idle frame A — tail curled up behind */
function CatIdleA() {
  return (
    <svg
      className="frame idle idle-a"
      viewBox={`0 0 ${SPRITE_W} ${SPRITE_H}`}
      shapeRendering="crispEdges"
    >
      <SittingBody />
      <g fill="#ffffff">
        <rect x="13" y="11" width="2" height="2" />
        <rect x="14" y="9" width="2" height="2" />
        <rect x="14" y="7" width="2" height="2" />
        <rect x="12" y="5" width="2" height="2" />
      </g>
    </svg>
  );
}

/* Idle frame B — tail swung forward (wagging) */
function CatIdleB() {
  return (
    <svg
      className="frame idle idle-b"
      viewBox={`0 0 ${SPRITE_W} ${SPRITE_H}`}
      shapeRendering="crispEdges"
    >
      <SittingBody />
      <g fill="#ffffff">
        <rect x="13" y="12" width="2" height="2" />
        <rect x="15" y="11" width="2" height="2" />
        <rect x="17" y="10" width="2" height="2" />
        <rect x="19" y="9" width="2" height="2" />
      </g>
    </svg>
  );
}

/* Frame A: front-left + back-right planted, the other pair lifted; tail straight back */
function CatRunA() {
  return (
    <svg
      className="frame run run-a"
      viewBox={`0 0 ${SPRITE_W} ${SPRITE_H}`}
      shapeRendering="crispEdges"
    >
      <g fill="#ffffff">
        {/* ears */}
        <rect x="3" y="2" width="2" height="3" />
        <rect x="2" y="3" width="4" height="2" />
        <rect x="9" y="2" width="2" height="3" />
        <rect x="8" y="3" width="4" height="2" />
        {/* head pushed forward */}
        <rect x="1" y="4" width="11" height="6" />
        {/* stretched body */}
        <rect x="4" y="9" width="15" height="5" />
        {/* legs: extended sprint */}
        <rect x="3" y="13" width="2" height="4" />
        <rect x="6" y="13" width="2" height="2" />
        <rect x="14" y="13" width="2" height="2" />
        <rect x="17" y="13" width="2" height="4" />
        {/* tail straight back */}
        <rect x="19" y="9" width="2" height="2" />
        <rect x="21" y="9" width="2" height="2" />
      </g>
      <rect x="4" y="3" width="1" height="1" fill="#ff71ce" />
      <rect x="10" y="3" width="1" height="1" fill="#ff71ce" />
      <rect x="3" y="6" width="1" height="2" fill="#01cdfe" />
      <rect x="9" y="6" width="1" height="2" fill="#01cdfe" />
      <rect x="5" y="8" width="2" height="1" fill="#ff2d95" />
      {/* speed lines */}
      <rect x="22" y="6" width="2" height="1" fill="#01cdfe" opacity="0.7" />
      <rect x="22" y="12" width="2" height="1" fill="#ff71ce" opacity="0.7" />
    </svg>
  );
}

/* Frame B: leg pairs swapped + body gathered; tail curled up */
function CatRunB() {
  return (
    <svg
      className="frame run run-b"
      viewBox={`0 0 ${SPRITE_W} ${SPRITE_H}`}
      shapeRendering="crispEdges"
    >
      <g fill="#ffffff">
        {/* ears (head bobbed up 1px) */}
        <rect x="3" y="1" width="2" height="3" />
        <rect x="2" y="2" width="4" height="2" />
        <rect x="9" y="1" width="2" height="3" />
        <rect x="8" y="2" width="4" height="2" />
        {/* head */}
        <rect x="2" y="3" width="10" height="6" />
        {/* gathered body */}
        <rect x="5" y="8" width="13" height="6" />
        {/* legs: opposite pair planted */}
        <rect x="5" y="13" width="2" height="2" />
        <rect x="8" y="13" width="2" height="4" />
        <rect x="13" y="13" width="2" height="4" />
        <rect x="16" y="13" width="2" height="2" />
        {/* tail curled up */}
        <rect x="18" y="7" width="2" height="2" />
        <rect x="20" y="5" width="2" height="2" />
        <rect x="20" y="3" width="2" height="2" />
      </g>
      <rect x="4" y="2" width="1" height="1" fill="#ff71ce" />
      <rect x="10" y="2" width="1" height="1" fill="#ff71ce" />
      <rect x="4" y="5" width="1" height="2" fill="#01cdfe" />
      <rect x="9" y="5" width="1" height="2" fill="#01cdfe" />
      <rect x="6" y="7" width="2" height="1" fill="#ff2d95" />
      {/* dust puff */}
      <rect x="0" y="15" width="2" height="1" fill="#ffffff" opacity="0.5" />
      <rect x="2" y="16" width="2" height="1" fill="#ffffff" opacity="0.4" />
    </svg>
  );
}

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const cat = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) {
      document.body.classList.remove("custom-cursor");
      return;
    }
    setEnabled(true);
    document.body.classList.add("custom-cursor");

    const DELAY_MS = 0;
    const MAX_SPEED = 2.5; // px por frame (~60fps -> 150px/s)
    const FOLLOW = 0.04;   // factor proporcional cerca del cursor (suaviza la llegada)
    const REST_OFFSET = 22; // px de separacion al cursor cuando se queda quieto
    const trail: { x: number; y: number; t: number }[] = [];

    let cx = 0,
      cy = 0,
      x = 0,
      y = 0,
      angle = 0,
      lastApproachX = 1; // 1 = se acerca desde la izq -> queda a la izq del cursor

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      trail.push({ x, y, t: performance.now() });
      if (dot.current) {
        dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    };

    let raf = 0;
    const tick = () => {
      const now = performance.now();
      const targetT = now - DELAY_MS;
      while (trail.length > 1 && trail[1].t <= targetT) trail.shift();
      const target = trail[0] ?? { x, y, t: now };
      // direction to the actual cursor (used for facing + memorizing approach side)
      const rawDX = target.x - cx;
      const rawDY = target.y - cy;
      const rawDist = Math.hypot(rawDX, rawDY);
      if (rawDist > 6 && Math.abs(rawDX) > 1) {
        lastApproachX = Math.sign(rawDX);
      }
      // goal = cursor desplazado al lado opuesto al de aproximacion (queda apartado)
      const goalX = target.x - lastApproachX * REST_OFFSET;
      const goalY = target.y;
      const dx = goalX - cx;
      const dy = goalY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > 0.1) {
        const step = Math.min(MAX_SPEED, dist * FOLLOW);
        cx += (dx / dist) * step;
        cy += (dy / dist) * step;
      }
      // mira hacia el cursor real, no hacia el goal desplazado
      if (rawDist > 4) angle = Math.atan2(rawDY, rawDX);
      if (cat.current) {
        const flip = Math.cos(angle) < 0 ? 1 : -1;
        const tilt = Math.sin(angle) * 12 * flip;
        cat.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%) scaleX(${flip}) rotate(${tilt}deg)`;
        const running = dist > 2;
        cat.current.classList.toggle("running", running);
      }
      if (dot.current) {
        dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const over = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const tag =
        target && typeof target.closest === "function"
          ? target.closest("a, button, .proj, .exp-row")
          : null;
      document.body.classList.toggle("cursor-hover", !!tag);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.body.classList.remove("custom-cursor", "cursor-hover");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div className="cursor-cat" ref={cat} aria-hidden="true">
        <CatIdleA />
        <CatIdleB />
        <CatRunA />
        <CatRunB />
      </div>
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
    </>
  );
}
