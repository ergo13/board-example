// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  css: ['~/assets/styles/main.css'],
  tailwindcss: {
    cssPath: ['~/assets/styles/tailwind.css', { injectPosition: 'first' }],
  }
});
