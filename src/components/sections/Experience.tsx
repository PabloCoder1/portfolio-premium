'use client';

import { motion } from 'framer-motion';
import { experiencesData } from '@/data/portfolio';
import { CalendarDays, BriefcaseBusiness } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export function Experience() {
  const t = useTranslations('Experience'); 
  const locale = useLocale() as 'pt' | 'en';

  return (
    <section id="experiencia" className="w-full max-w-5xl px-6 py-24 sm:py-32 mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-400">
          {t('badge')}
        </h2>
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {t('title')}
        </p>
      </div>

      {/* 🚀 AQUI ESTÁ A CORREÇÃO: Adicionado o before:content-[''] para desenhar a linha! */}
      <div className="relative space-y-12 before:absolute before:inset-y-0 before:left-4 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:to-blue-500 before:content-[''] sm:before:left-1/2 sm:before:-translate-x-1/2">
        {/* Lendo a experiência baseada no idioma selecionado */}
        {experiencesData[locale].map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col items-start gap-6 sm:flex-row ${
                isEven ? 'sm:justify-start' : 'sm:justify-end'
              }`}
            >
              {/* Círculo na Timeline */}
              <div className="absolute left-4 top-1 flex h-0.5 w-0.5 items-center justify-center rounded-full bg-purple-500 shadow-[0_0_15px_3px_rgba(139,92,246,0.5)] sm:left-1/2 sm:-translate-x-1/2 sm:top-5">
                <div className="h-4 w-4 rounded-full bg-[#0A0A0A] border-2 border-purple-500"></div>
              </div>

              {/* Card de Conteúdo */}
              <div className={`w-full pl-12 sm:w-[45%] sm:pl-0 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                <div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 backdrop-blur-sm transition-colors hover:border-gray-700 hover:bg-gray-900/60">
                  
                  <div className={`flex flex-col gap-1 mb-4 ${isEven ? 'sm:items-end' : 'sm:items-start'}`}>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-purple-300 font-semibold">
                       <BriefcaseBusiness className="h-4 w-4 text-purple-400" />
                       {exp.company}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                      <CalendarDays className="h-4 w-4 text-gray-500" />
                      {exp.time}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-gray-800/80 px-2.5 py-1 text-xs font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}