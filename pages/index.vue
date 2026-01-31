<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-gradient text-white py-24 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl bg-white p-3 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <img 
              :src="getImagePath('/profile.jpg')" 
              alt="Ronan Otaza" 
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div class="flex-1 text-center md:text-left fade-in">
            <h1 class="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Ronan Otaza</h1>
            <p class="text-2xl md:text-3xl mb-6 text-blue-100 font-semibold">Software Engineer</p>
            <p class="text-lg md:text-xl text-blue-50 max-w-2xl leading-relaxed">
              A hardworking Web Developer who is experienced in mobile and web development. 
              He is more than able to develop and establish positive attitude towards duties 
              and responsibilities in an activity, work, or project so that it can be an excellent 
              output completed before or on the given schedule.
            </p>
            <div class="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#portfolio" class="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                View My Work
              </a>
              <a href="#contact" class="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white relative">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">About Me</h2>
        <div class="max-w-3xl mx-auto">
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
            <p class="text-lg text-gray-700 leading-relaxed">
              A hardworking Web Developer who is experienced in mobile and web development. 
              He is more than able to develop and establish positive attitude towards duties 
              and responsibilities in an activity, work, or project so that it can be an excellent 
              output completed before or on the given schedule.
            </p>
          </div>
        </div>
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
          <SkillCard
            v-for="(skill, index) in skills"
            :key="index"
            :skill="skill"
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">Contact</h2>
        <div class="max-w-2xl mx-auto">
          <ContactInfo />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { getImagePath } = useImagePath()

