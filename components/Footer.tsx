import type { CopyBlock } from "@/lib/copy";

export function Footer({ c }: { c: CopyBlock }) {
  return (
    <footer className="foot">
      <div className="copy">© NICOLAS · {c.foot}</div>
      <div className="ver">{c.ver}</div>
    </footer>
  );
}
