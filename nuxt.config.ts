// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: 'antialiased h-screen bg-gray-100 font-sans',
      },
    },
  },

  modules: ['@nuxt/ui', '@nuxtjs/i18n'],

  i18n: {
    defaultLocale: 'bn',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'bn', name: 'Bangali', file: 'bn.json' }
    ]
  }
})