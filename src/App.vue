<template>
  <div class="app-main">
    <router-link to="/demo">Go to demo</router-link>
    <span> | </span>
    <router-link to="/home">Go to home</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

<style scoped lang="scss">
.app-main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
</style>
