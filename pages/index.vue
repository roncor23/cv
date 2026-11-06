<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-bg text-white py-24 md:py-32 relative overflow-hidden">
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" aria-hidden="true"></div>
      <div class="absolute -bottom-40 right-0 w-[28rem] h-[28rem] bg-indigo-400/10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="w-52 h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-2xl bg-white/5 p-2 shrink-0">
            <img
              :src="getImagePath('/profile.jpg')"
              alt="Ronan Otaza"
              width="256"
              height="256"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div class="flex-1 text-center md:text-left fade-in">
            <span class="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/30 text-emerald-300 text-sm font-medium">
              <span class="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
              Open to work
            </span>
            <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-3">Ronan Otaza</h1>
            <p class="text-2xl md:text-3xl mb-6 text-indigo-200 font-semibold">Full-Stack &amp; Mobile Developer</p>
            <p class="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              I build web apps with Vue, Nuxt and Laravel, and mobile apps with Flutter,
              from the database and APIs through to polished, responsive interfaces.
            </p>
            <div class="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#portfolio" class="btn-primary">View My Work</a>
              <a href="#contact" class="btn-secondary-dark">Get In Touch</a>
              <a :href="getImagePath('/Ronan-Otaza-CV.pdf')" download class="btn-secondary-dark">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">About Me</h2>
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-600 leading-relaxed">
            I'm a developer from Butuan City, Philippines, with over nine years of experience across
            government systems, SaaS platforms and mobile apps. I enjoy owning features end to end:
            designing the data model, building the API, and shipping an interface people actually like using.
            I care about clean, maintainable code and delivering on schedule.
          </p>
        </div>
        <dl class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col-reverse rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
            <dt class="text-sm text-gray-500 font-medium">{{ stat.label }}</dt>
            <dd class="text-3xl md:text-4xl font-bold text-indigo-600 mb-1">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20 bg-gray-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">Portfolio</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          A collection of projects showcasing my skills in web development, full-stack applications, and modern technologies.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
            @open="openProjectModal"
          />
        </div>
        
        <!-- Project Modal -->
        <ProjectModal
          :is-open="selectedProject !== null"
          :project="selectedProject"
          @close="closeProjectModal"
        />
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">Work Experience</h2>
        <div class="space-y-8">
          <ExperienceCard
            v-for="(job, index) in experiences"
            :key="index"
            :job="job"
          />
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">Education</h2>
        <div class="max-w-3xl mx-auto space-y-6">
          <EducationCard
            v-for="(edu, index) in education"
            :key="index"
            :education="edu"
          />
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="group in skillGroups" :key="group.name" class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ group.name }}</h3>
            <ul class="flex flex-wrap gap-2">
              <li v-for="item in group.items" :key="item" class="tech-badge">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">Contact</h2>
        <div class="max-w-2xl mx-auto">
          <ContactInfo />
          <div class="mt-6 text-center">
            <a :href="getImagePath('/Ronan-Otaza-CV.pdf')" download class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Download CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { getImagePath } = useImagePath()

const selectedProject = ref(null)

const stats = [
  { value: '9+', label: 'Years experience' },
  { value: '8', label: 'Companies' },
  { value: '13', label: 'Projects shown' },
  { value: '25+', label: 'Technologies' }
]

const openProjectModal = (project) => {
  selectedProject.value = project
}

const closeProjectModal = () => {
  selectedProject.value = null
}

// Helper to process project images
const processProjectImages = (project) => {
  return {
    ...project,
    image: getImagePath(project.image),
    images: project.images?.map(img => getImagePath(img)) || []
  }
}

