<template>
<div class="mt-card">
  <img width="240" :src="item.posterImage.original" :alt="`cover of ${item.titles.en_jp}`"/> 
  <div class="content pa-2 d-flex flex-col justify-sp-b">
    <h3 class="mt-title d-flex w-full">
      {{item.titles.en_jp}}
    </h3>
    
    <div class="content-desc">
      {{item.description}}
    </div>
      <router-link :to="`/manga/${item.slug}`" class="mt-text-color mt-text-font pa-1">more</router-link>
    <div class="content-actions d-flex flex-end pa-2">
      <span v-for="star of stars" :key="`start-${star}`" class="rate material-icons mt-text-color">{{star <= userRate ? 'star' : 'star_border'}}</span>
       <!-- @mouseenter="userRate = star" @mouseleave="userRate = rate" -->
      <div class="flex-1"></div>
      <span class="material-icons mt-text-color">share</span>
      <span class="material-icons  mt-text-color">favorite_border</span>
    </div>
    <!-- <span class="material-icons mt-text-color">favorite</span> -->
  </div>
</div>
</template>
<script setup>
const props = defineProps({
  rate: {type: Number, default: 0 },
  item: {type: Object, default: () => {}}
})
const stars = 5
const userRate = computed(() => parseInt(props.item.averageRating / 20))

</script>
<style lang="scss">
@import '@/assets/sass/variables';
.mt-card {
  position:relative;
  height: 326px;
  width: 236px;
  background: #010101;
  box-shadow: 2px 2px 5px rgba(192, 0, 0, 0.6);
  border-radius: 24px;
  border : 2px solid $mainColor;
  overflow:hidden;
  margin: 16px;
  transition: 0.1s ease-in-out;

  img {
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.1);
    transition: 0.1s ease-in-out;
    box-shadow: 2px 2px 10px rgba(192, 0, 0, 0.9);
    .content{
      transition: 0.2s ease-in-out;
      height: calc(100%);
      background: rgba(255, 255, 255, 0.9);
      top:0;
      .content-desc,
      .content-actions {
        display: flex;
      }
    }
  }
  .content {
    transition: 0.3s ease-in-out;
    display: flex;
    background: rgba(255, 255, 255, 0.7);
    position: absolute;
    height:36px;
    left: 0;
    right: 0;
    top: calc(100% - 36px);
    bottom: 0;
    border-bottom-right-radius: 22px;
    border-bottom-left-radius: 22px;

    .content-desc,
    .content-actions {
      display: none;
      span {
        margin-left: 8px;
      }
      
    }

    .content-desc {
      font-size: small;
      text-overflow: ellipsis;
      padding: 8px;
      width: 100%; 
      overflow: hidden;
    }

    .rate:first-child {
      margin-left: 0;
    }

    
  }
}
</style>