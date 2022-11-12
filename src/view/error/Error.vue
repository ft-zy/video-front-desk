<template>
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬" style="margin: 200px">
      <template #footer>
        <n-button type="primary" style="width: 120px;" @click="GoMain">
          回到首页
        </n-button>
      </template>
    </n-result>
</template>

<script setup>
import {useRouter} from "vue-router/dist/vue-router";
const router = useRouter()
const GoMain =  async () => {
  await router.push({path: "/"});
}
</script>

<style>

</style>