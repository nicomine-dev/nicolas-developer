"use client";

import { useEffect, useState } from "react";

type Props = {
  labels: string[];
  ids: readonly string[];
};

export function SideNav({ labels, ids }: Props) {
  const [active, setActive] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      let idx = 0;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) idx = i;
      });
      setActive(idx);

      if (Math.abs(window.scrollY - lastY) > 1) {
        setScrolling(true);
        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = setTimeout(() => setScrolling(false), 1200);
      }
      lastY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [ids]);

  return (
    <nav
      className={`side-nav${scrolling ? " is-scrolling" : ""}`}
      aria-label="Section navigation"
    >
      {labels.map((l, i) => (
        <button
          key={l}
          aria-label={l}
          aria-current={i === active ? "true" : undefined}
          className={i === active ? "active" : ""}
          onClick={() => {
            const el = document.getElementById(ids[i]);
            if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
          }}
        >
          <span className="label">{l}</span>
          <span className="dot" aria-hidden="true" />
        </button>
      ))}
    </nav>
  );
}
