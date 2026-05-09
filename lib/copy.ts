export type Lang = "es" | "en";

export type CopyBlock = {
  nav: string[];
  sub: string;
  jp: string;
  marquee: string[];
  scroll: string;
  aboutTag: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  fileLabel: string;
  photoLabel: string;
  statYears: string;
  statShipped: string;
  statCoffee: string;
  statBugs: string;
  expTag: string;
  expTitle: string;
  projTag: string;
  projTitle: string;
  skillsTag: string;
  skillsTitle: string;
  contactTag: string;
  contactLine: string;
  contactJp: string;
  termPrompt: string;
  termOk: string;
  termAsk: string;
  foot: string;
  ver: string;
};

export const COPY: Record<Lang, CopyBlock> = {
  es: {
    nav: ["INICIO", "SOBRE MI", "EXPERIENCIA", "PROYECTOS", "SKILLS", "CONTACTO"],
    sub: "FRONT-END DEV / ANALISTA EN SISTEMAS",
    jp: "デベロッパー",
    marquee: [
      "NOW LOADING...",
      "C:\\>NICOLAS.EXE",
      "DISPONIBLE PARA TRABAJAR",
      "FRONT-END DEVELOPER",
      "ANALISTA EN SISTEMAS",
      "INGLES B1",
      "PIXEL PERFECT",
    ],
    scroll: "SCROLL ↓",
    aboutTag: "// SOBRE_MI",
    aboutTitle: "QUIEN SOY",
    aboutP1:
      "Soy <strong>Nicolas E. Mine</strong>, desarrollador <em>front-end</em> y <strong>Analista en Sistemas</strong>. Construyo interfaces intuitivas y atractivas con React, TypeScript y Material UI.",
    aboutP2:
      "Mi formacion como Analista me permite entender tanto el lado <em>tecnico</em> como el de <strong>negocio</strong>, brindando soluciones completas que satisfacen al usuario final y los objetivos del equipo.",
    aboutP3:
      "Cuando trabajo en equipo me encanta aportar dando lo mejor de mi y ayudando a mis companeros. Disponible para sumarme a tu proyecto.",
    fileLabel: "ABOUT.TXT",
    photoLabel: "FOTO_ID.JPG",
    statYears: "FREELANCE",
    statShipped: "PROYECTOS",
    statCoffee: "CAFES",
    statBugs: "INGLES",
    expTag: "// EXPERIENCIA",
    expTitle: "TIMELINE",
    projTag: "// PROYECTOS",
    projTitle: "OBRAS",
    skillsTag: "// SKILLS",
    skillsTitle: "STACK.SYS",
    contactTag: "// CONTACTO",
    contactLine: "HABLEMOS",
    contactJp: "コンタクト",
    termPrompt: "ABRIR CANAL DE COMUNICACION...",
    termOk: "CONEXION ESTABLECIDA",
    termAsk: "ESCRIBE TU MENSAJE",
    foot: "HECHO POR NICOLAS E. MINE",
    ver: "VER 1.0.0 // 2025",
  },
  en: {
    nav: ["HOME", "ABOUT", "EXPERIENCE", "WORK", "SKILLS", "CONTACT"],
    sub: "FRONT-END DEV / SYSTEM ANALYST",
    jp: "デベロッパー",
    marquee: [
      "NOW LOADING...",
      "C:\\>NICOLAS.EXE",
      "OPEN TO WORK",
      "FRONT-END DEVELOPER",
      "SYSTEM ANALYST",
      "ENGLISH B1",
      "PIXEL PERFECT",
    ],
    scroll: "SCROLL ↓",
    aboutTag: "// ABOUT_ME",
    aboutTitle: "WHO I AM",
    aboutP1:
      "I'm <strong>Nicolas E. Mine</strong>, a <em>front-end</em> developer and <strong>System Analyst</strong>. I build intuitive, attractive UIs with React, TypeScript and Material UI.",
    aboutP2:
      "My System Analyst background lets me understand both the <em>technical</em> and the <strong>business</strong> side — delivering complete solutions that meet end-user and team goals.",
    aboutP3:
      "When working in a team I love giving my best and helping my teammates. Available to join your project.",
    fileLabel: "ABOUT.TXT",
    photoLabel: "PHOTO_ID.JPG",
    statYears: "FREELANCE",
    statShipped: "SHIPPED",
    statCoffee: "COFFEES",
    statBugs: "ENGLISH",
    expTag: "// EXPERIENCE",
    expTitle: "TIMELINE",
    projTag: "// PROJECTS",
    projTitle: "WORK",
    skillsTag: "// SKILLS",
    skillsTitle: "STACK.SYS",
    contactTag: "// CONTACT",
    contactLine: "LET'S TALK",
    contactJp: "コンタクト",
    termPrompt: "OPENING COMMS CHANNEL...",
    termOk: "CONNECTION ESTABLISHED",
    termAsk: "TYPE YOUR MESSAGE",
    foot: "MADE BY NICOLAS E. MINE",
    ver: "VER 1.0.0 // 2025",
  },
};

export const SECTION_IDS = ["home", "about", "experience", "projects", "skills", "contact"] as const;
