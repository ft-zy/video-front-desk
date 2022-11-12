<template>
  <div>
<!--    <vue3VideoPlay v-bind="options" :src="list.src.vurl" :title='list.src.title' />-->
  </div>
  <br>
  <div>
    {{list.src}}
  </div>
  <template v-for="(item, index) in 3">
    <n-button size="large" style="margin: 10px" @click="btn">第{{index+1}}集</n-button>
  </template>

</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import {get} from "../../http/request";
import frontDeskUrl from "../../api/Front-desk-url";
import {useRoute} from "vue-router/dist/vue-router";
import router from "../../router";

const list = reactive({
  name:[],
  src: []
})

const btn = ()=> {
  alert(route.query.aid)
}


const route = useRoute();

const VideoInfo = () => {
  get(frontDeskUrl().getByIdAnimeList + 1).then((res)=> {
    if (res && res.code === 200) {
      console.log(res.data)
      for(let p in res.data){//遍历json数组时，这么写p为索引
        console.log(res.data[p].name + " " + res.data[p].count + " " + res.data[p].vurl)

      }
    }
  })
}

onMounted(() => {
  VideoInfo()
})


</script>

<style scoped>

</style>