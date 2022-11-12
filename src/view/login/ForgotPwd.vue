<template>
  <div class="R">
    <n-space class="Edit" >
      <n-form
          ref="formRef"
          v-show="show"
          :model="SendModel"
          :rules="rules"
          :style="{ maxWidth: '360px' }"
          label-placement="left"
      >
        <n-form-item path="email">
          <n-input
              clearable
              size="large"
              v-model:value="SendModel.email"
              show-password-on="mousedown"
              placeholder="请输入邮箱"
          >
            <template #prefix>
              <n-icon :component="At" />
            </template>
          </n-input>
        </n-form-item>
        <input type="hidden" :value="SendModel.uuid = Verkey.list">
        <input  type="hidden" name="Vcode" :value="SendModel.Vcode = VerCode.list">
        <n-form-item path="verCode">
          <n-grid :cols="3">
            <n-gi :span="2">
              <n-input
                  v-model:value="SendModel.verCode"
                  clearable
                  size="large"
                  show-password-on="mousedown"
                  placeholder="邮箱验证码"
              >
                <template #prefix>
                  <n-icon :component="ShieldHalfOutline" />
                </template>
              </n-input>
            </n-gi>
            <n-gi>
              <n-button
                  type="info" @click="getVerification"
                  style="margin-left: 3px; width: 96px; height: 38px; border-radius: 5px"
                  :disabled="isDisposed">
                {{ isDisposed ? `${time}s后重新获取` : "获取验证码" }}
              </n-button>
            </n-gi>
          </n-grid>
        </n-form-item>
        <n-form-item>
          <n-space vertical>
            <n-button style="width: 320px; " :disabled="!SendModel.email" type="info" attr-type="button" @click="GetUserInfo">
              发送
            </n-button>
            <n-button style="width: 320px;"  type="success" attr-type="button" @click="main">
              返回
            </n-button>
          </n-space>
        </n-form-item>
      </n-form>


      <n-form
          ref="editRef"
          :model="EditModel"
          v-show="show2"
          :rules="rules2"
          :style="{ maxWidth: '360px' }"
          label-placement="left"
      >
        <input type="hidden" :value="EditModel.uid = Uid" />
        <n-form-item path="password">
          <n-input
              clearable
              size="large"
              v-model:value="EditModel.password"
              show-password-on="mousedown"
              placeholder="请输入重置密码"
          >
            <template #prefix>
              <n-icon :component="At" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="reenteredPassword">
          <n-input
              clearable
              size="large"
              v-model:value="EditModel.reenteredPassword"
              show-password-on="mousedown"
              placeholder="确定重置密码"
          >
            <template #prefix>
              <n-icon :component="At" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item>
          <n-space vertical>
            <n-button style="width: 320px; " :disabled="!EditModel.password" type="info" attr-type="button" @click="EditUser">
              重置
            </n-button>
            <n-button style="width: 320px;"  type="success" attr-type="button" @click="main">
              返回
            </n-button>
          </n-space>
        </n-form-item>
      </n-form>
      
    </n-space>
  </div>

</template>

<script setup>
import { At, ShieldHalfOutline } from '@vicons/ionicons5'
import {onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router/dist/vue-router";
import request, {get, post, put} from "../../http/request";
import frontDeskUrl from "../../api/Front-desk-url";
import RetrievPwd from "../../composable/user/RetrievPwd";
import {clearSession} from "../../utils/auth";

  const formRef = ref(null);

  const editRef = ref(null);

  const router = useRouter();

  const show = ref(true)

  const show2 = ref(false)

  const main =  async () => {
     window.location = router.push({path: "/"});
  }

  const {  SendModel, rules, EditModel, rules2} = RetrievPwd()

  const Verkey = reactive({
    list: []
  })

  const VerCode = reactive({
    list: []
  })

  const time = ref(60);
  const isDisposed = ref(false);

  const handleTimeChange = () => {
    if (time.value <= 0) {
      isDisposed.value = false;
      time.value = 60;
    } else {
      setTimeout(() => {
        time.value--;
        handleTimeChange();
      }, 1000);
    }
  }

  const getVerification = ()=> {
    isDisposed.value = true;
    handleTimeChange();
    request.get(frontDeskUrl().getCode+SendModel.email).then((res)=> {
      if (res && res.code === 200) {
        Verkey.list = res.data.key
        VerCode.list = res.data.verCode
        console.log(res.data.verCode)
      }
    })
  }

  const Uid = ref();

  const GetUserInfo =  () => {
    formRef.value?.validate((errors) => {
      if (!errors) {
        post(frontDeskUrl().getEmail+SendModel.email).then((res) => {
          if (res && res.code === 200) {
            console.log(res.data.uid + "-----------------")
            Uid.value = res.data.uid
            show.value = false;
            show2.value = true
          }
        })
      } else {
        console.log("验证失败")
      }
    });
  }

  const EditUser =  () => {
    editRef.value?.validate((errors) => {
      if (!errors) {
        post(frontDeskUrl().edit_password, EditModel).then((res) => {
          if (res && res.code === 200 ) {
            window.$notification.success({
              content: '修改成功',
              meta: '已切换到登录界面请重新进行登录。',
              duration: 2500,
              keepAliveOnHover: true
            });
             router.push({path: "/login"});
          }
        })
      } else {
        console.log("验证失败")
      }
    });
}

</script>
<style>
body {
  width: 100%;
  margin: 0;
  padding: 0;
  /*!* 背景图垂直、水平均居中 *!*/
  background-position: center center;
  /*!* 背景图不平铺 *!*/
  background-repeat: no-repeat;
  /*!* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 *!*/
  background-attachment: fixed;
  /*!* 让背景图基于容器大小伸缩 *!*/
  background-size: cover;
  /*!* 设置背景颜色，背景图加载过程中会显示背景色 *!*/
  /*background-color: #464646;*/
  background-image: url('../../assets/2.png');
}
.Edit {
  padding: 25px;
  width: 320px;
  border-radius: 10px;
  margin: 180px 550px 10px 560px;
  background-color: rgba(255, 255, 255, 0.25);
  -webkit-backdrop-filter: blur(0.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(216, 197, 197, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;

}
</style>