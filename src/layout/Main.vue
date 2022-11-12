<template>
  <n-space vertical size="large"  class="layout-container">
    <n-layout position="absolute">
      <n-layout-header  class="header" style="height: 100px">
        <Header></Header>
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 60px; width: 100%;">
        <router-view></router-view>
      </n-layout>
    </n-layout>
  </n-space>
</template>
<script setup>
import Header from "./header/Header.vue";

</script>

<style>
.n-layout-header {
  height: 80px;
  /*box-shadow: 0 1px 1px 0 rgba(0, 0, 0.8, 0.1), 0 6px 20px 0 rgba(0, 0, 0.6, 0.19);*/
  background: #616161;
}
.n-layout-scroll-container{
  height: 1px;
}

</style>