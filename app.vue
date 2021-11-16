<template>
  <div id="mt" class="w-full h-s-full">
    <Navbar @toggle="toggleMenu = !toggleMenu" @search="val => $router.push({path: '/', query: {page: '0', name: val}})"/>
    <Sidebar :class="{active: toggleMenu}" @toggle="toggleMenu = !toggleMenu"/>
    <NuxtPage/>
  </div>
</template>
<script setup>
const toggleMenu = ref(false)
</script>
<style lang="scss">

#mt {
  position: relative;
  display: contents;
}
</style>