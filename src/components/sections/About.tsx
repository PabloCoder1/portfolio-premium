'use client';

import { motion } from 'framer-motion';
import { Code2, Settings } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="w-full max-w-6xl px-6 py-24 mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Sobre Mim
        </h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Card 1 */}
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
          <h3 className="mb-3 text-xl font-bold text-white">Engenharia Full Stack</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Atuação de ponta a ponta no desenvolvimento de sistemas web escaláveis. 
            Especialista no ecossistema JavaScript/TypeScript (React, Next.js, Node.js), 
            criando desde interfaces modernas e otimizadas para o usuário final até 
            APIs RESTful seguras e performáticas.
          </p>
        </motion.div>

        {/* Card 2 */}
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
          <h3 className="mb-3 text-xl font-bold text-white">Automação & RPA</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Forte vivência na redução de tarefas operacionais através de automações inteligentes. 
            Desenvolvimento de bots corporativos, web scraping com Python e fluxos com 
            Power Platform e Copado, focando na otimização de tempo e recursos empresariais.
          </p>
        </motion.div>
      </div>

      {/* Métricas / Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-8 md:gap-16 rounded-2xl border border-gray-800 bg-gray-900/20 p-6"
      >
        <div className="text-center">
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">4+</p>
          <p className="mt-1 text-sm font-medium text-gray-400">Anos de Experiência</p>
        </div>
        <div className="hidden h-12 w-px bg-gray-800 md:block" />
        <div className="text-center">
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">10+</p>
          <p className="mt-1 text-sm font-medium text-gray-400">Projetos Concluídos</p>
        </div>
        <div className="hidden h-12 w-px bg-gray-800 md:block" />
        <div className="text-center">
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">100%</p>
          <p className="mt-1 text-sm font-medium text-gray-400">Foco em Solução</p>
        </div>
      </motion.div>
    </section>
  );
}