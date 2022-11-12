<template>
  <div class="login">
    <div class="card">
      <n-card content-style="padding: 0;" class="d">
        <n-tabs
            type="line"
            size="large"
            :tabs-padding="20"
            pane-style="padding: 10px;"
        >
          <n-tab-pane name="登录" style="margin: 10px auto 10px 25px">
            <Login></Login>
          </n-tab-pane>
          <n-tab-pane name="注册" style="margin: 10px 20px 10px 25px">
            <Registered></Registered>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import Login from "./Login.vue";
import Registered from "./Registered.vue";


</script>

<style>
body{
  /*!* 背景图垂直、水平均居中 *!*/
  background-position: center center;
  /*!* 背景图不平铺 *!*/
  background-repeat: no-repeat;
  /*!* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 *!*/
  background-attachment: fixed;
  /*!* 让背景图基于容器大小伸缩 *!*/
  background-size: cover;
  /*!* 设置背景颜色，背景图加载过程中会显示背景色 *!*/
  background-color: #464646;
  background-image: url('../../assets/2.png');
}
.card {
  width: 440px;
  position: absolute;
  margin: 140px 550px auto 550px;
  display: flex;
  /*background-color: rgba(196, 87, 87, 0.6);*/
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(0.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(216, 197, 197, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  color: rgb(0, 0, 0);
}

.d {
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(216, 197, 197, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  color: rgba(255, 255, 255, 0.75);
}

.n-tabs.n-tabs--line-type .n-tabs-tab.n-tabs-tab--active, .n-tabs.n-tabs--bar-type .n-tabs-tab.n-tabs-tab--active {
  color: white;
  font: 18px 微软雅黑;
}

.reg:hover {
  margin: 80px 550px auto 550px;
}

</style>