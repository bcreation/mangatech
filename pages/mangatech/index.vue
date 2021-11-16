<template>
  <Loader v-if="loader"></Loader>
  <main class="d-flex w-full h-full items-center flex-col" v-else>
    <div class="mt-960 d-flex flex-wrap" v-if="mangas.length">
        <Card v-for="manga of mangas" :item="manga.attributes" :key="`manga-${manga.id}`"/>
        <div v-if="errorFetch" class="mt-text-font mt-text-color">Connection error. Please try later</div>
    </div>
    <div v-else>Nothing here</div>

    <div class="mt-960 d-flex py-8">
      <pagination :current="currentPage" :total="total" @set-current="page => getMangas(page)"></pagination>
    </div>
  </main>
</template>
<script setup>
const mangas = []
// import {init} from '@/mangapi'
// // init 
// const {mangas, errorFetch, currentPage, total, loader, getMangas} = init()
getMangas()
</script>