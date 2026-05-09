"use client";

import { useEffect, useRef } from "react";
import { CatIdleA, CatIdleB, CatPetA, CatPetB, CatRunA, CatRunB } from "./CatSprite";

export function FooterCat() {
  const ref = useRef<HTMLDivElement>(null);
  const pettedUntil = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const CAT_W = 72;
    const SPEED = 90; // px/s

    let raf = 0;
    let timeout = 0;
    let lastT = performance.now();
    let pos = 0;
    let target = 0;
    let dir = 1; // 1 = facing right
    let moving = false;

    const parentWidth = () => {
      const parent = el.parentElement;
      if (!parent) return 0;
      return parent.clientWidth - CAT_W - 16;
    };

    const apply = () => {
      const flip = dir === 1 ? -1 : 1; // sprite is right-facing when scaleX=-1 (matches cursor)
      el.style.transform = `translateX(${pos}px) scaleX(${flip})`;
      const petted = performance.now() < pettedUntil.current;
      el.classList.toggle("petted", petted);
      el.classList.toggle("running", moving && !petted);
    };

    const pickAction = () => {
      if (performance.now() < pettedUntil.current) {
        timeout = window.setTimeout(pickAction, 200);
        return;
      }
      const max = parentWidth();
      if (max <= 0) {
        timeout = window.setTimeout(pickAction, 500);
        return;
      }
      const willMove = Math.random() < 0.7;
      if (willMove) {
        target = Math.random() * max;
        dir = target >= pos ? 1 : -1;
        moving = true;
        apply();
      } else {
        moving = false;
        apply();
        const wait = 800 + Math.random() * 2400;
        timeout = window.setTimeout(pickAction, wait);
      }
    };

    const onClick = () => {
      pettedUntil.current = performance.now() + 1500;
      moving = false;
      apply();
      clearTimeout(timeout);
      timeout = window.setTimeout(pickAction, 1500);
    };
    el.addEventListener("click", onClick);

    const tick = () => {
      const now = performance.now();
      const dt = (now - lastT) / 1000;
      lastT = now;
      if (now < pettedUntil.current) {
        moving = false;
        apply();
        raf = requestAnimationFrame(tick);
        return;
      }
      if (moving) {
        const remaining = target - pos;
        const dist = Math.abs(remaining);
        const step = SPEED * dt;
        if (dist <= step) {
          pos = target;
          moving = false;
          apply();
          const wait = 600 + Math.random() * 2000;
          timeout = window.setTimeout(pickAction, wait);
        } else {
          pos += Math.sign(remaining) * step;
          apply();
        }
      }
      raf = requestAnimationFrame(tick);
    };

    pos = parentWidth();
    apply();
    pickAction();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      el.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="contact-cat" ref={ref} aria-hidden="true">
      <CatIdleA />
      <CatIdleB />
      <CatRunA />
      <CatRunB />
      <CatPetA />
      <CatPetB />
    </div>
  );
}
