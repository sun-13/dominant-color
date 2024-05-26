<script setup>
import { ref, watch, onMounted } from 'vue';
import ColorThief from 'colorthief/dist/color-thief.mjs';
const colorThief = new ColorThief();

const props = defineProps({
  album: Object,
  isActive: Boolean,
});
const imgRef = ref(null);
const backgroundStyle = ref({});

const rgbToHex = ([r, g, b]) => `#${[r, g, b].map(x => {
  const hex = x.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}).join('')}`;

const getColor = () => {
  if (!imgRef.value) {
    return;
  }

  // dominant color
  const color = colorThief.getColor(imgRef.value);
  console.log('Color:', color);
  backgroundStyle.value = {
    backgroundColor: rgbToHex(color),
  };

  // palette
  const palette = colorThief.getPalette(imgRef.value, 3, 10);
  console.log('Palette:', palette);
};

onMounted(() => {
  if (imgRef.value.complete) {
    getColor();
  } else {
    imgRef.value.addEventListener('load', () => {
      getColor();
    });
  }
});


</script>

<template>
  <div class="album" :style="backgroundStyle">
    <img
      ref="imgRef"
      class="album-img"
      :src="album.cover"
      :alt="album.title"
      loading="lazy"
    >
  </div>
</template>

<style scoped>
.album {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  .album-img {
    width: 300px;
    height: 300px;
  }
}
</style>
