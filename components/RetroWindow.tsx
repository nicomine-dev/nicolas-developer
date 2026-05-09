import type { ReactNode } from "react";

type Props = {
  title: string;
  className?: string;
  children: ReactNode;
};

export function RetroWindow({ title, className, children }: Props) {
  return (
    <div className={`win ${className ?? ""}`}>
      <div className="win-title">
        <span>
          <span className="ttl-icon" aria-hidden="true" />
          {title}
        </span>
        <span className="ttl-buttons" aria-hidden="true">
          <span>_</span>
          <span>□</span>
          <span>×</span>
        </span>
      </div>
      <div className="win-body">{children}</div>
    </div>
  );
}
