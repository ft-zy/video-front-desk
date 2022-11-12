<template>
  <n-card title="隐私政策" style="margin: auto; color: black; text-align: center" class="d">
    <n-space vertical>
      <span>xxxxxxxxxxxxxxx</span>
      <span>xxxxxxxxxxxxxxx</span>
      <span>xxxxxxxxxxxxxxx</span>
      <n-button type="info" style="width: 100px;" @click="retBtn">返回</n-button>
    </n-space>
  </n-card>
</template>
<script setup>
  import {useRouter} from "vue-router/dist/vue-router";

  const router = useRouter();

  const retBtn =  async () => {
    await router.push({path: "/login"});
  }
</script>

<style scoped>
.d {
  max-width: 300px;
}
</style>