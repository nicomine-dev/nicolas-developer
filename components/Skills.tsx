import type { CopyBlock } from "@/lib/copy";
import { SKILLS, TOOLS } from "@/lib/data";
import { RetroWindow } from "./RetroWindow";

export function Skills({ c }: { c: CopyBlock }) {
  return (
    <section id="skills" className="vw-section skills">
      <div className="section-tag">
        {c.skillsTag}
        <span className="section-jp">技術</span>
      </div>
      <h2 className="section-title">{c.skillsTitle}</h2>
      <div className="skills-row">
        <div className="skills-window">
          <RetroWindow title="PROPERTIES :: STACK.SYS">
            {SKILLS.map((s, i) => (
              <div className="skill" key={s.name}>
                <div className="skill-row">
                  <span>{s.name}</span>
                  <span className="lvl">{s.level}%</span>
                </div>
                <div className={`skill-bar${i % 2 ? " alt" : ""}`}>
                  <i style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </RetroWindow>
        </div>
        <div className="skills-tape">
          {TOOLS.map((tl, i) => (
            <div className={`tape-row ${i % 2 ? "cyan" : ""}`} key={tl.label}>
              <div className="label">{tl.label}</div>
              <div className="value">{tl.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
