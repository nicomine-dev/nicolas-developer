import Image from "next/image";
import type { CopyBlock, Lang } from "@/lib/copy";
import { PROJECTS } from "@/lib/data";

export function Projects({ c, lang }: { c: CopyBlock; lang: Lang }) {
  return (
    <section id="projects" className="vw-section projects">
      <div className="section-tag">
        {c.projTag}
        <span className="section-jp">作品</span>
      </div>
      <h2 className="section-title">{c.projTitle}</h2>
      <div className="proj-grid">
        {PROJECTS.map((p) => (
          <a
            className="proj"
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className={`proj-screen ${p.kind}`}>
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 900px) 90vw, 560px"
                className="proj-shot"
              />
              <div className="scrn-label">{p.label}</div>
            </div>
            <div className="proj-meta">
              <div>
                <div className="proj-name">{p.name}</div>
                <div className="proj-desc">{p.desc[lang]}</div>
                <div className="proj-link">{p.link[lang]}</div>
              </div>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
