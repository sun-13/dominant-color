<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DemoA from './components/DemoA.vue'
import { register } from 'swiper/element/bundle'
import 'swiper/css'
register()
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <DemoA msg="Demo A" />
</template>

<style scoped>
</style>
