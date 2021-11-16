<template>
 <Loader v-if="loader"></Loader>
 
  <main class="d-flex w-full h-full pa-4" v-else-if="manga && !loader">
  <div class="col-9 pa-4">

    <h1 class="mt-title mb-2">
      <router-link to="/">
        <span class="material-icons mr-4 mt-text-color">arrow_back</span>
      </router-link>
      {{manga.titles.en_jp}}
    </h1>
   
    <ul class="manga-properties">
      <li>Start at: {{$parseDate(manga.startDate)}}</li>
      <li v-if="manga.endDate">End at: {{$parseDate(manga.endDate)}}</li>
      <li>Volume count: {{manga.volumeCount}}</li>
      <li>Chapter count: {{manga.chapterCount}}</li>
      <li>Status: {{manga.status}}</li>
    </ul>
    <div class="description mt-4">
      Description:
      <br>
      {{manga.description}}
    </div>
     <div class="mt-4 d-flex flex-end pa-2">
      <span v-for="star of stars" :key="`start-${star}`" class="rate material-icons mt-text-color">{{star <= userRate ? 'star' : 'star_border'}}</span>
      <div class="flex-1"></div>
      <span class="material-icons mt-text-color">share</span>
      <span class="material-icons  mt-text-color ml-4">favorite_border</span>
    </div> 
  </div>
  <div  class="col-3 pa-2">
    <img class="img-manga" :src="manga.posterImage.original" :alt="`cover of ${manga.titles.en_jp}`"/> 
  </div>
  </main>
</template>

<script setup>
import {init} from '@/mangapi'

const stars = 5
const userRate = computed(() => parseInt(manga.value.averageRating / 20))
// init 
const {manga, loader, getManga} = init()

getManga('slug')
</script>
<style lang="scss">
@import '@/assets/sass/variables';
.img-manga {
  width:100%;
  border-radius: 24px;
  border: 1px solid $mainColor
}
.manga-properties {
  display: flex;
  
  li {
    list-style: none;
    margin: 0 4px;
    &:not(:last-child)::after {
      content: '|';
      margin-left: 4px;
      color: $mainColor;
    }
  }
}
</style>