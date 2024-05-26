<script setup>
defineProps({
  album: Object,
})

</script>

<template>
  <div class="album">
    <img class="album-img" :src="album.cover" :alt="album.title">
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
