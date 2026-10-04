import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PRESENTATION =====
  presentation: {
    text: {
      en: "Second-year engineering student at Polytech Nantes, seeking a 4-month internship for this summer.",
      fr: "Etudiant en deuxième année de cycle ingénieur à Polytech Nantes, je cherche un stage de 4 mois pour cet été.",
    },
  },

  // ===== PERSONAL INFO =====
  personal: {
    name: 'Souakri Lounès',
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: '/images/photo.jpg',
    photoBackEmoji: '👨‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Engineering Student',
      fr: 'Etudiant Ingénieur',
    },
    subtitle: {
      en: 'Computer Science',
      fr: 'Informatique',
    },
    location: 'Nantes, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Souakri Lounès — Engineering Student',
    description: 'Interactive resume of Souakri Lounès, Engineering Student specializing in Computer Science.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'Xiizu', href: 'https://github.com/Xiizu' },
    { type: 'linkedin', label: 'Souakri Lounès', href: 'https://linkedin.com/in/souakri' },
    { type: 'email', label: 'lounes.skr@gmail.com' },
    { type: 'phone', label: '+33 7 83 17 86 02' },
    { type: 'location', label: 'Nantes, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'TOEIC 925' },
      ],
    },
    {
      title: { en: 'Web Development', fr: 'Développement Web' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'PHP' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Node.js' },
      ],
    },
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'badges',
      items: [
        { name: 'Ada' },
        { name: 'Python' },
        { name: 'Java' },
        { name: 'C/C++' },
        { name: 'kotlin' },
        { name: 'R' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'PostgreSQL' },
        { name: 'MariaDB' },
        { name: 'SQLite' },
        { name: 'Oracle' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Git' },
        { name: 'Linux' },
      ],
    },
