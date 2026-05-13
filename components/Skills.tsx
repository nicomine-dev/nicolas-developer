import type { CopyBlock, Lang } from "@/lib/copy";
import { SKILL_DIRS, type SkillDir, type SkillEntry } from "@/lib/data";

function resolve(value: string | Record<Lang, string>, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}

function DirWindow({ dir, lang }: { dir: SkillDir; lang: Lang }) {
  const title = dir.title[lang];
  const metaHeader = dir.metaHeader[lang];
  const fileWord = lang === "es" ? "archivo(s)" : "file(s)";

  return (
    <article
      className={`dir-win icon-${dir.iconColor}`}
      aria-labelledby={`dir-${dir.id}-title`}
    >
      <header className="dir-titlebar">
        <span className="dir-path" id={`dir-${dir.id}-title`}>
          <span className="dir-path-route">{dir.pathLabel}</span>
          <span className="dir-path-sep" aria-hidden="true"> — </span>
          <span className="dir-path-name">{title}</span>
        </span>
        <span className="dir-buttons" aria-hidden="true">
          <span>_</span>
          <span>□</span>
          <span>×</span>
        </span>
      </header>

      <div className="dir-terminal" role="group">
        <div className="dir-scanlines" aria-hidden="true" />

        <div className="dir-prompt" aria-hidden="true">
          <span className="dir-cmd-route">{dir.pathLabel}</span>
          <span className="dir-cmd-gt">{">"}</span>
          <span className="dir-cmd"> dir /w</span>
        </div>

        <div className="dir-cols dir-head" role="row">
          <span role="columnheader">NAME</span>
          <span role="columnheader">{lang === "es" ? "TIPO" : "TYPE"}</span>
          <span role="columnheader">{metaHeader}</span>
        </div>

        <ul className="dir-list" role="rowgroup">
          {dir.entries.map((entry: SkillEntry) => {
            const name = resolve(entry.name, lang);
            return (
            <li key={`${name}${entry.ext}`} className="dir-row" role="row">
              <span className="dir-cols dir-cells">
                <span className="row-name" role="cell">
                  <span className="row-icon" aria-hidden="true">{entry.icon}</span>
                  <span className="row-uppercase">{name}</span>
                  <em className="row-ext">{entry.ext}</em>
                </span>
                <span className="row-type" role="cell">{resolve(entry.type, lang)}</span>
                <span className="row-meta" role="cell">{resolve(entry.meta, lang)}</span>
              </span>
            </li>
            );
          })}
        </ul>

        <footer className="dir-status">
          <span>{dir.entries.length} {fileWord}</span>
          <span>READY <i className="dir-cursor" aria-hidden="true">█</i></span>
        </footer>
      </div>
    </article>
  );
}

export function Skills({ c, lang }: { c: CopyBlock; lang: Lang }) {
  return (
    <section id="skills" className="vw-section skills">
      <div className="section-tag">
        {c.skillsTag}
        <span className="section-jp">技術</span>
      </div>
      <h2 className="section-title">{c.skillsTitle}</h2>

      <div className="skills-dirs">
        {SKILL_DIRS.map((dir) => (
          <DirWindow key={dir.id} dir={dir} lang={lang} />
        ))}
      </div>
    </section>
  );
}
