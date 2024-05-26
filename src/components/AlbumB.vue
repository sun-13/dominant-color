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
const gradientStyle1 = ref({});
const gradientStyle2 = ref({});
const gradientStyle3 = ref({});

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
    background: rgbToHex(color),
  };

  // palette
  const palette = colorThief.getPalette(imgRef.value, 3, 10);
  console.log('Palette:', palette);
  gradientStyle1.value = {
    background: rgbToHex(palette[0]),
  };
  gradientStyle2.value = {
    background: rgbToHex(palette[1]),
  };
  gradientStyle3.value = {
    background: rgbToHex(palette[2]),
  };
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
    <div class="gradient gradient-3" :style="gradientStyle3"></div>
    <div class="gradient gradient-1" :style="gradientStyle1"></div>
    <div class="gradient gradient-2" :style="gradientStyle2"></div>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  overflow: hidden;

  .gradient {
    position: absolute;
    z-index: 0;

    &.gradient-1 {
      width: 1000px;
      height: 1000px;
      top: -550px;
      right: -550px;
      border-radius: 50%;
      filter: blur(300px);
    }

    &.gradient-2 {
      width: 800px;
      height: 800px;
      left: -400px;
      bottom: -400px;
      border-radius: 50%;
      filter: blur(200px);
    }

    &.gradient-3 {
      width: 600px;
      height: 600px;
      top: 100px;
      right: -300px;
      border-radius: 50%;
      filter: blur(100px);
    }
  }

  .album-img {
    position: relative;
    z-index: 1;
    width: 300px;
    height: 300px;
  }
}
</style>
