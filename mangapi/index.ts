import { useNuxtApp } from '#app'

export function init () {
  
  useNuxtApp()
  // access runtime nuxt app instance
  const { kitsu } = useRuntimeConfig()

  // default number of mangas
  const LIMIT = 18
  
  // vue-router
  const route = useRoute()
  const router = useRouter()
  
  // pages management
  const currentPage = ref(0)
  const total = ref(0)

  // fetch management
  const errorFetch = ref(false)
  const loader = ref(false)
  
  // state
  const mangas = ref([])
  const manga = ref()

  // Functions

  /**
   * Get mangas
   * @param {number} offset
   */
  const getMangas = async (page: number | string = 0) => {
    loader.value = true
    currentPage.value = Number(page)
    let url = `${kitsu}/manga?page[limit]=${LIMIT}&page[offset]=${currentPage.value * LIMIT}`
    if(route.query.name) url+= `&filter[text]=${route.query.name}`
    try {
      
      const rep = await fetch(
        url
      )
      const res = await rep.json()
      mangas.value = res.data
      const totalLink = new URL(decodeURI(res.links.last)).searchParams.get(
        "page[offset]"
      ) ?? '8'
      
      total.value = Math.round(parseInt(totalLink, 10) / LIMIT)
    } catch (err) {
      console.error(err)
      errorFetch.value = true
    } finally {
      loader.value = false
    }
  }

  /**
   * Get manga by slug
   * @param {string} slug
   */
  const getManga = async (filter: string, {slug} = route.params) => {
    loader.value = true
    debugger
    if (mangas.value.length) {
      manga.value = mangas.value.find((m: any) => m.slug === slug)
      if(manga.value) return true
    }
    try {  
      const rep = await fetch(`${kitsu}/manga?filter[${filter}]=${slug}`)
      const res = await rep.json()
      manga.value = res?.data[0]?.attributes   
    } catch(err) {
      console.error(err)
      errorFetch.value = true
    } finally {
      loader.value = false
    }
    
  }

  watch(route, () => {
    console.error('ee')
    getMangas(route.query.page ? Number(route.query.page) : 0)
  })

  return {manga, mangas, loader, total, currentPage, errorFetch, getManga, getMangas}
}

