'use client';

import { motion } from 'framer-motion';
import { projectsData } from '@/data/portfolio';
import { GitBranch, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Projects() {
  return (
    <section id="projetos" className="w-full max-w-7xl px-6 py-24 sm:py-32">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-400">
          Projetos em Destaque
        </h2>
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Construções Recentes
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]"
          >
            {/* Imagem Otimizada com Next/Image */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-900">
              {/* Fallback de cor caso a imagem não exista (pode remover depois) */}
              <div className={`absolute inset-0 ${project.imageUrl}`} />
              
              {/* Descomente a tag abaixo quando tiver as imagens reais na pasta public */}
              {/* <Image 
                src={`/${project.imageName}`} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              /> */}
            </div>
            
            {/* Gradiente de overlay na imagem para suavizar a transição */}
            <div className="absolute top-0 h-48 w-full bg-gradient-to-b from-transparent to-gray-900/90 z-0" />

            <div className="flex flex-1 flex-col p-6 relative z-10">
              <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="mb-6 flex-1 text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-300 border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 border-t border-gray-800 pt-4">
                <Link
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                  <GitBranch className="h-4 w-4" />
                  Código
                </Link>
                <Link
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-purple-400"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Preview
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}