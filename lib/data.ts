import type { Lang } from "./copy";

export type Experience = {
  when: string;
  company: string;
  role: Record<Lang, string>;
  desc: Record<Lang, string>;
  tags: string[];
};

export type Project = {
  name: string;
  kind: "kind-grid" | "kind-stripes" | "kind-checker" | "kind-noise";
  label: string;
  href: string;
  image: string;
  desc: Record<Lang, string>;
  tags: string[];
  link: Record<Lang, string>;
};

export type Skill = { name: string; level: number };
export type Tool = { label: string; value: string };

export const EXPERIENCE: Experience[] = [
  {
    when: "2024 — NOW",
    company: "FREELANCE",
    role: {
      es: "Front-End Developer",
      en: "Front-End Developer",
    },
    desc: {
      es: "Construyo interfaces con React, TypeScript y Material UI. Foco en UX, accesibilidad y codigo mantenible.",
      en: "Building UIs with React, TypeScript and Material UI. Focus on UX, accessibility and maintainable code.",
    },
    tags: ["REACT", "TS", "MUI"],
  },
  {
    when: "ANALISTA",
    company: "ANALISTA PROGRAMADOR",
    role: {
      es: "Titulo intermedio",
      en: "Intermediate degree",
    },
    desc: {
      es: "Formacion centrada en programacion, bases de datos y analisis funcional. Base solida para construir productos completos.",
      en: "Training in programming, databases and functional analysis. Solid foundation for full product work.",
    },
    tags: ["JS", "MYSQL", "OOP"],
  },
  {
    when: "ANALISTA",
    company: "ANALISTA EN SISTEMAS",
    role: {
      es: "Titulo de grado",
      en: "Degree",
    },
    desc: {
      es: "Vision integral: tecnica + negocio. Modelado de procesos, gestion de proyectos y diseno de soluciones IT.",
      en: "Integral view: tech + business. Process modeling, project management and IT solution design.",
    },
    tags: ["ANALYSIS", "DB", "PM"],
  },
  {
    when: "B1",
    company: "INGLES",
    role: { es: "Nivel intermedio", en: "Intermediate" },
    desc: {
      es: "Comunicacion fluida en entornos tecnicos: documentacion, code review y meetings.",
      en: "Fluent in technical settings: documentation, code review and meetings.",
    },
    tags: ["DOCS", "MEETINGS"],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "ECO-MOVES",
    kind: "kind-grid",
    label: "MONEY.EXE",
    href: "https://ecomoves.vercel.app",
    image: "/images/screenshots/eco-moves.png",
    desc: {
      es: "App para llevar registro del dinero. Organiza tus cuentas y muestra resumenes claros.",
      en: "App to track your money. Organizes your accounts and shows clean summaries.",
    },
    tags: ["REACT"],
    link: { es: "VER →", en: "VIEW →" },
  },
  {
    name: "PIXEL-PLAYER",
    kind: "kind-stripes",
    label: "PLAYER.APP",
    href: "https://pixel-player-nm.vercel.app",
    image: "/images/screenshots/audio-player.png",
    desc: {
      es: "Reproductor de canciones con estetica vaporwave y pixelart.",
      en: "Music player with vaporwave + pixel-art aesthetic.",
    },
    tags: ["REACT", "AUDIO"],
    link: { es: "ESCUCHAR →", en: "LISTEN →" },
  },
  {
    name: "POKEDEX",
    kind: "kind-checker",
    label: "POKE.BIN",
    href: "https://pokedex-nm.vercel.app",
    image: "/images/screenshots/pokedex.png",
    desc: {
      es: "Pokedex conectada a la PokeAPI. Mi primer trabajo en React.",
      en: "Pokedex hooked to the PokeAPI. My first React build.",
    },
    tags: ["REACT", "API"],
    link: { es: "EXPLORAR →", en: "EXPLORE →" },
  },
  {
    name: "BEECOMMERCE",
    kind: "kind-noise",
    label: "STORE.HTM",
    href: "https://beecommerce-three.vercel.app/login",
    image: "/images/screenshots/beecommerce.png",
    desc: {
      es: "App para negocios con stock, ventas y metricas. Escaneo de codigos de barra y QR.",
      en: "Business app with stock, sales and metrics. Barcode and QR scanning.",
    },
    tags: ["REACT", "MUI"],
    link: { es: "ABRIR →", en: "BROWSE →" },
  },
];

export const SKILLS: Skill[] = [
  { name: "REACT", level: 90 },
  { name: "TYPESCRIPT", level: 85 },
  { name: "JAVASCRIPT", level: 90 },
  { name: "MATERIAL UI", level: 85 },
  { name: "HTML / CSS", level: 92 },
  { name: "MYSQL", level: 75 },
  { name: "GIT / GITHUB", level: 80 },
  { name: "TEAMWORK", level: 95 },
];

export const TOOLS: Tool[] = [
  { label: "ROLE", value: "FRONT-END DEV" },
  { label: "TITULO", value: "ANALISTA EN SISTEMAS" },
  { label: "STACK", value: "REACT / TS / MUI" },
  { label: "DB", value: "MYSQL" },
  { label: "TOOLS", value: "VS CODE / GITHUB" },
  { label: "IDIOMAS", value: "ESPANOL / INGLES B1" },
];
