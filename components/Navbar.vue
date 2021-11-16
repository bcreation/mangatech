<template>
<div class="navbar d-flex justify-center items-center w-full mt-border-b pa-2">
  <span class="menu material-icons mt-text-color" @click="$emit('toggle')">menu</span>
  <div class="flex-1"></div>
  <router-link to="/">
    <img height="36" src="~/assets/img/mt-logo.svg"/> 
  </router-link>
  <div class="flex-1"></div>
  <FormInputSearch @search="val => $emit('search', val)"></FormInputSearch>
</div>
</template>
<style>
.menu {
  cursor:pointer;
}
.navbar ~ main {
  position: relative;
  top: 64px;
  
}
</style>