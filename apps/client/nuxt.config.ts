// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/globals.css"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "my-nuxt-app",
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
    },
  },

  ssr: false,
});
