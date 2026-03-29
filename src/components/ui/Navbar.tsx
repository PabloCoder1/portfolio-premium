'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('Navbar');
  const router = useRouter();
  const pathname = usePathname();
  const [isLangOpen, setIsLangOpen] = useState(false);

  // 🚀 Adicionamos Experience e Education na lista de links
  const navLinks = [
    { name: t('home'), href: `/${locale}#` },
    { name: t('about'), href: `/${locale}#sobre` },
    { name: t('skills'), href: `/${locale}#habilidades` },
    { name: t('projects'), href: `/${locale}#projetos` },
    { name: t('experience'), href: `/${locale}#experiencia` },
    { name: t('education'), href: `/${locale}#formacao` },
    { name: t('contact'), href: `/${locale}#contato` },
  ];

  const handleLanguageChange = (newLocale: string) => {
    if (locale === newLocale) return; 
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setIsLangOpen(false);
  };

  const currentLangName = locale === 'pt' ? 'PT' : 'EN';
  const currentLangFlag = locale === 'pt' ? 'fi-br' : 'fi-us';

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-[#0A0A0A]/80 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}#`} className="flex items-center gap-2 text-xl font-bold text-white">
          <span className="text-purple-400">{'{'}</span>
          pablo lima
          <span className="text-purple-400">{'}'}</span>
        </Link>

        <div className="flex items-center gap-8">
          {/* Links para Desktop */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-500 transition-all group-hover:w-full group-hover:shadow-[0_0_10px_2px_rgba(139,92,246,0.3)]"></span>
              </a>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-1.5 text-sm font-medium text-gray-300 transition-all hover:border-purple-500/50 hover:bg-gray-900/70"
            >
              <Globe className="h-4 w-4 text-purple-400" />
              <span className={`fi ${currentLangFlag} rounded-sm`}></span>
              {currentLangName}
              <ChevronDown className={cn("h-4 w-4 transition-transform", isLangOpen ? "rotate-180" : "")} />
            </button>
            
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-32 origin-top-right rounded-lg border border-gray-800 bg-gray-950 p-2 shadow-xl"
              >
                <button onClick={() => handleLanguageChange('pt')} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white">
                  <span className="fi fi-br rounded-sm"></span>
                  Português (PT)
                </button>
                <button onClick={() => handleLanguageChange('en')} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white">
                  <span className="fi fi-us rounded-sm"></span>
                  English (EN)
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}