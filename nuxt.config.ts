// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  runtimeConfig: {
    public: {
      strapiURL: "",
      strapiApiURL: "",
      posthogPublicKey: "",
      posthogHost: "",
    },
    strapiToken: process.env.STRAPI_TOKEN,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "vue3-carousel-nuxt",
    "@nuxtjs/sitemap",
  ],
  css: ["~/assets/style.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    "/case-studies/3": { redirect: "/case-studies/house-care" },
  },
});
