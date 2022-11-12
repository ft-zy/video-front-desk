<template>
  <n-row>
    <n-row>
      <n-col :span="24">
        <SlideShow></SlideShow>
      </n-col>
    </n-row>
    <n-row>
      <n-col :span="24">
        <Tv_Rec></Tv_Rec>
      </n-col>
      <n-col :span="24">
        <Movie_Rec></Movie_Rec>
      </n-col>
      <n-col :span="24">
        <Anime_Rec></Anime_Rec>
      </n-col>
      <n-col :span="24" style="margin-top: 10px">
        <div class="footer">
            <n-space vertical>
              <div style="line-height: 40px"> 联系邮箱：2401332784@qq.com</div>
              <span>  zy播放网站 </span>
            </n-space>
        </div>
      </n-col>
    </n-row>
  </n-row>
</template>

<script setup>
import SlideShow from "../../view/body/slideShow/SlideShow.vue";
import Tv_Rec from "../../view/body/recommended/Tv_Rec.vue";
import Anime_Rec from "../../view/body/recommended/Anime_Rec.vue";
import Movie_Rec from "../../view/body/recommended/Movie_Rec.vue";

</script>

<style>
.footer {
  height: 80px;
  padding: 10px;
  width: 100%;
  text-align: center;
  color: black;
  background:  #f8f8f8;
  font: 15px '微软雅黑';
}
</style>