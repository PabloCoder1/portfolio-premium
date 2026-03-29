import { BrainCircuit, CodeXml, Database, Zap, Bot, Target } from 'lucide-react';

export const skillsData = {
  pt: [
    {
      category: 'Desenvolvimento Frontend', icon: CodeXml,
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'JavaScript / TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'UI/UX Moderna', level: 80 },
      ],
    },
    {
      category: 'Backend & Database', icon: Database,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'APIs RESTful', level: 90 },
        { name: 'SQL / Bancos Relacionais', level: 80 },
      ],
    },
    {
      category: 'Automação & Processos', icon: Bot,
      skills: [
        { name: 'RPA / Web Scraping', level: 95 },
        { name: 'Power Platform', level: 85 },
        { name: 'Criação de Bots', level: 90 },
        { name: 'Análise de Sistemas', level: 88 },
      ],
    },
    {
      category: 'Outras Ferramentas', icon: Target,
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Copado (CI/CD)', level: 80 },
        { name: 'Jira / Scrum', level: 85 },
        { name: 'Framer Motion', level: 75 },
      ],
    },
  ],
  en: [
    {
      category: 'Frontend Development', icon: CodeXml,
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'JavaScript / TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Modern UI/UX', level: 80 },
      ],
    },
    {
      category: 'Backend & Database', icon: Database,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'SQL / Relational Databases', level: 80 },
      ],
    },
    {
      category: 'Automation & Processes', icon: Bot,
      skills: [
        { name: 'RPA / Web Scraping', level: 95 },
        { name: 'Power Platform', level: 85 },
        { name: 'Bot Creation', level: 90 },
        { name: 'Systems Analysis', level: 88 },
      ],
    },
    {
      category: 'Other Tools', icon: Target,
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Copado (CI/CD)', level: 80 },
        { name: 'Jira / Scrum', level: 85 },
        { name: 'Framer Motion', level: 75 },
      ],
    },
  ]
};

export const experiencesData = {
  pt: [
    {
      role: 'Analista de Sistemas & Especialista em Automação RPA',
      company: 'Vivo (Telefônica Brasil) / Projetos Autônomos',
      time: 'Fev 2024 - Nov 2025',
      description: 'Atuação estratégica no desenvolvimento de ecossistemas de automação e portais corporativos. Responsável pela criação de agentes de IA independentes utilizando AgentsAI (Office 365) e implementação de bots de RPA com Python para extração de dados e notificações em tempo real (WhatsApp/Telegram). Liderança técnica na migração de arquiteturas front-end de Angular para React e estruturação de governança no Jira, automatizando fluxos de trabalho e gestão de demandas com IA. Especialista em Power Platform, desenvolvendo soluções de ponta a ponta para emissão automatizada de certificados e comunicação personalizada.',
      techs: ['Python', 'Power Platform', 'React', 'JavaScript', 'RPA', 'Jira Service Management', 'AgentsAI'],
    },
    {
      role: 'Analista de E-commerce & Processos (Líder de Integração)',
      company: 'Musical Store',
      time: 'Out 2023 - Fev 2024',
      description: 'Responsável pela orquestração do ecossistema de vendas digitais via Tiny ERP (Olist), realizando a integração multicanal com Mercado Livre, Mercado Shops, Amazon e Shopee. Implementei a automação do fluxo de entrada de Notas Fiscais, eliminando processos manuais e reduzindo o tempo de processamento do time. Atuei na liderança técnica do setor, sendo responsável pelo treinamento de novos colaboradores, elaboração de documentação técnica (playbooks) e vídeo-aulas de onboarding, garantindo a continuidade da agilidade operacional após a minha transição para a Vivo.',
      techs: ['Tiny ERP (Olist)', 'Marketplace Integration', 'Workflow Optimization', 'Technical Documentation', 'E-commerce Operations'],
    }
  ],
  en: [
    {
      role: 'Systems Analyst & RPA Automation Specialist',
      company: 'Vivo (Telefônica Brasil) / Freelance Projects',
      time: 'Feb 2024 - Nov 2025',
      description: 'Strategic role in the development of automation ecosystems and corporate portals. Responsible for creating independent AI agents using AgentsAI (Office 365) and implementing RPA bots with Python for data extraction and real-time notifications (WhatsApp/Telegram). Technical leadership in migrating front-end architectures from Angular to React and structuring governance in Jira, automating workflows and managing demands with AI. Specialist in Power Platform, developing end- to - end solutions for automated certificate issuance and personalized communication.',
      techs: ['Python, Power Platform', 'React', 'JavaScript', 'RPA', 'Jira Service Management', 'AgentsAI']

    },
    {
      role: 'E-commerce & Process Analyst (Integration Leader)',
      company: 'Musical Store',
      time: 'Oct 2023 - Feb 2024',
      description: 'Responsible for orchestrating the digital sales ecosystem via Tiny ERP (Olist), performing multichannel integration with Mercado Livre, Mercado Shops, Amazon, and Shopee. I implemented the automation of the invoice entry flow, eliminating manual processes and reducing the teams processing time.I worked in the technical leadership of the sector, being responsible for training new employees, preparing technical documentation(playbooks) and onboarding video tutorials, ensuring the continuity of operational agility after my transition to Vivo.',
      techs: ['Tiny ERP (Olist)', 'Marketplace Integration', 'Workflow Optimization', 'Technical Documentation', 'E-commerce Operations'],
    }
  ]
};