const projectsRaw = [
  {
    title: 'Real Estate Management System (Tidalswing)',
    description: 'Comprehensive real estate management system for property listings, client management, transactions, and reporting. Features responsive design, real-time updates, and cloud infrastructure integration.',
    technologies: ['VueJS', 'Vuex', 'SASS', 'Nuxt', 'MySQL', 'Laravel', 'CI/CD', 'AWS - S3', 'Nginx'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/TIDALSWING-REALD2D/screenshot-1.webp',
    images: [
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-1.webp',
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-3.webp',
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-5.webp',
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-7.webp',
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-2.webp',
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-4.webp',
    ]
  },
  {
    title: 'Budget Management System (CHED)',
    description: 'Comprehensive budget management system developed for CHED with features for tracking, allocation, and reporting of financial resources.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS', 'Laravel', 'MySQL'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-BS/BMS1.webp',
    images: [
      '/img/portfolio/CHED-BS/BMS1.webp',
      '/img/portfolio/CHED-BS/BMS2.webp',
      '/img/portfolio/CHED-BS/BMS3.webp',
      '/img/portfolio/CHED-BS/BMS4.webp',
      '/img/portfolio/CHED-BS/BMS5.webp'
    ]
  },
  {
    title: 'Document Tracking System (CHED)',
    description: 'Efficient document tracking and management system with workflow automation, status updates, and audit trails.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS', 'Laravel'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-DT/dt1.webp',
    images: [
      '/img/portfolio/CHED-DT/dt1.webp',
      '/img/portfolio/CHED-DT/dt2.webp',
      '/img/portfolio/CHED-DT/dt3.webp',
      '/img/portfolio/CHED-DT/dt4.webp'
    ]
  },
  {
    title: 'Scholarship Portal (CHED)',
    description: 'Student scholarship management portal with application processing, eligibility checking, and award management features.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS', 'Laravel', 'MySQL'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-CSP/csp1.webp',
    images: [
      '/img/portfolio/CHED-CSP/csp1.webp',
      '/img/portfolio/CHED-CSP/csp2.webp',
      '/img/portfolio/CHED-CSP/csp3.webp',
      '/img/portfolio/CHED-CSP/csp4.webp',
      '/img/portfolio/CHED-CSP/csp5.webp',
      '/img/portfolio/CHED-CSP/csp6.webp'
    ]
  },
  {
    title: 'SMS Notification System (CHED)',
    description: 'Automated SMS notification system for sending alerts, reminders, and updates to users and stakeholders.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS', 'Laravel', 'MySQL'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-SMS/sms1.webp',
    images: [
      '/img/portfolio/CHED-SMS/sms1.webp',
      '/img/portfolio/CHED-SMS/sms2.webp'
    ]
  },
  {
    title: 'Foodics Kiosk Application',
    description: 'Interactive kiosk application converted from Figma designs, featuring responsive UI and seamless API integration for restaurant ordering.',
    technologies: ['Vue.js', 'Vuex', 'JavaScript', 'CSS'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/FOODICS-KIOSK/foodics1.webp',
    images: [
      '/img/portfolio/FOODICS-KIOSK/foodics1.webp',
      '/img/portfolio/FOODICS-KIOSK/foodics2.webp',
      '/img/portfolio/FOODICS-KIOSK/foodics3.webp',
      '/img/portfolio/FOODICS-KIOSK/foodics4.webp',
      '/img/portfolio/FOODICS-KIOSK/foodics5.webp',
      '/img/portfolio/FOODICS-KIOSK/foodics6.webp'
    ]
  },
  {
    title: 'Solo Admin Dashboard',
    description: 'Comprehensive admin dashboard with user management, analytics, and system configuration features.',
    technologies: ['Vuejs', 'Vuex', 'TypeScript', 'Sass', 'Vue-Bootstrap'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/SOLO-ADMIN/admin1.webp',
    images: [
      '/img/portfolio/SOLO-ADMIN/admin1.webp',
      '/img/portfolio/SOLO-ADMIN/admin2.webp',
      '/img/portfolio/SOLO-ADMIN/admin3.webp',
      '/img/portfolio/SOLO-ADMIN/admin4.webp',
      '/img/portfolio/SOLO-ADMIN/admin5.webp',
      '/img/portfolio/SOLO-ADMIN/admin6.webp',
      '/img/portfolio/SOLO-ADMIN/admin7.webp',
      '/img/portfolio/SOLO-ADMIN/admin8.webp',
      '/img/portfolio/SOLO-ADMIN/admin9.webp'
    ]
  },
  {
    title: 'Solo Marketing Website',
    description: 'Modern marketing website with responsive design, interactive features, and seamless user experience.',
    technologies: ['Vuejs', 'Vuex', 'TypeScript', 'Sass'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/SOLO-MARKEING/solo1.webp',
    images: [
      '/img/portfolio/SOLO-MARKEING/solo1.webp',
      '/img/portfolio/SOLO-MARKEING/solo2.webp',
      '/img/portfolio/SOLO-MARKEING/solo3.webp',
      '/img/portfolio/SOLO-MARKEING/solo4.webp',
      '/img/portfolio/SOLO-MARKEING/solo5.webp',
      '/img/portfolio/SOLO-MARKEING/solo6.webp',
      '/img/portfolio/SOLO-MARKEING/solo7.webp',
      '/img/portfolio/SOLO-MARKEING/solo8.webp',
      '/img/portfolio/SOLO-MARKEING/solo9.webp'
    ]
  },
  {
    title: 'Accomplishment Report System (CHED)',
    description: 'Comprehensive accomplishment report system for tracking, documenting, and reporting organizational achievements, milestones, and project completions with detailed analytics and export functionality.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-AR/ar1.webp',
    images: [
      '/img/portfolio/CHED-AR/ar1.webp',
      '/img/portfolio/CHED-AR/ar2.webp'
    ]
  },
  {
    title: 'Daily Time Record System (CHED)',
    description: 'Comprehensive daily time record system for tracking employee attendance, work hours, leave management, and generating time reports with analytics and export capabilities.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS', 'Laravel'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-DTR/dtr1.webp',
    images: [
      '/img/portfolio/CHED-DTR/dtr1.webp',
      '/img/portfolio/CHED-DTR/dtr2.webp'
    ]
  },
  {
    title: 'Document Tracking System Mobile App (CHED Caraga)',
    description: 'Mobile companion app for the CHED Caraga Document Tracking System, allowing staff to sign in with their CCMIS credentials to track, receive, and route documents on the go with real-time status updates.',
    technologies: ['Flutter', 'Dart', 'REST API', 'Laravel', 'MySQL'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-MOBILE-DTS/dts1.webp',
    images: [
      '/img/portfolio/CHED-MOBILE-DTS/dts1.webp',
      '/img/portfolio/CHED-MOBILE-DTS/dts2.webp',
      '/img/portfolio/CHED-MOBILE-DTS/dts3.webp',
      '/img/portfolio/CHED-MOBILE-DTS/dts4.webp',
      '/img/portfolio/CHED-MOBILE-DTS/dts5.webp'
    ]
  },
  {
    title: 'Sparrow Vendor App',
    description: 'Mobile app for event vendors to manage their business — bookings, portfolio showcase, availability calendar, client messaging, reviews, and invoicing — all from a single elegant dashboard.',
    technologies: ['Flutter', 'Dart', 'REST API'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/SPARROW/sparrow1.webp',
    images: [
      '/img/portfolio/SPARROW/sparrow1.webp',
      '/img/portfolio/SPARROW/sparrow2.webp',
      '/img/portfolio/SPARROW/sparrow3.webp',
      '/img/portfolio/SPARROW/sparrow4.webp',
      '/img/portfolio/SPARROW/sparrow5.webp',
      '/img/portfolio/SPARROW/sparrow6.webp',
      '/img/portfolio/SPARROW/sparrow7.webp'
    ]
  },
  {
    title: 'Sparrow Web Platform',
    description: 'All-in-one wedding planning platform that brings couples, planners, and vendors into one shared workspace — landing site, guest lists & RSVPs, budgets, timelines, vendor communication, plus an admin dashboard for approvals, events, content, and billing.',
    technologies: ['Web App', 'REST API', 'Admin Dashboard'],
    demoUrl: 'https://sparrowvp.com',
    githubUrl: null,
    image: '/img/portfolio/SPARROW-WEB/sparrow-web1.webp',
    images: [
      '/img/portfolio/SPARROW-WEB/sparrow-web1.webp',
      '/img/portfolio/SPARROW-WEB/sparrow-web2.webp',
      '/img/portfolio/SPARROW-WEB/sparrow-web3.webp',
      '/img/portfolio/SPARROW-WEB/sparrow-web4.webp',
      '/img/portfolio/SPARROW-WEB/sparrow-web5.webp',
      '/img/portfolio/SPARROW-WEB/sparrow-web6.webp',
      '/img/portfolio/SPARROW-WEB/sparrow-web7.webp'
    ]
  }
]

// Process all projects to add baseURL to image paths
const projects = projectsRaw.map(processProjectImages)

const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'Sparrow Co.',
    period: 'January 2026 - October 2026',
    duties: [
      'Developed the Sparrow Vendor mobile app using Flutter and Dart for event vendors.',
      'Built features for bookings, availability calendar, client messaging, reviews, and invoicing.',
      'Designed and integrated REST APIs connecting the mobile app to back-end services.',
      'Collaborated with designers and stakeholders to deliver a clean, intuitive vendor dashboard.',
      'Debugged and resolved issues across the mobile app and server stack.'
    ],
    tools: ['Flutter', 'Dart', 'REST API']
  },
  {
    title: 'Full-Stack Developer',
    company: 'Capsoft Co.',
    period: 'June 2025 - December 2025',
    duties: [
      'Build reactive and reusable component-based UIs using Vue.js and Pinia/Vuex.',
      'Implement real-time data syncing and authentication using Supabase Auth and Presence.',
      'Manage PostgreSQL databases and write Row Level Security (RLS) policies for data safety.',
      'Develop serverless logic and background tasks using Supabase Edge Functions.',
      'Integrate third-party APIs and manage state-driven UI updates for seamless user flow.'
    ],
    tools: ['Vuejs', 'Vuex', 'TypeScript', 'Supabase', 'SASS']
  },
  {
    title: 'Full-Stack Developer / DevOps',
    company: 'Tidalswing Co.',
    period: 'January 2025 - December 2025',
    duties: [
      'Build and maintain responsive front-end and robust back-end systems.',
      'Automate deployment pipelines and manage cloud infrastructure.',
      'Collaborate with stakeholders to design scalable system architectures.',
      'Implement real-time monitoring, security protocols, and logging.',
      'Debug complex issues across the entire application and server stack.'
    ],
    tools: ['VueJS', 'Vuex', 'SASS', 'Nuxt', 'MySQL', 'Laravel', 'CI/CD', 'AWS - S3', 'Nginx']
  },
  {
    title: 'Front-End Developer',
    company: 'Foodics Co.',
    period: 'September 2023 - October 2025',
    duties: [
      'Responsible for support tickets',
      'Fixing bugs reported by QA\'s',
      'Responsible for new features and new designs',
      'Collaborate with the back-end developer for the integration of the API',
      'Collaborate with co-developers and Project manager',
      'Converted Figma design to Vuejs (Kiosk)'
    ],
    tools: ['Vuex', 'VueJs', 'JavaScript', 'CSS']
  },
  {
    title: 'Full-Stack Developer',
    company: 'MemberSplash Co.',
    period: 'January 2023 - December 2023',
    duties: [
      'Responsible for support tickets',
      'Fixing bugs reported by QA\'s'
    ],
    tools: ['Vuejs', 'Vuex', 'JavaScript', 'CSS', 'Wordpress', 'PHP']
  },
  {
    title: 'Front-End Developer',
    company: 'Solo Co.',
    period: 'August 2021 - December 2022',
    duties: [
      'Work with graphics and other designer',
      'Maintain and update websites',
      'Collaborate with co-developers and Project Manager',
      'Responsible for new features and designs',
      'Fixing bugs reported by QA'
    ],
    tools: ['Vuejs', 'Vuex', 'TypeScript', 'Sass', 'Vue-Bootstrap']
  },
  {
    title: 'Mid Full-Stack Developer',
    company: 'CHED',
    period: 'September 2019 - July 2021',
    duties: [
      'Work with graphics and other designers',
      'Maintain and update websites',
      'Collaborate with co-developers and Project manager',
      'Build user interfaces and prototypes from wireframes and designs',
      'Developed numerous systems (Budget Management System, Inventory Management System, Billing Management System, Document Tracking System, Accounting Management System, SMS Notification System, Scholarship Portal, and etc.)'
    ],
    tools: ['VueJS', 'Vuex', 'JavaScript', 'SASS']
  },
  {
    title: 'Junior Full-Stack Developer',
    company: 'Navigatu Co.',
    period: 'Jan 2017 - June 2019',
    duties: [
      'Work with graphics and other designers',
      'Maintain and update websites',
      'Collaborate with co-developers and Project manager',
      'Build user interfaces and prototypes from wireframes and designs'
    ],
    tools: ['Vuejs', 'SASS', 'JavaScript', 'Bootstrap', 'MySQL', 'Laravel']
  }
]

const education = [
  {
    degree: 'Master of Science Information Technology',
    year: 'Graduated 2024'
  },
  {
    degree: 'Bachelor of Science Information Technology',
    year: 'Graduated 2019'
  }
]

const skillGroups = [
  { name: 'Frontend', items: ['Vue.js', 'Nuxt', 'JavaScript', 'TypeScript', 'React.js', 'HTML', 'CSS', 'SASS', 'Tailwind', 'Bootstrap'] },
  { name: 'Backend', items: ['PHP', 'Laravel', 'CodeIgniter', 'Python', 'REST API'] },
  { name: 'Mobile', items: ['Flutter', 'Dart'] },
  { name: 'Databases', items: ['MySQL', 'PostgreSQL', 'Supabase'] },
  { name: 'DevOps & Servers', items: ['Linux Server', 'Apache', 'Nginx', 'AWS', 'Docker', 'Git', 'CI/CD'] },
  { name: 'Tools & CMS', items: ['WordPress', 'Photoshop'] }
]
</script>
