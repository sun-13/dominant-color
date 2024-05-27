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
    <div class="gradients">
      <div class="gradient gradient-3" :style="gradientStyle3"></div>
      <div class="gradient gradient-1" :style="gradientStyle1"></div>
      <div class="gradient gradient-2" :style="gradientStyle2"></div>
    </div>
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
  
  .gradients {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    filter: blur(100px);
  }

  .gradient {
    position: absolute;
    border-radius: 50%;
    animation-timing-function: ease-in-out;

    &.gradient-1 {
      z-index: 2;
      width: 120vh;
      height: 120vh;
      top: -60vh;
      right: -60vh;
      animation: gradient1 10s infinite;
    }

    &.gradient-2 {
      width: 100vh;
      height: 100vh;
      left: -50vh;
      bottom: -50vh;
      animation: gradient2 14s infinite;
    }

    &.gradient-3 {
      z-index: 3;
      width: 80vh;
      height: 80vh;
      top: 20vh;
      right: -40vh;
      animation: gradient3 8s infinite;
    }
  }

  .album-img {
    position: relative;
    z-index: 10;
    width: 300px;
    height: 300px;
  }
}

@keyframes gradient1 {
  0% {
    top: -60vh;
    right: -60vh;
    transform: scale(1);
  }
  50% {
    top: 0;
    right: 0;
    transform: scale(1.5);
  }
  100% {
    top: -60vh;
    right: -60vh;
    transform: scale(1);
  }
}

@keyframes gradient2 {
  0% {
    left: -50vh;
    bottom: -50vh;
    transform: scale(1);
  }
  50% {
    left: 0;
    bottom: 0;
    transform: scale(1.5);
  }
  100% {
    left: -50vh;
    bottom: -50vh;
    transform: scale(1);
  }
}

@keyframes gradient3 {
  0% {
    top: 20vh;
    right: -40vh;
    transform: scale(1);
  }
  50% {
    top: 80vh;
    right: 0px;
    transform: scale(2);
  }
  100% {
    top: 20vh;
    right: -40vh;
    transform: scale(1);
  }
}
</style>
