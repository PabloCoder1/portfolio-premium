'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        setErrorMessage('');
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData?.error || 'Erro ao enviar a mensagem.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Erro de conexão. Tente novamente.');
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="w-full max-w-3xl px-6 py-24 sm:py-32 mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-400">
          Vamos Conversar
        </h2>
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Entre em Contato
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 shadow-2xl backdrop-blur-sm"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-400">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="rounded-lg border border-gray-800 bg-gray-950 px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="rounded-lg border border-gray-800 bg-gray-950 px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-400">Mensagem</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border border-gray-800 bg-gray-950 px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
              placeholder="Como posso te ajudar?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-4 font-semibold text-white transition-all hover:bg-purple-500 hover:ring-2 hover:ring-purple-500/50 hover:ring-offset-2 hover:ring-offset-[#0A0A0A] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <Send className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                Enviar Mensagem
              </>
            )}
          </button>

          {/* Feedback Visual */}
          {status === 'success' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/20">
              <CheckCircle className="h-5 w-5" />
              <span>Mensagem enviada com sucesso! Retornarei em breve.</span>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20">
              <XCircle className="h-5 w-5" />
              <span>{errorMessage || 'Ocorreu um erro. Tente novamente ou me chame no LinkedIn.'}</span>
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
}