<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  album: Object,
  isActive: Boolean,
});

const isColorFetched = ref(false);

watch(() => props.isActive, (isActive) => {
  if (!isActive || isColorFetched.value) {
    return;
  }
  console.log('TODO : fetch color');
},
{
  immediate: true,
});

// onMounted(() => {
//   console.log('mounted');
// });

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
