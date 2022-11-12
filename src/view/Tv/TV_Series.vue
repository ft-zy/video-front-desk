<template>
  <div>
    <vue3VideoPlay v-bind="options" :src="dd.src" :title='dd.title' />
  </div>
</template>

<script setup >
import { reactive } from 'vue';
import VideoPlay from "../../composable/video-play/VideoPlay";

const { options } = VideoPlay();

const dd = reactive({
  src:"http://localhost:8089/zy/video_web/video/2022/10/28/7f93ee5ad87049bc8e04d7a6cd508a54.mp4",
  title: "dddd"
})

</script>

<style scoped>
</style>
