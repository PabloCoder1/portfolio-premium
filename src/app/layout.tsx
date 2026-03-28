import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Vamos usar a fonte Inter, limpa e moderna
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pablo Lima | Engenheiro de Software Full Stack & RPA",
  description: "Portfólio de Pablo Lima. Especialista em React, Node.js, arquitetura escalável, automação de processos (RPA) e desenvolvimento de bots.",
  keywords: ["Engenheiro de Software", "Full Stack", "React", "Node.js", "RPA", "Automação", "Web Scraping", "Python", "Copado"],
  openGraph: {
    title: "Pablo Lima | Engenheiro de Software",
    description: "Construindo sistemas escaláveis e automações inteligentes.",
    url: "https://seusite.com.br", // Substitua pelo seu domínio depois
    siteName: "Pablo Lima Portfolio",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-[#0A0A0A] font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}