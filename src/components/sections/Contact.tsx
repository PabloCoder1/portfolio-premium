'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Mail, MessageCircle, GitBranch } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="w-full max-w-6xl px-6 py-24 mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Vamos criar algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">incrível</span> juntos!
        </h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-start">
        
        {/* Coluna da Esquerda: Cards de Contato Rápido */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <a href="mailto:seuemail@gmail.com" className="group flex items-center gap-6 rounded-2xl border border-gray-800 bg-gray-900/40 p-6 transition-all hover:border-purple-500/30 hover:bg-gray-900/80">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">Email</h3>
              <p className="text-sm text-gray-400">seuemail@gmail.com</p>
            </div>
          </a>

          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="group flex items-center gap-6 rounded-2xl border border-gray-800 bg-gray-900/40 p-6 transition-all hover:border-green-500/30 hover:bg-gray-900/80">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">WhatsApp</h3>
              <p className="text-sm text-gray-400">Ideal para networking rápido ou direcionar para o seu grupo focado em ofertas.</p>
            </div>
          </a>

          <a href="https://github.com/PabloCoder1" target="_blank" rel="noreferrer" className="group flex items-center gap-6 rounded-2xl border border-gray-800 bg-gray-900/40 p-6 transition-all hover:border-gray-500/50 hover:bg-gray-900/80">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-lg border border-gray-600">
              <GitBranch className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors">GitHub</h3>
              <p className="text-sm text-gray-400">github.com/PabloCoder1</p>
            </div>
          </a>
        </motion.div>

        {/* Coluna da Direita: Formulário Premium */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl border border-gray-800 bg-gray-900/30 p-8 shadow-2xl backdrop-blur-md"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-white">Nome *</label>
              <input
                type="text" id="name" name="name" required
                className="rounded-xl border border-gray-800 bg-[#0A0A0A] px-4 py-4 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-white">Email *</label>
              <input
                type="email" id="email" name="email" required
                className="rounded-xl border border-gray-800 bg-[#0A0A0A] px-4 py-4 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-white">Mensagem *</label>
              <textarea
                id="message" name="message" required rows={4}
                className="resize-none rounded-xl border border-gray-800 bg-[#0A0A0A] px-4 py-4 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>

            <button
              type="submit" disabled={isSubmitting}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 py-4 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Enviar'}
            </button>

            {status === 'success' && (
              <p className="text-center text-sm font-medium text-green-400 mt-2">Mensagem enviada com sucesso!</p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm font-medium text-red-400 mt-2">Erro ao enviar. Tente novamente.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}