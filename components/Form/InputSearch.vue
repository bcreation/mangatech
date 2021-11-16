<template>
<div class="input-search-wrapper" :class="{active}" @mouseenter="active = true" @mouseleave="active = false">
  <input class="input-search" v-model="inputValue" name="search" aria-label="Search" placeholder="search" />
  <span class="material-icons mt-text-color" @click="$emit('search', inputValue)">search</span>
</div>
</template>
<script setup>
const inputValue = ref()
const active = ref(false)

</script>
<style lang="scss">
@import '@/assets/sass/variables';
.input-search-wrapper {
  display: flex;
  border-radius: 8px;
  padding: 4px 8px;
  transition: all .3s ease-in-out;
  border:none;
  &.active{
    border: 1px solid $mainColor;
    transition: all .3s ease-in-out;
    .input-search {
      transition: all .3s ease-in-out;
      opacity: 1;
      
    }
  }
  .input-search {
    transition: all .3s ease-in-out;
    &:focus {
      transition: all .3s ease-in-out;
      opacity: 1;
    }
    
    
    border: none;
    opacity: 0;
  }
}
</style>