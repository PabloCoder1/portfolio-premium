'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/portfolio';
import { GitBranch, ExternalLink, X } from 'lucide-react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

// Tipagem básica baseada nos seus dados
type Project = (typeof projectsData)[keyof typeof projectsData][number];

export function Projects() {
  const t = useTranslations('Projects');
  const locale = useLocale() as 'pt' | 'en';
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Travar o scroll da página quando o modal estiver aberto (UX Sênior)
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  return (
    <section id="projetos" className="w-full max-w-7xl px-6 py-24 mx-auto relative">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {t('title')}
        </h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      {/* Grid de Cards Menores */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* AQUI ESTÁ A MÁGICA: projectsData[locale].map */}
        {projectsData[locale].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 transition-all hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            {/* Imagem do Card */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-950">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.imageUrl}')` }}
              />              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              {/* Mostra apenas um trecho da descrição no card */}
              <p className="text-sm text-gray-400 line-clamp-2">
                {project.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-semibold text-purple-400">
                {t('viewDetails')} <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL (Popup) */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Overlay escuro de fundo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            />

            {/* Container do Modal centralizado */}
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-800 bg-[#0A0A0A] shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
              >
                {/* Botão Fechar */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-gray-300 backdrop-blur-md transition-colors hover:bg-red-500 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Área da Imagem do Modal (Maior) */}
                <div className="relative h-64 w-full shrink-0 sm:h-80 bg-gray-900">
                  <div className={`absolute inset-0 ${selectedProject.imageUrl}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                </div>

                {/* Conteúdo Rolável do Modal */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                  <h3 className="mb-4 text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>

                  <p className="mb-8 text-base leading-relaxed text-gray-300">
                    {selectedProject.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-500">{t('techUsed')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech) => (
                        <span key={tech} className="rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-purple-400 border border-gray-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row pt-4 border-t border-gray-800">
                    <Link
                      href={selectedProject.githubUrl}
                      target="_blank"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 py-3.5 text-sm font-bold text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
                    >
                      <GitBranch className="h-5 w-5" />
                      {t('repoBtn')}
                    </Link>
                    <Link
                      href={selectedProject.liveUrl}
                      target="_blank"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    >
                      <ExternalLink className="h-5 w-5" />
                      {t('liveBtn')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}