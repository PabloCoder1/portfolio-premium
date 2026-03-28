'use client';

import { motion } from 'framer-motion';
import { GitBranch, Link2, Mail, ChevronDown, Terminal } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Efeito de brilho no fundo (Glow) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0,transparent_50%)]" />

      <div className="z-10 flex w-full max-w-4xl flex-col items-center text-center">
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
          </span>
          #OpenToWork
        </motion.div>

        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl">
            Olá, eu sou <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Pablo Lima
            </span>
          </h1>
        </motion.div>

        {/* Subtítulo / Resumo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 sm:text-xl"
        >
          Engenheiro de Software Full Stack & Analista de Automação (RPA). Especialista em construir sistemas escaláveis, interfaces modernas e fluxos inteligentes.
        </motion.p>

        {/* Botões de Ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="#projetos"
            className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-purple-500 hover:ring-2 hover:ring-purple-500/50 hover:ring-offset-2 hover:ring-offset-[#0A0A0A]"
          >
            <Terminal className="h-4 w-4" />
            Ver Projetos
          </Link>
          <Link
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-800 bg-gray-900/50 px-8 py-3.5 text-sm font-semibold text-gray-300 transition-all hover:border-gray-700 hover:bg-gray-800 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Entrar em Contato
          </Link>
        </motion.div>

        {/* Redes Sociais */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 flex gap-6 text-gray-500"
        >
          <Link href="#" className="hover:text-purple-400 transition-colors"><GitBranch className="h-6 w-6" /></Link>
          <Link href="#" className="hover:text-blue-500 transition-colors"><Link2 className="h-6 w-6" /></Link>
        </motion.div>
      </div>

      {/* Ícone de Scroll Down animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 animate-bounce text-gray-600"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}