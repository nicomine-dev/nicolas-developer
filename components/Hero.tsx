import type { CopyBlock } from "@/lib/copy";

const NAME = "NICOLAS";

export function Hero({ c }: { c: CopyBlock }) {
  const marqueeItems = [...c.marquee, ...c.marquee, ...c.marquee];
  return (
    <section id="home" className="vw-section hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-sun" aria-hidden="true" />
      <div className="hero-mountains" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <h1 className="hero-name" data-text={NAME}>
          {NAME}
          <span className="glitch l" aria-hidden="true">
            {NAME}
          </span>
          <span className="glitch r" aria-hidden="true">
            {NAME}
          </span>
        </h1>
        <div className="hero-sub">{c.sub}</div>
        <div className="hero-jp">{c.jp} ・ ニコラス</div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        {c.scroll}
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <div className="track">
          {marqueeItems.map((m, i) => (
            <span key={i} className={i % 2 === 0 ? "" : "accent"}>
              ★ {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
