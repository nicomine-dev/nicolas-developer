"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/copy";

type Props = {
  lang: Lang;
  onToggleLang: () => void;
};

export function TopBar({ lang, onToggleLang }: Props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  const next: Lang = lang === "es" ? "en" : "es";

  return (
    <div className="top-bar">
      <div className="brand">★ NICOLAS.SYS</div>
      <div className="stat">
        <button
          type="button"
          className="lang-toggle"
          onClick={onToggleLang}
          aria-label={`Switch language to ${next.toUpperCase()}`}
          title={`Switch to ${next.toUpperCase()}`}
        >
          <span className={lang === "es" ? "on" : ""}>ES</span>
          <span className="sep">/</span>
          <span className={lang === "en" ? "on" : ""}>EN</span>
        </button>
        <span>
          REC <span className="blink">●</span>
        </span>
        <span>{time}</span>
      </div>
    </div>
  );
}
