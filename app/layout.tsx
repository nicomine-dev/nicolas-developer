import type { Metadata } from "next";
import { Monoton, VT323, Space_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monoton",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vt323",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

const notoJp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-jp",
});

export const metadata: Metadata = {
  title: "Nicolas — Full-Stack Developer",
  description:
    "Vaporwave portfolio of Nicolas, full-stack developer. Tron grids, retro GUI windows, CRT scanlines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${monoton.variable} ${vt323.variable} ${spaceMono.variable} ${notoJp.variable}`}
    >
      <body className="custom-cursor lang-es">{children}</body>
    </html>
  );
}
