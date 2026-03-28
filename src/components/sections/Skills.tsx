'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Anima os cards um após o outro
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <section id="habilidades" className="w-full max-w-7xl px-6 py-24 sm:py-32">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-400">
          Arsenal Técnico
        </h2>
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Habilidades & Foco
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Anima quando entra na tela
        viewport={{ once: true, amount: 0.2 }} // Anima apenas uma vez
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group rounded-2xl border border-gray-800 bg-gray-900/50 p-7 shadow-2xl backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-gray-900"
          >
            {/* Efeito Glow no hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-800 px-3.5 py-1.5 text-xs font-medium text-gray-300 border border-gray-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}