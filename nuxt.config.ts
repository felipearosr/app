
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
    '@nuxthq/ui'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  colorMode: {
    classSuffix: ''
  }
})
