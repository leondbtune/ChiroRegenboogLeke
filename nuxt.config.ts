// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxthub/core'],
  css: ['@fortawesome/fontawesome-free/css/all.min.css'],
  runtimeConfig: {
    public: {
      supabaseKeyConst: '', 
    }

  },
  'hub': {
    'cache': true
  },
  routeRules: {
    '/': {
      cache: {
        maxAge: 60 * 60
      },
      prerender: true
    },
    '/groups': {
      cache: {
        maxAge: 60 * 60
      }
    },
    '/photos': {
      cache: {
        maxAge: 60 * 60
      },
      prerender: true
    },
    '/blog': {
      cache: {
        maxAge: 60 * 60
      },
      prerender: true
    },
    '/groups/**': {
      cache: {
        maxAge: 60 * 60
      },
      prerender: true
    },
    '/photos/**': {
      cache: {
        maxAge: 60 * 60
      },
      prerender: true
    },
  }
})