/*     {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, TDD, Code Review, CI/CD', fr: 'Agile/Scrum, TDD, Code Review, CI/CD' } },
      ],
    }, */
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'sowebio-2',
      company: { en: 'Sowebio', fr: 'Sowebio' },
      link: 'https://www.soweb.io/',
      location: 'Saint Pierre d\'Oléron, France',
      role: { en: 'Développeur Ada', fr: 'Développeur Ada' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '2026 summer', fr: 'été 2026' },
      description: {
        en: 'Created an automation tool for billing via the Dolibarr API.\nDeveloped a remote server monitoring tool via SSH.',
        fr: 'Création d’un outil d’automatisation à la facturation via l’API de Dolibarr.\nCréation d’un outil de monitoring de serveur distant via ssh.',
      },
      techs: ['Ada'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Sowebio is a communication agency based on the island of Oléron, specializing in website creation, marketing, and communication.',
          fr: 'Sowebio est une agence de communication basée sur l\'île d\'Oléron, spécialisée dans la création de sites web, le marketing et la communication. L\'entreprise à également une partie dédiée à la création de logiciels et à nottament un projet de framework Ada nommé LibreFrame.',
        },
        tasks: {
          en: [
            'Correction and implementation of LibreFrame in the last project during my previous internship.',
            'Documentation and improvement of LibreFrame.',
            'Creation of an automation tool for billing via the Dolibarr API.',
            'Creation of a remote server monitoring tool via SSH.',
          ],
          fr: [
            'Correction et implémentation de LibreFrame dans le dernier projet lors de mon stage précédent.',
            'Documentation et amélioration de LibreFrame.',
            'Création d’un outil d’automatisation à la facturation via l’API de Dolibarr.',
            'Création d’un outil de monitoring de serveur distant via ssh.',
          ],
        },
        training: {
          en: [
            'Langage de programmation Ada',
          ],
          fr: [
            'Langage de programmation Ada',
          ],
        },
        env: {
          en: 'Ada / SSH / Dolibarr',
          fr: 'Ada / SSH / Dolibarr',
        },
      },
    },
    {
      id: 'sowebio-1',
      link: 'https://www.soweb.io/',
      location: 'Saint Pierre d\'Oléron, France',
      company: { en: 'Sowebio', fr: 'Sowebio' },
      role: { en: 'Développeur Ada', fr: 'Développeur Ada' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'January - February 2025', fr: 'Janvier - Février 2025' },
      description: {
        en: 'Created a PDF generation tool summarizing website performance via the Matomo API.',
        fr: 'Création d’un outil de génération de PDF récapitulant les performances d\'un site web via, l’API Matomo.',
      },
      techs: ['Ada', 'GitHub'],
      /* details: {
        context: {
          en: 'Digital agency with 20+ clients across various industries (retail, finance, healthcare). Team of 12 developers, working on 3-4 projects simultaneously.',
          fr: 'Agence digitale avec 20+ clients dans différents secteurs (retail, finance, santé). Équipe de 12 développeurs, travaillant sur 3-4 projets simultanément.',
        },
        tasks: {
          en: [
            'Built 15+ client-facing web applications from scratch',
            'Created and maintained a shared design system used across all agency projects',
            'Implemented complex form workflows with multi-step validation',
            'Optimized web performance achieving 90+ scores on Core Web Vitals',
            'Integrated third-party APIs (payment, CRM, analytics)',
            'Set up Storybook documentation for reusable components',
            'Collaborated closely with UX designers to translate Figma mockups into pixel-perfect UIs',
          ],
          fr: [
            'Développement de 15+ applications web clients from scratch',
            'Création et maintenance d\'un design system partagé utilisé sur tous les projets de l\'agence',
            'Implémentation de workflows de formulaires complexes avec validation multi-étapes',
            'Optimisation des performances web avec scores 90+ sur les Core Web Vitals',
            'Intégration d\'APIs tierces (paiement, CRM, analytics)',
            'Mise en place de la documentation Storybook pour les composants réutilisables',
            'Collaboration étroite avec les designers UX pour traduire les maquettes Figma en interfaces pixel-perfect',
          ],
        },
        training: {
          en: [
            'Angular Advanced workshop (2 days)',
            'Accessibility (WCAG 2.1) certification',
          ],
          fr: [
            'Workshop Angular Avancé (2 jours)',
            'Certification Accessibilité (WCAG 2.1)',
          ],
        },
        env: {
          en: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
          fr: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
        },
      }, */
    },
    {
      id: 'eixa6-1',
      company: { en: 'Eixa6', fr: 'Eixa6' },
      location: 'Marennes, France',
      role: { en: 'Fullstack Developer', fr: 'Développeur Fullstack' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'May - June 2024', fr: 'Mai - Juin 2024' },
      description: {
        en: 'Developed the frontend of a web application in React.\nBuilt the backend in PHP Symphony.\nCreated an Android application in Kotlin.',
        fr: 'Création du front end d’un site web en React.\nCréation d’un back end en PHP Symphony.\nCréation d’une application Android en Kotlin.',
      },
      techs: ['React', 'GitLab', 'PHP', 'Kotlin', 'Symfony', 'MariaDB'],
      /* details: {
        context: {
          en: 'Early-stage startup (seed round), small team of 5 developers building an e-commerce platform from the ground up. Fast-paced environment with weekly releases.',
          fr: 'Startup en phase de démarrage (seed round), petite équipe de 5 développeurs construisant une plateforme e-commerce from scratch. Environnement rapide avec des releases hebdomadaires.',
        },
        tasks: {
          en: [
            'Developed the product catalog with advanced filtering and search',
            'Built the shopping cart with real-time inventory checking',
            'Integrated Stripe payment gateway with 3D Secure support',
            'Implemented user authentication with JWT and OAuth (Google, Facebook)',
            'Created an admin dashboard for order management and analytics',
            'Wrote API documentation with Swagger/OpenAPI',
          ],
          fr: [
            'Développement du catalogue produits avec filtrage avancé et recherche',
            'Création du panier d\'achat avec vérification de stock en temps réel',
            'Intégration de la passerelle de paiement Stripe avec support 3D Secure',
            'Implémentation de l\'authentification utilisateur avec JWT et OAuth (Google, Facebook)',
            'Création d\'un tableau de bord admin pour la gestion des commandes et les analytics',
            'Rédaction de la documentation API avec Swagger/OpenAPI',
          ],
        },
        env: {
          en: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
          fr: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
        },
      }, */
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'bulledeco',
      title: { en: 'Bulle D\'éco 17', fr: 'Bulle D\'éco 17' },
      description: {
        en: 'A showcase website with presentation pages and a contact form, for the company Bulle D\'éco 17.',
        fr: 'Un site web vitrine avec pages de présentation et formulaire de contact, pour l\'entreprise Bulle D\'éco 17.',
      },
      techs: ['Python', 'Django'],
      url: 'https://bulledeco17.fr',
      /* github: 'https://github.com/janedoe/weather-app', */
    },
    {
      id: 'online-lg',
      title: { en: 'Online LG', fr: 'Online LG' },
      description: {
        en: 'A web application to play Werewolf and its variants in person without needing the physical game cards.',
        fr: 'Une application web pour jouer au Loup-Garou et ses variantes en présentiel sans nécessiter de cartes du jeu.',
      },
      techs: ['PHP', 'Laravel'],
      url: 'https://lg-online.souakri.fr',
      github: 'https://github.com/Xiizu/online-lg',
    },
    {
      id: 'partyMusic',
      title: { en: 'Party Music', fr: 'Party Music' },
      description: {
        en: 'An android application for collaborative playlist management.',
        fr: 'Une application android de gestion de playlists collaborative.',
      },
      techs: ['PHP', 'Laravel', 'Kotlin'],
      github: 'https://github.com/Xiizu/PartyMusic_App',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'Polytech Nantes', fr: 'Polytech Nantes' },
      degree: { en: 'IT engineering', fr: 'Ingénieur Informatique' },
      /* specialty: { en: 'Web & Mobile Development', fr: 'Développement Web & Mobile' }, */
      period: '2025 - 2027',
    },
    {
      school: { en: 'Lycée Merleau Ponty Rochefort', fr: 'Lycée Merleau Ponty Rochefort' },
      degree: { en: 'BTS SIO', fr: 'BTS SIO (Services Informatiques aux Organisations)' },
      specialty: { en: 'SLAM (Systems and Software and Business Applications)', fr: 'SLAM (Solutions Logicielles et Applications Métiers)' },
      period: '2023 - 2025',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Biking', fr: 'Vélo' },
      details: [
        { en: 'Mountain biking', fr: 'Vélo tout terrain' },
      ],
    },
    {
      title: { en: 'Board Games', fr: 'Jeux de société' },
      details: [
        { en: 'Strategy games / Board games', fr: 'Jeux de stratégie / Jeux de plateau' },
      ],
    },
    {
      title: { en: 'Video Games', fr: 'Jeux vidéo' },
      details: [
        { en: 'Minecraft', fr: 'Minecraft' },
      ],
    },
    {
      title: { en: 'Creativity', fr: 'Créativité' },
    },
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  //  pdf: {
  //   label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
  //   path: { en: '/cv/en/resume-en.pdf', fr: '/cv/fr/resume-fr.pdf' },
  // },

  // ===== THEME =====
  theme: {
    preset: 'slate', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      presentation: { en: 'PRESENTATION', fr: 'PRÉSENTATION' },
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