export const projectsData = {
  pt: [
    {
      title: 'DescontoMEN-Bot | RPA & Monitoramento de Afiliados',
      description: 'Sistema avançado de RPA (Robotic Process Automation) desenvolvido para o nicho de moda e perfumaria masculina. O robô monitora o Mercado Livre, aplica algoritmos de limpeza de dados para contornar anúncios (Click1 Bypass) e possui trava de segurança financeira (Anti-Parcela). Utiliza automação de navegador para operar no painel restrito de afiliados, gerando links nativos (meli.la), e os publica automaticamente no WhatsApp via Evolution API.',
      techs: ['Python', 'Selenium (RPA)', 'BeautifulSoup4', 'Evolution API', 'Flask'],
      githubUrl: 'https://github.com/PabloCoder1/DescontoMEN-Bot',
      liveUrl: 'https://chat.whatsapp.com/HaItSqbexJw55Po8UNovEn',
      imageUrl: '/print-bot.png',
    },
    // VÍRGULA AQUI, E ADICIONE O SEGUNDO PROJETO:
    {
      title: 'Portfólio Premium | Landing Page Multilíngue',
      description: 'Portfólio de engenharia de software de alto desempenho com arquitetura Serverless. Construído com Next.js 16 (App Router), possui internacionalização completa (i18n) sem perda de SEO, animações avançadas para engajamento do usuário e formulário de contato integrado com API própria.',
      techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'next-intl'],
      githubUrl: 'https://github.com/PabloCoder1/portfolio-premium', // Atualize se o nome do repo for diferente
      liveUrl: 'https://portfolio-premium-six.vercel.app/', // Coloque o link da Vercel depois
      imageUrl: '/print-portfolio.png', // Mesma cor do PT
    },
    // TERCEIRO PROJETO:
    {
      title: 'Automação de Processos com Copado',
      description: 'Pipeline de CI/CD estruturada para garantir deploys seguros e automatizados...',
      techs: ['Copado', 'CI/CD', 'RPA'],
      githubUrl: '#',
      liveUrl: '#',
      imageUrl: 'bg-gradient-to-br from-gray-800 to-gray-900',
    },
    {
      title: 'Thuany Lima: Landing Page de Alta Conversão para Estética',
      description: 'Landing page premium, responsiva e otimizada para SEO local, projetada para gerar leads e agendamentos via WhatsApp para serviços avançados de remoção de estrias em Santos, SP.',
      techs: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Git'],
      githubUrl: 'https://github.com/PabloCoder1/tl-estetica-landing',
      liveUrl: 'https://tl-estetica-landing.vercel.app/',
      imageUrl: '/thuany-lima-lp.jpg', // Esta é a referência para a imagem gerada
    }
  ],
  en: [
    {
      title: 'DiscountMEN-Bot | RPA & Affiliate Monitoring',
      description: 'High-performance software engineering portfolio with Serverless architecture. Built with Next.js 16 (App Router), it features full internationalization (i18n) without SEO loss, advanced animations for user engagement, and a contact form integrated with its own API.',
      techs: ['Python', 'Selenium (RPA)', 'BeautifulSoup4', 'Evolution API', 'Flask'],
      githubUrl: 'https://github.com/PabloCoder1/DescontoMEN-Bot',
      liveUrl: 'https://chat.whatsapp.com/HaItSqbexJw55Po8UNovEn',
      imageUrl: '/print-bot.png',
    },
    // VÍRGULA AQUI, E ADICIONE O SEGUNDO PROJETO EM INGLÊS:
    {
      title: 'Premium Portfolio | Multilingual Landing Page',
      description: 'High-performance software engineering portfolio with Serverless architecture. Built with Next.js 16 (App Router), it features full internationalization (i18n) without SEO loss, advanced animations for user engagement, and a contact form integrated with its own API.',
      techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'next-intl'],
      githubUrl: 'https://github.com/PabloCoder1/portfolio-premium', // Atualize se o nome do repo for diferente
      liveUrl: 'https://portfolio-premium-six.vercel.app/', // Coloque o link da Vercel depois
      imageUrl: '/print-portfolio.png', // Mesma cor do PT
    },
    // TERCEIRO PROJETO EM INGLÊS:
    {
      title: 'Process Automation with Copado',
      description: 'Structured CI/CD pipeline to ensure safe and automated deployments...',
      techs: ['Copado', 'CI/CD', 'RPA'],
      githubUrl: '#',
      liveUrl: '#',
      imageUrl: 'bg-gradient-to-br from-gray-800 to-gray-900',
    },
    {
      title: 'Thuany Lima: High-Conversion Aesthetic Landing Page',
      description: 'Premium, responsive, and local SEO-optimized landing page, designed to generate leads and WhatsApp appointments for advanced stretch mark removal services in Santos, SP.',
      techs: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Git'],
      githubUrl: '#',
      liveUrl: 'https://tl-estetica-landing.vercel.app/',
      imageUrl: '/thuany-lima-lp.jpg',
    }
  ]

};
// Adicione este import lá no topo junto com os outros, se precisar usar depois:
// import { GraduationCap, BookOpen } from 'lucide-react';

