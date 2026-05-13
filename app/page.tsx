"use client";

import { useState } from "react";
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
import { COPY, SECTION_IDS, type Lang } from "@/lib/copy";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("es");
  const c = COPY[lang];
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  return (
    <>
      <CRT />
      <Cursor />
      <TopBar lang={lang} onToggleLang={toggleLang} />
      <SideNav labels={c.nav} ids={SECTION_IDS} />
      <Hero c={c} />
      <About c={c} />
      <Experience c={c} lang={lang} />
      <Projects c={c} lang={lang} />
      <Skills c={c} lang={lang} />
      <Contact c={c} />
      <Footer c={c} />
    </>
  );
}
