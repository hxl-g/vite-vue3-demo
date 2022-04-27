<template>
  <div>
    {{ data }}
    <div>-----------------</div>
  </div>
</template>

<script setup lang="ts" name="name">
import { ref } from 'vue'

const data: any = ref('home')
</script>

<style scoped lang="scss"></style>