const selectedProject = ref(null)

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
    image: '/img/portfolio/TIDALSWING-REALD2D/screenshot-1.png',
    images: [
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-1.png',
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-3.png',
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-5.png',
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-7.png',
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-2.png',
      '/img/portfolio/TIDALSWING-REALD2D/screenshot-4.png',
    ]
  },
  {
    title: 'Budget Management System (CHED)',
    description: 'Comprehensive budget management system developed for CHED with features for tracking, allocation, and reporting of financial resources.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS', 'Laravel', 'MySQL'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-BS/BMS1.png',
    images: [
      '/img/portfolio/CHED-BS/BMS1.png',
      '/img/portfolio/CHED-BS/BMS2.png',
      '/img/portfolio/CHED-BS/BMS3.png',
      '/img/portfolio/CHED-BS/BMS4.png',
      '/img/portfolio/CHED-BS/BMS5.png'
    ]
  },
  {
    title: 'Document Tracking System (CHED)',
    description: 'Efficient document tracking and management system with workflow automation, status updates, and audit trails.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS', 'Laravel'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-DT/dt1.PNG',
    images: [
      '/img/portfolio/CHED-DT/dt1.PNG',
      '/img/portfolio/CHED-DT/dt2.PNG',
      '/img/portfolio/CHED-DT/dt3.PNG',
      '/img/portfolio/CHED-DT/dt4.PNG'
    ]
  },
  {
    title: 'Scholarship Portal (CHED)',
    description: 'Student scholarship management portal with application processing, eligibility checking, and award management features.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS', 'Laravel', 'MySQL'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-CSP/csp1.png',
    images: [
      '/img/portfolio/CHED-CSP/csp1.png',
      '/img/portfolio/CHED-CSP/csp2.png',
      '/img/portfolio/CHED-CSP/csp3.png',
      '/img/portfolio/CHED-CSP/csp4.PNG',
      '/img/portfolio/CHED-CSP/csp5.PNG',
      '/img/portfolio/CHED-CSP/csp6.PNG'
    ]
  },
  {
    title: 'SMS Notification System (CHED)',
    description: 'Automated SMS notification system for sending alerts, reminders, and updates to users and stakeholders.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS', 'Laravel', 'MySQL'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-SMS/sms1.png',
    images: [
      '/img/portfolio/CHED-SMS/sms1.png',
      '/img/portfolio/CHED-SMS/sms2.png'
    ]
  },
  {
    title: 'Foodics Kiosk Application',
    description: 'Interactive kiosk application converted from Figma designs, featuring responsive UI and seamless API integration for restaurant ordering.',
    technologies: ['Vue.js', 'Vuex', 'JavaScript', 'CSS'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/FOODICS-KIOSK/foodics1.png',
    images: [
      '/img/portfolio/FOODICS-KIOSK/foodics1.png',
      '/img/portfolio/FOODICS-KIOSK/foodics2.png',
      '/img/portfolio/FOODICS-KIOSK/foodics3.png',
      '/img/portfolio/FOODICS-KIOSK/foodics4.png',
      '/img/portfolio/FOODICS-KIOSK/foodics5.png',
      '/img/portfolio/FOODICS-KIOSK/foodics6.png'
    ]
  },
  {
    title: 'Solo Admin Dashboard',
    description: 'Comprehensive admin dashboard with user management, analytics, and system configuration features.',
    technologies: ['Vuejs', 'Vuex', 'TypeScript', 'Sass', 'Vue-Bootstrap'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/SOLO-ADMIN/admin1.png',
    images: [
      '/img/portfolio/SOLO-ADMIN/admin1.png',
      '/img/portfolio/SOLO-ADMIN/admin2.png',
      '/img/portfolio/SOLO-ADMIN/admin3.png',
      '/img/portfolio/SOLO-ADMIN/admin4.png',
      '/img/portfolio/SOLO-ADMIN/admin5.png',
      '/img/portfolio/SOLO-ADMIN/admin6.png',
      '/img/portfolio/SOLO-ADMIN/admin7.png',
      '/img/portfolio/SOLO-ADMIN/admin8.png',
      '/img/portfolio/SOLO-ADMIN/admin9.png'
    ]
  },
  {
    title: 'Solo Marketing Website',
    description: 'Modern marketing website with responsive design, interactive features, and seamless user experience.',
    technologies: ['Vuejs', 'Vuex', 'TypeScript', 'Sass'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/SOLO-MARKEING/solo1.png',
    images: [
      '/img/portfolio/SOLO-MARKEING/solo1.png',
      '/img/portfolio/SOLO-MARKEING/solo2.png',
      '/img/portfolio/SOLO-MARKEING/solo3.png',
      '/img/portfolio/SOLO-MARKEING/solo4.png',
      '/img/portfolio/SOLO-MARKEING/solo5.png',
      '/img/portfolio/SOLO-MARKEING/solo6.png',
      '/img/portfolio/SOLO-MARKEING/solo7.png',
      '/img/portfolio/SOLO-MARKEING/solo8.png',
      '/img/portfolio/SOLO-MARKEING/solo9.png'
    ]
  },
  {
    title: 'Accomplishment Report System (CHED)',
    description: 'Comprehensive accomplishment report system for tracking, documenting, and reporting organizational achievements, milestones, and project completions with detailed analytics and export functionality.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-AR/ar1.PNG',
    images: [
      '/img/portfolio/CHED-AR/ar1.PNG',
      '/img/portfolio/CHED-AR/ar2.PNG'
    ]
  },
  {
    title: 'Daily Time Record System (CHED)',
    description: 'Comprehensive daily time record system for tracking employee attendance, work hours, leave management, and generating time reports with analytics and export capabilities.',
    technologies: ['VueJS', 'Vuex', 'JavaScript', 'SASS', 'Laravel'],
    demoUrl: null,
    githubUrl: null,
    image: '/img/portfolio/CHED-DTR/dtr1.PNG',
    images: [
      '/img/portfolio/CHED-DTR/dtr1.PNG',
      '/img/portfolio/CHED-DTR/dtr2.PNG'
    ]
  }
]

// Process all projects to add baseURL to image paths
const projects = projectsRaw.map(processProjectImages)

const experiences = [
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

const skills = [
  { name: 'HTML', level: 'Proficient' },
  { name: 'CSS', level: 'Proficient' },
  { name: 'SASS', level: 'Proficient' },
  { name: 'Bootstrap', level: 'Proficient' },
  { name: 'Tailwind', level: 'Intermediate' },
  { name: 'Javascript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'Vue.js', level: 'Advanced' },
  { name: 'React.js', level: 'Intermediate' },
  { name: 'PHP', level: 'Advanced' },
  { name: 'Laravel', level: 'Advanced' },
  { name: 'CodeIgniter', level: 'Advanced' },
  { name: 'Flutter', level: 'Intermediate' },
  { name: 'Git', level: 'Advanced' },
  { name: 'REST API', level: 'Advanced' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Wordpress', level: 'Advanced' },
  { name: 'Photoshop', level: 'Advanced' },
  { name: 'Docker', level: 'Basic' },
  { name: 'MySQL', level: 'Advanced' },
  { name: 'PostgreSQL', level: 'Advanced' },
  { name: 'Linux Server', level: 'Advanced' },
  { name: 'Apache', level: 'Advanced' },
  { name: 'NginX', level: 'Intermediate' },
  { name: 'AWS', level: 'Intermediate' }
]
</script>
