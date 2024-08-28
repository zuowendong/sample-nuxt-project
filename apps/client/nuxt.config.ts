// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  css: ["~/assets/css/globals.css", "aos/dist/aos.css"],
  modules: ["@nuxtjs/tailwindcss"],

  plugins: ["~/plugins/aos.client.ts"],
  app: {
    baseURL: "",
    head: {
      title: "my-nuxt-app",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/logo.ico",
        },
      ],
    },
  },
});
