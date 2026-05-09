import type { CopyBlock } from "@/lib/copy";

export function Contact({ c }: { c: CopyBlock }) {
  return (
    <section id="contact" className="vw-section contact">
      <div className="contact-grid" aria-hidden="true" />
      <div className="contact-inner">
        <div className="section-tag">{c.contactTag}</div>
        <div className="contact-line">{c.contactLine}</div>
        <div className="contact-jp">{c.contactJp}</div>
        <a className="contact-mail" href="mailto:mine.nicolas03@gmail.com">
          MINE.NICOLAS03@GMAIL.COM
        </a>
        <div className="contact-socials">
          <a
            href="https://github.com/nicomine"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-e-mine/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a href="mailto:mine.nicolas03@gmail.com">GMAIL</a>
          <a
            href="/images/nicolas-e-mine-cv.pdf"
            download="Nicolas E. Mine - CV.pdf"
          >
            CV
          </a>
        </div>
        <div className="terminal" aria-hidden="true">
          <span className="ln">
            {">"} {c.termPrompt}
          </span>
          <span className="ln">
            {">"} {c.termOk}
          </span>
          <span className="ln in">
            {"$ "}
            {c.termAsk}
            <span className="cursor" />
          </span>
        </div>
      </div>
    </section>
  );
}
