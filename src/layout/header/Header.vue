<template>
  <n-grid :x-gap="24" :cols="5"  >
    <n-gi>
      <img class="img" :src="img "  alt="zy视频"/>
    </n-gi>
    <n-gi style="margin-top: 15px">
      <n-menu mode="horizontal" :options="menuOptions"  />
    </n-gi>
    <n-gi style="margin-top: 15px">
      <Input></Input>
    </n-gi>
    <n-gi style="margin-top: 15px">
      <Portrait></Portrait>
    </n-gi>
  </n-grid>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";

import Portrait from "./Portrait.vue";
import img from '../../assets/1.png';
import Input from "./Input.vue";
import MenuRouter from "../../composable/menuRouter/MenuRouter";

const {menuOptions} = MenuRouter()

</script>

<style>
/*.header {*/
/*  height: 100px;*/
/*}*/
.img {
  position: fixed;
  left: 8%;
  margin-bottom: 30px;
  width: 170px;
  height: 80px;
}

.n-menu.n-menu--horizontal .n-menu-item-content .n-menu-item-content-header a {
  color: white;
}


</style>