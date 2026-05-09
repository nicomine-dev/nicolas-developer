"use client";

import { useEffect, useState } from "react";

export function TopBar() {
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

  return (
    <div className="top-bar">
      <div className="brand">★ NICOLAS.SYS</div>
      <div className="stat">
        <span>
          REC <span className="blink">●</span>
        </span>
        <span>{time}</span>
      </div>
    </div>
  );
}
