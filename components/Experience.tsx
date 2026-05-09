import type { CopyBlock, Lang } from "@/lib/copy";
import { EXPERIENCE } from "@/lib/data";

export function Experience({ c, lang }: { c: CopyBlock; lang: Lang }) {
  return (
    <section id="experience" className="vw-section experience">
      <div className="section-tag">
        {c.expTag}
        <span className="section-jp">経歴</span>
      </div>
      <h2 className="section-title">{c.expTitle}</h2>
      <div className="exp-list">
        {EXPERIENCE.map((e) => (
          <div className="exp-row" key={e.company}>
            <div className="exp-when">{e.when}</div>
            <div>
              <div className="exp-co">{e.company}</div>
              <div className="exp-role">{e.role[lang]}</div>
              <div className="exp-desc">{e.desc[lang]}</div>
            </div>
            <div className="exp-tags">
              {e.tags.map((tg) => (
                <span key={tg}>{tg}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
