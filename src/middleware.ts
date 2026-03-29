// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Lista de idiomas suportados
  locales: ['pt', 'en'],
  
  // Idioma padrão caso o usuário acesse apenas a raiz "/"
  defaultLocale: 'pt'
});

export const config = {
  // Define em quais rotas o middleware vai atuar
  matcher: ['/', '/(pt|en)/:path*']
};