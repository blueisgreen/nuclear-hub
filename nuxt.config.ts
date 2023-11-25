// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@formkit/nuxt'],
  content: {},
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  devtools: { enabled: true },
})
