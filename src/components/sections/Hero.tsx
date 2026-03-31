'use client';

import { motion } from 'framer-motion';
import { Download, Terminal } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    // 🚀 AJUSTE DE CENTRALIZAÇÃO: Mudamos paddings para pt-20 pb-12 para levantar o conteúdo
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 pb-12 mx-auto">
      {/* Círculo decorativo de fundo animado */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0,transparent_60%)]" />

      <div className="z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">

        {/* Coluna da Esquerda: Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-[2px] w-8 bg-purple-500"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-purple-400">
              {t('badge')} {/* Substituído: SOLUTIONS ARCHITECT & RPA SPECIALIST */}
            </span>
          </div>

          <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl text-white">
            {t('greeting')} <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Pablo Lima
            </span>
          </h1>

          <p className="mb-8 max-w-lg text-lg text-gray-400">
            {t('description')} {/* Substituído: Descrição mais limpa e focada */}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projetos"
              className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              {t('btnProjects')} {/* Substituído: View Projects */}
              <Terminal className="h-4 w-4" />
            </Link>
            <a
              href="/Pablo Lima dos santos.pdf" // Mude para o link real do seu CV
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-500/30 bg-gray-900/50 px-8 py-3.5 text-sm font-semibold text-gray-300 transition-all hover:border-purple-500 hover:bg-gray-800 hover:text-white"
            >
              <Download className="h-4 w-4" />
              {t('btnCV')} {/* Substituído: Download Resume */}
            </a>
          </div>
        </motion.div>

        {/* Coluna da Direita: Foto de Perfil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative h-72 w-72 sm:h-96 sm:w-96">
            {/* Círculo decorativo de fundo animado */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 opacity-20 blur-3xl animate-pulse" />

            {/* Borda da foto */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/50 p-2">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-gray-900">
                <Image
                  src="/img_0037.png" // Mantenha exatamente como está na pasta public
                  alt="Foto de Pablo Lima"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Elementos flutuantes */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -left-6 top-10 rounded-xl border border-gray-800 bg-gray-900/80 p-3 backdrop-blur-sm"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -right-4 bottom-20 rounded-xl border border-gray-800 bg-gray-900/80 p-3 backdrop-blur-sm"
            >
              <span className="text-2xl">💻</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}