<script setup>
import { ref } from 'vue'
import AlbumA from './AlbumA.vue';
import AlbumB from './AlbumB.vue';
import { albums } from '../albums.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination];

const currentSlideIndex = ref(0);

const onSwiper = (e) => {
  // console.log(e);
};

const onSlideChange = (e) => {
  // console.log('slide change', e.activeIndex);
  currentSlideIndex.value = e.activeIndex;
};

</script>

<template>
  <Swiper
    class="swiper-container"
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :centered-slides="true"
    navigation
    :pagination="{
      hideOnClick: false,
    }"
    :loop="false"
    :breakpoints="{
      768: {
        slidesPerView: 1,
      },
    }"
    lazy="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide :key="album.id" v-for="(album, i) in albums" class="slide-page">
        <AlbumB :album="album" :isActive="currentSlideIndex === i" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100vh;
}

.slide-page {
  width: 100%;
  height: 100%;
}
</style>
