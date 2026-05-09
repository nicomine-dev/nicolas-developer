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
            aria-label="GitHub"
          >
            <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.21-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12.02C23.5 5.66 18.35.5 12 .5Z"
              />
            </svg>
            <span>GITHUB</span>
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-e-mine/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
              />
            </svg>
            <span>LINKEDIN</span>
          </a>
          <a href="mailto:mine.nicolas03@gmail.com" aria-label="Gmail">
            <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M22 5.5v13a1.5 1.5 0 0 1-1.5 1.5H18V9.74l-6 4.5-6-4.5V20H3.5A1.5 1.5 0 0 1 2 18.5v-13A1.5 1.5 0 0 1 3.5 4h.4l8.1 6.07L20.1 4h.4A1.5 1.5 0 0 1 22 5.5Z"
              />
            </svg>
            <span>GMAIL</span>
          </a>
          <a
            href="/images/nicolas-e-mine-cv.pdf"
            download="Nicolas E. Mine - CV.pdf"
            aria-label="CV"
          >
            <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm-1 7V3.5L18.5 9H13Zm-1 4v5l2.5-2.5 1.4 1.4L12 21.3l-3.9-3.9 1.4-1.4L12 18.5v-5.5h0Z"
              />
            </svg>
            <span>CV</span>
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
