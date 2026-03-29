'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/portfolio';
import { useTranslations, useLocale } from 'next-intl';

export function Skills() {
  const t = useTranslations('Skills'); // Hook apontando para o bloco Skills
  const locale = useLocale() as 'pt' | 'en';

  return (
    <section id="habilidades" className="w-full max-w-6xl px-6 py-24 mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {t('title')} {/* Substituído: Minhas Habilidades */}
        </h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* AQUI ESTÁ A MÁGICA: skillsData[locale].map */}
        {skillsData[locale].map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8 hover:border-purple-500/20 transition-colors"
          >
            {/* Cabeçalho do Card */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {category.category}
              </h3>
            </div>

            {/* Lista de Barras de Progresso */}
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-purple-400">{skill.level}%</span>
                  </div>
                  {/* Trilha de fundo da barra */}
                  <div className="h-2 w-full rounded-full bg-gray-800 overflow-hidden">
                    {/* Preenchimento animado da barra */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1), ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}