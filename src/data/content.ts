// ─────────────────────────────────────────────────────────────
// ALL site text lives in this file. Edit here; no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Christian E. Bausin',
  shortName: 'Christian Bausin',
  initials: 'CB',
  titles: ['Front-End Developer', 'UI/UX Designer', 'IT Support'],
  location: 'Lahug, Cebu City, Philippines',
  tagline: 'I design and build clear, easy-to-use interfaces.',
  email: 'christianbausin7866@gmail.com',
  linkedin: 'https://www.linkedin.com/in/christian-bausin-967b8a303',
  github: 'https://github.com/bauchao1',
  resume: 'resume.pdf', // put your PDF in /public/resume.pdf
  photo: '', // e.g. 'images/profile.jpg' in /public/images/; empty shows a placeholder
}

/** Home page: the short intro under the hero. */
export const home = {
  introTitle: "Hi, I'm Christian.",
  intro:
    "I'm a Cum Laude BSIT graduate who designs and builds front ends with React and TypeScript. At work I designed the front end and design system of our new HRIS, built TrackHub to keep track of 60+ office laptops, and keep day-to-day IT running.",
  featuredTitle: 'Selected work',
  featuredIntro: 'A few things I designed and built recently.',
}

/** About page. */
export const about = {
  title: 'I design and build clear, easy-to-use interfaces.',
  summary: [
    'Cum Laude BSIT graduate focused on front-end development and UI/UX design with React and TypeScript.',
    "I designed the front end and design system of my company's new HRIS and built TrackHub, an internal laptop monitoring system, both with AI-assisted development. I also run day-to-day IT operations for an office of 60+ laptops.",
  ],
  stats: ['Cum Laude', '60+ laptops managed', '2 systems shipped', 'Excellence in Internship Award'],
}

export type SkillGroup = { title: string; icon: 'code' | 'design' | 'ai' | 'network'; items: string[] }

export const skills: SkillGroup[] = [
  {
    title: 'Programming & Web',
    icon: 'code',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Java', 'Kotlin', 'WordPress', 'Firebase'],
  },
  {
    title: 'UI/UX Design',
    icon: 'design',
    items: ['Design Systems', 'Accessibility', 'Responsive Design', 'Photoshop', 'Illustrator', 'Canva'],
  },
  { title: 'AI Tools', icon: 'ai', items: ['Claude', 'ChatGPT', 'Gemini'] },
  {
    title: 'IT & Networking',
    icon: 'network',
    items: ['Troubleshooting', 'Laptop & Printer Setup', 'Wi-Fi & Router Configuration', 'DNS', 'DHCP'],
  },
]

export const education = {
  degree: 'BS Information Technology',
  honor: 'Cum Laude',
  school: 'Cebu Technological University – Barili Campus',
  years: '2021 – 2025',
  awards: [
    { title: "Dean's List", years: '2022 – 2025' },
    { title: 'Excellence in Internship Award', years: '2025' },
  ],
}

/** Experience page. Add more companies to `jobs`; the newest goes first. */
export const experience = {
  title: 'Where I’ve worked',
  intro: 'I started as an IT support intern and was hired full-time when the internship ended.',
}

export type Role = { title: string; period: string; note?: string; current?: boolean }

export type HighlightGroup = {
  title: string
  icon: 'code' | 'design' | 'ai' | 'network'
  items: { text: string; project?: string }[] // `project` = a project slug, links to its case study
}

export type Job = {
  company: string
  location: string
  roles: Role[]
  highlights: HighlightGroup[]
}

export const jobs: Job[] = [
  {
    company: 'Mora, Sanchez, Meñoza & Associates',
    location: 'Cebu City',
    roles: [
      { title: 'IT – Administrative Associate', period: 'Jul 2025 – Present', current: true },
      { title: 'IT Support Intern', period: 'Feb 2025 – Jul 2025', note: 'Hired full-time after the internship' },
    ],
    highlights: [
      {
        title: 'Building software',
        icon: 'code',
        items: [
          { text: 'Built the front end of the company’s new HRIS.', project: 'msma-hris' },
          { text: 'Designed, built and deployed TrackHub, our laptop monitoring system.', project: 'trackhub' },
        ],
      },
      {
        title: 'AI adoption',
        icon: 'ai',
        items: [{ text: 'Introduced AI tools (Claude, ChatGPT, Gemini) to the office and trained coworkers to use them.' }],
      },
      {
        title: 'Web & design',
        icon: 'design',
        items: [
          { text: 'Manage the company WordPress site.' },
          { text: 'Design marketing materials, company IDs and presentations.' },
        ],
      },
      {
        title: 'IT operations',
        icon: 'network',
        items: [
          { text: 'Maintain the office’s 60+ laptops and 6 printers.' },
          { text: 'Handle IT inventory and procurement.' },
        ],
      },
    ],
  },
]

