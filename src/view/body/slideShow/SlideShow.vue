<template>
  <div  class="swiperbox">
        <swiper
            :slidesPerView="1"
            :spaceBetween="0"
            :loop="true"
            :centeredSlides="true"
            :pagination="{
				clickable: true,
			}" :autoplay="{
				delay: 3500,
				disableOnInteraction: false,
			}"
            class="mySwiper"
            :modules="modules"
        >
          <!--
                   :navigation="true"   // 显示左右箭头
                  :modules="modules"    // 显示下标
          -->
          <swiper-slide  v-for="(item,i) in items.item" :key="i">
            <img :src="item.src"  alt=""  />
          </swiper-slide>
        </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'; // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {reactive} from "vue";
import axios from "axios";
const modules = [Autoplay, Navigation, Pagination, A11y];
const items = reactive({
  item: [
    {
      src: 'https://vc.qpic.cn/tpic/mtviwSDSWALYh/dkq15892vyf9m396/1680',
    },
    {
      src: 'https://puui.qpic.cn/media_img/lena/PICyjbkzz_580_1680/0',
    },
    {
      src: 'https://vc.qpic.cn/tpic/mtviwQFRQq8o9/7sxq5478pyhf7449/1680',
    },
    {
      src: 'https://puui.qpic.cn/media_img/lena/PIC4h7lix_580_1680/0',
    },
    {
      src: 'https://vc.qpic.cn/tpic/mtviwSiCGvSfC/t5qm58186ivc2907/1680',
    },
  ],
})
</script>

<style>
.swiper-wrapper img {
  height: 460px;
  width: 100%;
}
.swiperbox {
  width: 100%;
}
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: rgb(229, 180, 127);
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: #fff;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 8px;
}
</style>
