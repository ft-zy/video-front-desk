<template>
  <n-space vertical class="box">
    <div>
      <b style="font: 2.5em '宋体'">
        电影
      </b>
    </div>
    <n-row gutter="24">
      <n-col :span="4" v-for="(item, index) in data.list" :key="index">
        <n-card  class="d1" @click="detail(item.vid)">
          <template #cover class="ico_play">
            <img :src="item.vphoto" :alt="item.vname" class="image">
          </template>
        </n-card>
        <br>
        <n-tag type="success" style="margin-right: 10px">{{item.vname}}</n-tag>
        <n-tag type="success">{{item.videoYear}}</n-tag>
      </n-col>
    </n-row>
  </n-space>
</template>


<script setup>
import {onMounted, reactive} from "vue";
import request from "../../../http/request";
import  frontDeskUrl from '../../../api/Front-desk-url'
import router from "../../../router";
const data = reactive({
  list: [],
  in: []
})

const getList = ()=> {
  request.get( frontDeskUrl().videoList).then((res)=> {
    data.list = res.data
    console.log(res)
  })
}

const detail = (vid)=> {
  router.push({ path: '/play_movie', query: { vid: vid } });
}

onMounted(()=> {
  getList()
})

</script>

<style>
.d1 {
  font: 5px '宋体';
  width: 188px;
  cursor: pointer;
  border:1px solid #fff;

}
.d1:hover {
  border:2px solid #cf9;
}
.d1:hover .image{
  background: #616161;
}

.box {
  margin: 20px 150px 20px 150px;
}
.image {
  width: 100px;
}


</style>