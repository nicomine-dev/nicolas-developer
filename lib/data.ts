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

export type SkillIconColor = "cyan-soft" | "purple" | "yellow" | "pink-soft" | "orange";

export type SkillEntry = {
  icon: string;
  name: string;
  ext: string;
  type: Record<Lang, string>;
  meta: string | Record<Lang, string>;
};

export type SkillDir = {
  id: string;
  pathLabel: string;
  title: Record<Lang, string>;
  metaHeader: Record<Lang, string>;
  iconColor: SkillIconColor;
  entries: SkillEntry[];
};

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
    when: "B2",
    company: "INGLES",
    role: { es: "Nivel alto", en: "Upper-intermediate" },
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
  { label: "IDIOMAS", value: "ESPANOL / INGLES B2" },
];

export const SKILL_DIRS: SkillDir[] = [
  {
    id: "frontend",
    pathLabel: "C:\\STACK\\FRONTEND",
    title: { es: "FRONTEND", en: "FRONTEND" },
    metaHeader: { es: "AÑOS", en: "YEARS" },
    iconColor: "cyan-soft",
    entries: [
      { icon: "▤", name: "REACT",      ext: ".JSX", type: { es: "FRAMEWORK", en: "FRAMEWORK" }, meta: "3" },
      { icon: "▤", name: "TYPESCRIPT", ext: ".TS",  type: { es: "LENGUAJE",  en: "LANGUAGE"  }, meta: "2" },
      { icon: "▤", name: "JAVASCRIPT", ext: ".JS",  type: { es: "LENGUAJE",  en: "LANGUAGE"  }, meta: "4" },
      { icon: "▦", name: "MATERIAL-UI", ext: ".MUI", type: { es: "LIBRERIA", en: "LIBRARY"   }, meta: "2" },
      { icon: "◈", name: "HTML",       ext: ".HTM", type: { es: "MARCADO",   en: "MARKUP"    }, meta: "5" },
      { icon: "◈", name: "CSS",        ext: ".CSS", type: { es: "ESTILO",    en: "STYLING"   }, meta: "5" },
    ],
  },
  {
    id: "backend",
    pathLabel: "C:\\STACK\\BACKEND",
    title: { es: "BACKEND", en: "BACKEND" },
    metaHeader: { es: "AÑOS", en: "YEARS" },
    iconColor: "purple",
    entries: [
      { icon: "▦", name: "NODE",   ext: ".JS",  type: { es: "RUNTIME",  en: "RUNTIME"  }, meta: "2" },
      { icon: "▦", name: "EXPRESS", ext: ".JS", type: { es: "FRAMEWORK", en: "FRAMEWORK" }, meta: "1" },
      { icon: "◉", name: "MYSQL",  ext: ".SQL", type: { es: "BASE",     en: "DATABASE" }, meta: "3" },
      { icon: "◉", name: "REST",   ext: ".API", type: { es: "PROTOCOLO", en: "PROTOCOL" }, meta: "3" },
    ],
  },
  {
    id: "tools",
    pathLabel: "C:\\STACK\\TOOLS",
    title: { es: "HERRAMIENTAS", en: "TOOLS" },
    metaHeader: { es: "USO", en: "USE" },
    iconColor: "yellow",
    entries: [
      { icon: "◈", name: "VSCODE",  ext: ".EXE", type: { es: "EDITOR", en: "EDITOR" }, meta: { es: "DIARIO",   en: "DAILY"   } },
      { icon: "◈", name: "GIT",     ext: ".EXE", type: { es: "VCS",    en: "VCS"    }, meta: { es: "DIARIO",   en: "DAILY"   } },
      { icon: "◈", name: "GITHUB",  ext: ".COM", type: { es: "REMOTO", en: "REMOTE" }, meta: { es: "DIARIO",   en: "DAILY"   } },
      { icon: "◈", name: "FIGMA",   ext: ".APP", type: { es: "DISENO", en: "DESIGN" }, meta: { es: "SEMANAL",  en: "WEEK"    } },
      { icon: "◈", name: "VERCEL",  ext: ".COM", type: { es: "DEPLOY", en: "DEPLOY" }, meta: { es: "SEMANAL",  en: "WEEK"    } },
      { icon: "◈", name: "POSTMAN", ext: ".APP", type: { es: "API",    en: "API"    }, meta: { es: "MENSUAL",  en: "MONTH"   } },
    ],
  },
  {
    id: "soft",
    pathLabel: "C:\\STACK\\SOFT",
    title: { es: "HABILIDADES BLANDAS", en: "SOFT SKILLS" },
    metaHeader: { es: "NIVEL", en: "LEVEL" },
    iconColor: "pink-soft",
    entries: [
      { icon: "★", name: "TEAMWORK",      ext: ".HUM", type: { es: "EQUIPO",    en: "TEAM"     }, meta: "★★★★★" },
      { icon: "★", name: "COMUNICACION",  ext: ".HUM", type: { es: "PERSONAL",  en: "PERSONAL" }, meta: "★★★★☆" },
      { icon: "★", name: "ADAPTABILIDAD", ext: ".HUM", type: { es: "PERSONAL",  en: "PERSONAL" }, meta: "★★★★★" },
      { icon: "★", name: "PROBLEM-SOLVE", ext: ".HUM", type: { es: "ANALISIS",  en: "ANALYSIS" }, meta: "★★★★☆" },
      { icon: "★", name: "CURIOSIDAD",    ext: ".HUM", type: { es: "MINDSET",   en: "MINDSET"  }, meta: "★★★★★" },
    ],
  },
  {
    id: "other-langs",
    pathLabel: "C:\\STACK\\LANGS",
    title: { es: "OTROS LENGUAJES", en: "OTHER LANGUAGES" },
    metaHeader: { es: "AÑOS", en: "YEARS" },
    iconColor: "orange",
    entries: [
      { icon: "▦", name: "PYTHON", ext: ".PY",  type: { es: "LENGUAJE", en: "LANGUAGE" }, meta: "1" },
      { icon: "▦", name: "JAVA",   ext: ".JAR", type: { es: "LENGUAJE", en: "LANGUAGE" }, meta: "1" },
      { icon: "▦", name: "C",      ext: ".C",   type: { es: "LENGUAJE", en: "LANGUAGE" }, meta: "1" },
      { icon: "▦", name: "PHP",    ext: ".PHP", type: { es: "LENGUAJE", en: "LANGUAGE" }, meta: "1" },
    ],
  },
  {
    id: "idiomas",
    pathLabel: "C:\\STACK\\I18N",
    title: { es: "IDIOMAS", en: "LANGUAGES" },
    metaHeader: { es: "NIVEL", en: "LEVEL" },
    iconColor: "yellow",
    entries: [
      { icon: "◉", name: "ESPANOL", ext: ".LNG", type: { es: "HABLADO", en: "SPOKEN" }, meta: { es: "NATIVO", en: "NATIVE" } },
      { icon: "◉", name: "INGLES",  ext: ".LNG", type: { es: "HABLADO", en: "SPOKEN" }, meta: "B2" },
    ],
  },
];
