// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['@fortawesome/fontawesome-free/css/all.min.css'],
  runtimeConfig: {
    supabaseKeyConst: '', // can be overridden by NUXT_API_SECRET environment variable
  },
})
