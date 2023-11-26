// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@formkit/nuxt'],
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  devtools: { enabled: true },
})
