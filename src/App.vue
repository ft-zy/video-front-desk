<template>
  <n-notification-provider>
      <GlobalContainer></GlobalContainer>
  </n-notification-provider>
  <router-view></router-view>
</template>

<script setup>
import GlobalContainer  from './global.vue'
</script>

<style >

</style>