/** Pages in the top menu. `path` is the URL; `title` is the browser-tab title. */
export const pages = [
  { path: '/about', label: 'About', title: 'About' },
  { path: '/experience', label: 'Experience', title: 'Experience' },
  { path: '/projects', label: 'Projects', title: 'Projects' },
  { path: '/gallery', label: 'Gallery', title: 'Design Gallery' },
  { path: '/contact', label: 'Contact', title: 'Contact' },
] as const

/** Contact page. */
export const contact = {
  title: 'Let’s work together.',
  intro: 'Have a role, a project or a question? Send a message or email me directly.',
  // Free key from https://web3forms.com (enter your email; the key is emailed to you).
  // It is safe to keep here: it can only send messages to your inbox.
  // While empty, the form shows your email address instead of sending.
  web3formsKey: '3132e3ea-7553-4fee-9908-cb454df419ba',
  subject: 'New message from your portfolio',
}

/** Search engines and link previews. Update `siteUrl` if you move to a custom domain. */
export const seo = {
  siteUrl: 'https://bauchao-works.vercel.app',
  description:
    'Christian E. Bausin is a front-end developer and UI/UX designer in Cebu City who designs and builds clear, easy-to-use interfaces with React and TypeScript.',
  ogImage: 'og-image.png', // in /public, 1200×630
}

/** Design Gallery page. */
export const galleryPage = {
  title: 'Design Gallery',
  intro: 'Posters, social media graphics, branding and company IDs I’ve designed.',
}

export const galleryCategories = ['Posters', 'Social Media', 'Branding', 'Company IDs'] as const
export type GalleryCategory = (typeof galleryCategories)[number]

export type GalleryItem = {
  id: string
  title: string
  category: GalleryCategory
  description?: string
  image?: string // e.g. 'images/gallery/poster-1.jpg' in /public; empty shows a placeholder
  alt?: string // describe the design for screen readers once the real image is added
}

// PLACEHOLDERS: replace titles and add `image` paths when you have the real files.
export const gallery: GalleryItem[] = [
  { id: 'poster-1', title: 'Event poster', category: 'Posters' },
  { id: 'social-1', title: 'Announcement post', category: 'Social Media' },
  { id: 'id-1', title: 'Employee ID, front', category: 'Company IDs' },
  { id: 'brand-1', title: 'Brand presentation slide', category: 'Branding' },
  { id: 'social-2', title: 'Holiday greeting post', category: 'Social Media' },
  { id: 'poster-2', title: 'Office notice poster', category: 'Posters' },
  { id: 'id-2', title: 'Employee ID, back', category: 'Company IDs' },
  { id: 'brand-2', title: 'Letterhead and business card', category: 'Branding' },
  { id: 'social-3', title: 'Hiring post', category: 'Social Media' },
  { id: 'poster-3', title: 'Esports event poster', category: 'Posters' },
]

/** Projects page header. */
export const projectsPage = {
  title: 'Projects',
  intro: 'Systems I designed and built at work, plus a few tools and apps from school and side projects.',
}

export type Project = {
  slug: string // used in the URL: /projects/<slug>
  title: string
  subtitle: string
  summary: string
  tools: string[]
  featured?: boolean // shown on the home page
  image?: string // e.g. 'images/projects/trackhub.jpg' in /public; empty shows a placeholder cover
  /** Case-study page content. */
  caseStudy: {
    problem: string
    role: string
    process: string[] // steps, in order
    outcome: string[]
  }
}

// NOTE: case-study text below is a first draft written from the portfolio brief.
// Check every line, especially anything marked "CONFIRM", before publishing.

