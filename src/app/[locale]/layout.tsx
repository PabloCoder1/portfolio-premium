import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { NextIntlClientProvider } from 'next-intl';

// 🚀 IMPORTAÇÃO ESTÁTICA: O Turbopack não vai mais engasgar na transição
import ptMessages from '../../messages/pt.json';
import enMessages from '../../messages/en.json';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pablo Lima | Engenheiro de Software Sênior",
  description: "Portfólio de Pablo Lima. Especialista em desenvolvimento Full Stack e RPA.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  // No Next 16, os parâmetros de rota dinâmica são Promises
  params: Promise<{ locale: string }>;
}>) {
  
  // Aguardamos a Promise resolver (Obrigatório no Next.js 15+)
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // Seleciona o JSON correto instantaneamente
  const messages = locale === 'en' ? enMessages : ptMessages;

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-[#0A0A0A] font-sans antialiased text-gray-200")}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Passamos o locale via prop para a Navbar não depender de hooks que perdem contexto */}
          <Navbar locale={locale} />
          
          <main className="flex min-h-screen flex-col pt-24">
            {children}
          </main>
          
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}