<template>
  <n-space vertical>
    <div class="tv">
      <div style="margin-left: 150px">
        <vue3VideoPlay v-bind="options"  :src="num"  :title='list.src.title' />
        <div style="color: white; font: 25px 微软雅黑">
          <div v-for="(item,index) in name.list" :key="index">
            <n-space vertical>
              <div>
                {{item.name}} {{number}} 话
              </div>
              <div>
                <n-popover trigger="hover" >
                  <template #trigger>
                    <n-tag type="success">简介</n-tag>
                  </template>
                  <div class="text-wrapper">
                    {{item.info}}
                  </div>
                </n-popover>
                <n-tag type="success">   {{item.region}} </n-tag>
                <n-tag type="success"> {{item.videoYear}} </n-tag>
                <n-tag type="success">  {{item.typeName}}</n-tag>
              </div>
            </n-space>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-left: 50px;">
      <n-space vertical >
        <div style="font: 20px 微软雅黑">
          集数
        </div>
        <div>
          <template v-for="(item, index) in count" :key="index">
            <n-button style="margin: 10px" @click="btn(index)">第{{index+1}}集</n-button>
          </template>
        </div>
      </n-space>
    </div>
  </n-space>
</template>

<script setup >
import {onMounted, reactive, ref} from 'vue';
import VideoPlay from "../../composable/video-play/VideoPlay";
import {useRoute} from "vue-router/dist/vue-router";
import {get, post} from "../../http/request";
import frontDeskUrl from "../../api/Front-desk-url";

const { options } = VideoPlay();

const count = ref()

const list = reactive({
  src: []
})

const name = reactive({
  list: []
})

const num = ref()

const number = ref()

const route = useRoute();

const VideoInfo = () => {
  get(frontDeskUrl().getByIdTvList + route.query.tvid).then((res)=> {
    if (res && res.code === 200) {
      let size = 1;
      console.log(res)

      for(let key in res.data){//遍历json数组时，这么写p为索引
        console.log(res.data[0].vurl)
        if(res.data.hasOwnProperty(key)) {
          count.value = size++
        }
        list.src = res.data
      }
      console.log(size + "------------------")
    }
  })
}

const VideoNameInfo = ()=> {
  get(frontDeskUrl().getTvNameByIdInfo + route.query.tvid).then((res)=> {
    if (res && res.code === 200) {
      name.list = res.data
      console.log(res.data+ "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    }
  })
}

const btn = (key)=> {
  num.value = list.src[key].vurl
  console.log(list.src[key].vurl)
  console.log(list.src[key].count)
  number.value = list.src[key].count
  console.log(num.value)
}

onMounted(() => {
  VideoInfo();
  VideoNameInfo()
})
</script>
<style >
.tv {
  width: 130%;
  height: 100%;
  background: #000028;
}
.text-wrapper {
  width: 500px;
  word-break: break-all;
  word-wrap: break-word
}
</style>
