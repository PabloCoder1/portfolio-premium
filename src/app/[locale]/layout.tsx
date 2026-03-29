import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Volta uma pasta para achar o CSS global
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pablo Lima | Engenheiro de Software Sênior",
  description: "Portfólio de Pablo Lima. Especialista em desenvolvimento Full Stack, sistemas escaláveis e automação de processos (RPA).",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Busca o JSON de idiomas no servidor
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-[#0A0A0A] font-sans antialiased text-gray-200")}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          
          {/* Adicionamos pt-24 para o conteúdo não ficar escondido atrás da Navbar fixa */}
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