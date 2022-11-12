<template>
  <div style="margin: auto">
    <n-form  :model="model">
      <n-form-item>
        <input class="inputs" type="number" maxlength="6" v-model="model.code" />
        <span class="icon" v-for="item in 6" :key="item" > {{model.code[item-1]?model.code[item-1]:''}}</span>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const model = reactive({
  code: ''
})
</script>

<style>
  .inputs {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .icon {
    /*width: 10px;*/
    /*height: 10px;*/
    /*text-align: center;*/
    /*background-color: #F2F2F2;*/
    /*border-radius: 10px;*/
    /*line-height: 80px;*/
  }
</style>