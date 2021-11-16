import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('parseDate', (date: string) => new Date(date).toLocaleDateString())
})

declare module '#app' {
  interface NuxtApp {
    $parseDate  (date: string): string
  }
}