export const educationData = {
  pt: [
    {
      institution: 'Universidade Santa Cecília (UNISANTA)',
      course: 'Sistema de Informação',
      time: '2022 - 2025',
      description: 'Formação acadêmica com foco em engenharia de software, arquitetura de sistemas e automação. Base sólida em lógica de programação e desenvolvimento de soluções escaláveis.',
    },
    {
      institution: 'Alura',
      course: 'Formação Governança de TI',
      time: 'Julho 2024',
      description: 'Especialização em boas práticas de mercado, alinhamento estratégico de TI com objetivos de negócio, gestão de riscos e compliance tecnológico.',
    },
    {
      institution: 'Alura',
      course: 'Comunicação Corporativa e Apresentações de Impacto',
      time: 'Junho 2024',
      description: 'Desenvolvimento de soft skills para comunicação executiva e oratória corporativa, com foco em apresentações técnicas de alto impacto.',
    },
    {
      institution: 'Alura',
      course: 'Formação COBIT 2019',
      time: 'Abril 2024',
      description: 'Estudo aprofundado do framework COBIT 2019, focando na governança corporativa e na gestão eficiente de ativos de informação e tecnologia.',
    },
    {
      institution: 'Escola Estadual Barnabé',
      course: 'Ensino Médio',
      time: '2019 - 2021',
      description: 'Conclusão da formação básica com excelente desempenho acadêmico.',
    }
  ],
  en: [
    {
      institution: 'Universidade Santa Cecília (UNISANTA)',
      course: 'Information System',
      time: '2022 - 2025',
      description: 'Academic background focused on software engineering, systems architecture, and automation. Solid foundation in programming logic and scalable solution development.',
    },
    {
      institution: 'Alura',
      course: 'IT Governance Training',
      time: 'July 2024',
      description: 'Specialization in market best practices, IT strategic alignment with business goals, risk management, and technological compliance.',
    },
    {
      institution: 'Alura',
      course: 'Corporate Communication & Impactful Presentations',
      time: 'June 2024',
      description: 'Development of soft skills for executive communication and corporate speaking, focusing on high-impact technical presentations.',
    },
    {
      institution: 'Alura',
      course: 'COBIT 2019 Training',
      time: 'April 2024',
      description: 'In-depth study of the COBIT 2019 framework, focusing on corporate governance and efficient management of information and technology assets.',
    },
    {
      institution: 'Escola Estadual Barnabé',
      course: 'High School',
      time: '2019 - 2021',
      description: 'Conclusion of basic education with excellent academic performance.',
    }
  ]
};