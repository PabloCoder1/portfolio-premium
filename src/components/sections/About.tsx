'use client';

import { motion } from 'framer-motion';
import { Code2, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('About'); 

  return (
    <section id="sobre" className="w-full max-w-6xl px-6 py-24 mx-auto relative">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {t('title')}
        </h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-16">
        {/* Card 1: Full Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8 hover:border-purple-500/30 transition-colors"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
            <Code2 className="h-6 w-6" />
          </div>
          <h3 className="mb-3 text-xl font-bold text-white">
            {t('card1Title')}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            {t('card1Desc')}
          </p>
        </motion.div>

        {/* Card 2: RPA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8 hover:border-pink-500/30 transition-colors"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
            <Settings className="h-6 w-6" />
          </div>
          <h3 className="mb-3 text-xl font-bold text-white">
            {t('card2Title')}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            {t('card2Desc')}
          </p>
        </motion.div>
      </div>

      {/* 🚀 AJUSTE DE ALINHAMENTO: Substituímos Grid por Flex para centralização total numa linha */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mx-auto mt-12 flex max-w-4xl items-center justify-center gap-12 md:gap-16 rounded-2xl border border-gray-800 bg-gray-900/20 p-8"
      >
        <div className="text-center">
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">2+</p>
          <p className="mt-1 text-sm font-medium text-gray-400">
            {t('stat1')} {/* Substituído: Years of Experience */}
          </p>
        </div>
        
        {/* Usando divisores nativos no Flex para alinhamento perfeito */}
        <div className="hidden h-12 w-px bg-gray-800 md:block" />

        <div className="text-center">
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">5+</p>
          <p className="mt-1 text-sm font-medium text-gray-400">
            {t('stat2')} {/* Substituído: Completed Projects */}
          </p>
        </div>

        <div className="hidden h-12 w-px bg-gray-800 md:block" />

        <div className="text-center">
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">100%</p>
          <p className="mt-1 text-sm font-medium text-gray-400">
            {t('stat3')} {/* Substituído: Focus on Solutions */}
          </p>
        </div>
      </motion.div>
    </section>
  );
}