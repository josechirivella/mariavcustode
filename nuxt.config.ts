// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      strapiURL: "",
      strapiApiURL: "",
    },
    strapiToken: process.env.STRAPI_TOKEN,
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  css: ["~/assets/style.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
