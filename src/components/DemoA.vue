<script setup>
import { ref } from 'vue'
import Album from './Album.vue';
import { albums } from '../albums.js';

defineProps({
  msg: String,
})

const onProgress = (progress) => {
  console.log('-- progress', progress)
}

const onSlideChange = (swiper) => {
  console.log('-- slide change', swiper)
}

</script>

<template>
  <swiper-container
    :slides-per-view="1"
    :space-between="0"
    :centered-slides="true"
    :navigation="true"
    :pagination="{
      hideOnClick: false,
    }"
    :loop="true"
    :breakpoints="{
      768: {
        slidesPerView: 1,
      },
    }"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
  >
    <swiper-slide v-for="album in albums" class="slide-page">
        <Album :key="album.id" :album="album" />
    </swiper-slide>
  </swiper-container>
</template>

<style scoped>
.slide-page {
  width: 100%;
  height: 500px;
}
</style>
