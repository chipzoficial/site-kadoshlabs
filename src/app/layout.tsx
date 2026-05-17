import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "KadoshLabs | Sistemas, SaaS e Automações",
  description:
    "A KadoshLabs cria sistemas web, soluções SaaS, automações e integrações para empresas que querem operar melhor.",
  openGraph: {
    title: "KadoshLabs | Sistemas, SaaS e Automações",
    description:
      "A KadoshLabs cria sistemas web, soluções SaaS, automações e integrações para empresas que querem operar melhor.",
    url: "https://kadoshlabs.app.br",
    siteName: "KadoshLabs",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${spaceMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
