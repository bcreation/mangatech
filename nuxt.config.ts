import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head () {
    return {
      link: [
        // Add this
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ],
    }
  },
  publicRuntimeConfig: {
    kitsu: 'https://kitsu.io/api/edge'
  },
  css: [
    '@/assets/sass/index.scss'
  ],
   modules: ['nuxt-material-design-icons']
})
