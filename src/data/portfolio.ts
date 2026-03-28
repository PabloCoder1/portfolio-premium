// src/data/portfolio.ts
import { BrainCircuit, CodeXml, Database, Zap, Bot, Target } from 'lucide-react';

export const skillsData = [
  {
    category: 'Frontend',
    icon: CodeXml,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'UI/UX Moderna'],
  },
  {
    category: 'Backend & Core',
    icon: Database,
    skills: ['Node.js', 'API RESTful', 'Python', 'Clean Code', 'Arquitetura de Sistemas'],
  },
  {
    category: 'Automação & Processos',
    icon: Bot,
    skills: ['RPA', 'Web Scraping', 'Bots de Chat', 'Workflow Automation', 'Análise de Sistemas'],
  },
  {
    category: 'Ferramentas & Metodologias',
    icon: Target,
    skills: ['Jira', 'Copado (CI/CD)', 'Git/GitHub', 'Agile/Scrum', 'DevOps Básico'],
  },
];

export const experiencesData = [
  {
    role: 'Engenheiro de Software Sênior & Analista de RPA',
    company: 'Sua Empresa Atual / Cliente',
    time: 'Jan 2022 - Presente',
    description: 'Liderança técnica no desenvolvimento de aplicações full stack escaláveis utilizando React e Node.js. Especialista na criação de fluxos de RPA complexos e bots de web scraping para otimização de processos de negócios. Responsável pela gestão de deploys e CI/CD utilizando Copado e Jira.',
    techs: ['Next.js', 'Node.js', 'Python', 'RPA', 'Copado', 'CI/CD'],
  },
  {
    role: 'Desenvolvedor Full Stack Pleno',
    company: 'Empresa Anterior',
    time: 'Jun 2020 - Dez 2021',
    description: 'Desenvolvimento de features ponta-a-ponta para SaaS. Integração de APIs de terceiros, otimização de performance no frontend e refatoração de código legado para garantir escalabilidade.',
    techs: ['React', 'API REST', 'JavaScript', 'SQL', 'Git'],
  },
  // Adicione mais se precisar
];

export const projectsData = [
  {
    title: 'DescontoMEN-Bot | Automação e Monitoramento',
    description: 'Um bot robusto para o Telegram focado no nicho masculino (18-35 anos) que monitora, filtra e posta ofertas de moda e perfumaria do Mercado Livre em tempo real. Desenvolvido com foco em alta disponibilidade.',
    techs: ['Python', 'Flask', 'Telegram API', 'Render'],
    githubUrl: '#',
    liveUrl: '#',
    // Usando um gradiente legal como placeholder de imagem
    imageUrl: 'bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900', 
  },
  {
    title: 'Sistema de RPA & Integração de IA',
    description: 'Arquitetura de fluxos de automação complexos para redução de tarefas operacionais. Integração de chatbots corporativos com modelos de Inteligência Artificial interna para triagem e tomada de decisão.',
    techs: ['Python', 'Power Platform', 'RPA', 'IA API'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900',
  },
  {
    title: 'Portfólio Sênior Full Stack',
    description: 'Desenvolvimento deste próprio portfólio utilizando as tecnologias mais modernas do ecossistema React. Foco extremo em performance, SEO, acessibilidade e design premium com animações fluidas.',
    techs: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'bg-gradient-to-br from-gray-800 via-gray-900 to-black',
  }
];