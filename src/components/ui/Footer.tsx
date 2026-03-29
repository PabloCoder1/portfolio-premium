'use client';

import { ExternalLink, GitBranch, Mail } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer'); // Hook apontando para o bloco Footer
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-800 bg-[#0A0A0A] py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-6">
        
        {/* Ícones Sociais */}
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/PabloCoder1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full bg-purple-500/10 p-3 text-purple-400 transition-all hover:bg-purple-500 hover:text-white hover:scale-110"
          >
            <GitBranch className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pablo-lima-aaba02269/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full bg-purple-500/10 p-3 text-purple-400 transition-all hover:bg-purple-500 hover:text-white hover:scale-110"
          >
            <ExternalLink className="h-5 w-5" />
          </Link>
          <Link
            href="#contato"
            aria-label="Contato"
            className="rounded-full bg-purple-500/10 p-3 text-purple-400 transition-all hover:bg-purple-500 hover:text-white hover:scale-110"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center">
          © {currentYear} Pablo Lima. {t('rights')}
        </p>
      </div>
    </footer>
  );
}