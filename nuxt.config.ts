// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  plugins: ["~/plugins/maska.js"],
  modules: [
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
  ],
  css: ["~/assets/sass/style.sass"],
  i18n: {
    defaultLocale: "uz",
    langDir: "./locales/",
    locales: [
      {
        code: "uz",
        name: "uz",
        file: "uz.json",
      },
      {
        code: "ru",
        name: "ru",
        file: "ru.json",
      },
    ],
  },
});
