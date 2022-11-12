<template>
  <n-input-group>
    <n-input :style="{ width: '100%' }" />
    <n-button strong  type="success">
      <template #icon>
        <n-icon color="#ffff">
          <plane-icon/>
        </n-icon>
      </template>
    </n-button>
  </n-input-group>
</template>

<script setup>
import { PaperPlane as PlaneIcon } from "@vicons/ionicons5";

</script>

<style>

</style>