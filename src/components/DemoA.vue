<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <swiper-container
    :slides-per-view="1"
    :space-between="spaceBetween"
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
    <swiper-slide>
      <div class="slide-page">Slide 1</div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-page">Slide 2</div>
    </swiper-slide><swiper-slide>
      <div class="slide-page">Slide 3</div>
    </swiper-slide><swiper-slide>
      <div class="slide-page">Slide 4</div>
    </swiper-slide>
  </swiper-container>
</template>

<style scoped>
.slide-page {
  width: 100%;
  height: 500px;
  background: red;
}
</style>
