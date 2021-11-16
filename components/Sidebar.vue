<template>
<div class="sidebar pa-2">
  <span class="menu material-icons mt-text-color" @click="$emit('toggle')">close</span>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/mangatech">My mangatech</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</div>
</template>
<style lang="scss">
@import '@/assets/sass/variables';
.sidebar {
  z-index: 11;
  position: absolute;
  left: 0;
  top:0;
  bottom:0;
  width: 250px;
  background:white;
  border-right: 1px solid $mainColor;
  transform: translateX(-250px);
  transition: all .3s ease-out;
  opacity: 0;
  &.active {
    opacity: 1;
    transition: all .1s ease-in;
    transform: translateX(0);
  }

}
</style>