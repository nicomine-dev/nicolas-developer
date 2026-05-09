import Image from "next/image";
import type { CopyBlock } from "@/lib/copy";
import { RetroWindow } from "./RetroWindow";

export function About({ c }: { c: CopyBlock }) {
  return (
    <section id="about" className="vw-section about">
      <div className="about-bg-grid" aria-hidden="true" />
      <div className="about-grid">
        <div>
          <div className="section-tag">
            {c.aboutTag}
            <span className="section-jp">私について</span>
          </div>
          <h2 className="section-title">{c.aboutTitle}</h2>
          <div className="about-text">
            <p dangerouslySetInnerHTML={{ __html: c.aboutP1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.aboutP2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.aboutP3 }} />
          </div>
        </div>
        <div className="about-card">
          <RetroWindow title={c.fileLabel}>
            <div className="win-inset">
              <div className="about-photo-slot has-photo" aria-label={c.photoLabel}>
                <Image
                  src="/images/profile-image.png"
                  alt="Nicolas E. Mine"
                  fill
                  sizes="(max-width: 900px) 80vw, 380px"
                  priority
                />
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <b>1+</b>
                {c.statYears}
              </div>
              <div className="stat">
                <b>4+</b>
                {c.statShipped}
              </div>
              <div className="stat">
                <b>∞</b>
                {c.statCoffee}
              </div>
              <div className="stat">
                <b>B2</b>
                {c.statBugs}
              </div>
            </div>
            <div
              style={{
                marginTop: 12,
                display: "flex",
                gap: 8,
                justifyContent: "flex-end",
              }}
            >
              <a
                className="win-btn"
                href="/images/nicolas-e-mine-cv.pdf"
                download="Nicolas E. Mine - CV.pdf"
              >
                CV
              </a>
              <a
                className="win-btn"
                href="https://github.com/nicomine"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </div>
          </RetroWindow>
        </div>
      </div>
    </section>
  );
}