export const projects: Project[] = [
  {
    slug: 'msma-hris',
    title: 'MSMA HRIS',
    subtitle: 'HR & Payroll System',
    summary:
      'Front end and custom design system covering 201 files, biometric and mobile attendance, Philippine leave and payroll rules, multi-level approvals, and role-based access.',
    tools: ['React', 'TypeScript', 'Vite', 'AI-assisted development'],
    featured: true,
    caseStudy: {
      problem:
        'The firm needed one HR and payroll system that could hold employee 201 files, take attendance from biometric devices and phones, apply Philippine leave and payroll rules, and route requests through several levels of approval.',
      role: 'I designed and built the front end and its custom design system, using AI-assisted development.',
      process: [
        'Listed the modules, user roles and approval paths the system had to support.',
        'Built a custom design system first: colors, type, spacing and shared components, so every module would look and behave the same.',
        'Built the modules on top of it: 201 files, biometric and mobile attendance, leave, payroll and multi-level approvals.',
        'Added role-based access so each person only sees and does what their role allows.',
      ],
      outcome: [
        'One consistent interface across every HR and payroll module.',
        'Covers 201 files, biometric and mobile attendance, Philippine leave and payroll rules, multi-level approvals and role-based access.',
      ],
    },
  },
  {
    slug: 'trackhub',
    title: 'TrackHub',
    subtitle: 'Laptop Monitoring System',
    summary: 'Tracks the accountable user, condition, past users and repairs for 60+ laptops in daily use.',
    tools: ['AI-assisted development'], // CONFIRM: add the languages and frameworks TrackHub uses
    featured: true,
    caseStudy: {
      problem:
        'The office has 60+ laptops in daily use. Without one place to look, it was hard to tell who was accountable for each unit, what condition it was in, who had used it before and what repairs it had had.',
      role: 'I designed, built and deployed TrackHub on my own, using AI-assisted development.',
      process: [
        'Worked out what IT needs to know about every laptop: accountable user, condition, past users and repairs.',
        'Designed simple screens to look up a unit and update its record quickly.',
        'Built and deployed it for the office.',
      ],
      outcome: [
        'Tracks all 60+ laptops in daily use from one place.',
        'Each unit keeps a history of past users and repairs.',
      ],
    },
  },
  {
    slug: 'gradein',
    title: 'GradeIN',
    subtitle: 'Student Academic Management System',
    summary: 'An Android app for students and a desktop app for faculty, synced in real time.',
    tools: ['Kotlin', 'Java Swing', 'Firebase Firestore'],
    featured: true,
    caseStudy: {
      problem: 'Students and faculty needed to see the same academic records without waiting for manual updates.',
      role: 'CONFIRM: your role on this project (e.g. lead developer, UI designer, team size).',
      process: [
        'Built an Android app in Kotlin for students.',
        'Built a desktop app in Java Swing for faculty.',
        'Connected both to Firebase Firestore so changes appear on the other side in real time.',
      ],
      outcome: ['Students and faculty work from the same data, synced in real time across Android and desktop.'],
    },
  },
  {
    slug: 'gantt-planner',
    title: 'Gantt Planner',
    subtitle: 'Interactive Scheduling Tool',
    summary: 'Tasks, subtasks, owners, progress tracking and overdue flagging on an interactive timeline.',
    tools: ['CONFIRM: tools used'],
    caseStudy: {
      problem: 'Plans kept in lists made it hard to see who owned what, how far along each task was, and what had slipped.',
      role: 'CONFIRM: your role on this project.',
      process: [
        'Laid tasks and subtasks out on a timeline.',
        'Added owners and progress tracking to each task.',
        'Added flags for tasks that are past their due date.',
      ],
      outcome: ['One interactive view of tasks, subtasks, owners and progress, with overdue work flagged.'],
    },
  },
  {
    slug: 'tournament-tracker',
    title: 'Tournament Tracker',
    subtitle: 'Office Esports Standings',
    summary: 'Standings and round-robin pairings for an office esports event.',
    tools: ['CONFIRM: tools used'],
    caseStudy: {
      problem: 'An office esports event needed fair round-robin pairings and up-to-date standings.',
      role: 'CONFIRM: your role on this project.',
      process: ['Generated round-robin pairings for the teams.', 'Recorded results and updated the standings after each match.'],
      outcome: ['Players could follow pairings and standings throughout the event.'],
    },
  },
]
