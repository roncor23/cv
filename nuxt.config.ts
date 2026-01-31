// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Playfair Display': [400, 600, 700]
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
    cdnURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
    head: {
      title: 'Ronan Otaza - Software Engineer Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Ronan Otaza - Software Engineer & Web Developer' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  }
})
