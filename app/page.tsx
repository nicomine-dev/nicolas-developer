import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CRT } from "@/components/CRT";
import { Cursor } from "@/components/Cursor";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { SideNav } from "@/components/SideNav";
import { TopBar } from "@/components/TopBar";
import { COPY, SECTION_IDS } from "@/lib/copy";

const LANG = "es" as const;

export default function HomePage() {
  const c = COPY[LANG];
  return (
    <>
      <CRT />
      <Cursor />
      <TopBar />
      <SideNav labels={c.nav} ids={SECTION_IDS} />
      <Hero c={c} />
      <About c={c} />
      <Experience c={c} lang={LANG} />
      <Projects c={c} lang={LANG} />
      <Skills c={c} lang={LANG} />
      <Contact c={c} />
      <Footer c={c} />
    </>
  );
}
