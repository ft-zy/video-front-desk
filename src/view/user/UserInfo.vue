<template>
  <div class="user">
    <n-space class="card2" >
      <n-grid :x-gap="12" :cols="3">
        <n-gi >
          <template v-for="item in data">
            <n-space vertical style="margin-left: 150px">
              <n-space style="margin: 90px 0 5px 2px">用户昵称：{{item.netName}} </n-space>
              <n-space  style="margin: 10px 0 5px 2px"> 用户账号：{{item.username}}</n-space>
              <n-space  style="margin: 10px 0 5px 2px"> 用户邮箱：{{item.email}}</n-space>
            </n-space>
          </template>
        </n-gi>
        <n-gi :offset="2">
          <n-button type="success" @click="main">返回主页</n-button>
        </n-gi>
      </n-grid>

    </n-space>

  </div>

</template>
<script setup>
import {onMounted, reactive} from "vue";
import {get} from "../../http/request";
import frontDeskUrl from "../../api/Front-desk-url";
import { getUid } from "../../utils/auth";
import {useRouter} from "vue-router/dist/vue-router";

  const router = useRouter();

  const main =  async () => {
    await router.push({path: "/"});
  }
  const getId = getUid()

  const data = reactive({
    list: []
  })

  const getList = async ()=> {
    await get( frontDeskUrl().getByIdInfo+getId).then((res)=> {
      if (res && res.code === 200) {
        data.list = res.data
        console.log(res.data.username)
      }
    })
  }

  onMounted(()=> {
    getList()
  })

</script>
<style scoped>
.user {
  width: 100%;
  /*!* 背景图垂直、水平均居中 *!*/
  /*background-position: center center;*/
  /*!*!* 背景图不平铺 *!*!*/
  background-repeat: no-repeat;
  /*!*!* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 *!*!*/
  background-attachment: fixed;
  /*!*!* 让背景图基于容器大小伸缩 *!*!*/
  background-size: cover;
  /*!* 设置背景颜色，背景图加载过程中会显示背景色 *!*/
  background-image: url('../../assets/3.png');
}
.card2 {
  font: 20px '宋体';
  margin: 100px ;
  color: white;
  height: 300px;
  background-color: rgba(215, 198, 198, 0.25);
  backdrop-filter: blur(1px);
}


</style>