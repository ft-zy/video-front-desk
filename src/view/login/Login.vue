<template>
  <div class="login">
    <n-form
        ref="formRef"
        :rules="rules"
        :model="LoginModel"
        :style="{ maxWidth: '360px' }"
        label-placement="left"
    >
      <n-form-item path="username">
        <n-input v-model:value="LoginModel.username" size="large" placeholder="请输入账号" clearable >
          <template #prefix>
            <n-icon :component="PersonOutline" />
          </template>
        </n-input>
      </n-form-item>

      <n-form-item path="password">
        <n-input
            v-model:value="LoginModel.password"
            clearable
            size="large"
            type="password"
            show-password-on="mousedown"
            placeholder="密码"
            :maxlength="8"
        >
          <template #prefix>
            <n-icon :component="LockClosedOutline" />
          </template>
        </n-input>
      </n-form-item>

      <n-form-item path="verCode">
        <n-grid :cols="3">
          <n-gi :span="2">
            <n-input
                v-model:value="LoginModel.verCode"
                clearable
                size="large"
                show-password-on="mousedown"
                placeholder="验证码"
            >
              <template #prefix>
                <n-icon :component="VerifiedOutlined" />
              </template>
            </n-input>
          </n-gi>
          <n-gi>
            <img :src="captcha.list" style="margin-left: 3px; height: 38px; border-radius: 5px" @click="getCaptcha3" alt="验证码" />
          </n-gi>
        </n-grid>
      </n-form-item>
      <input type="hidden" :value="LoginModel.uuid = VerKey.list">
      <n-form-item>
        <n-grid :cols="4">
          <n-gi>
            <n-checkbox v-model:checked="value">
              记住密码
            </n-checkbox>
          </n-gi>
          <n-gi offset="2">
            <n-space @click="forgot">
              忘记密码
            </n-space>

          </n-gi>
        </n-grid>
      </n-form-item>

      <n-form-item>
        <n-space>
          <n-button style="width: 130px; margin-left: 35px; " type="success" attr-type="button" @click="doLogin">
            登录
          </n-button>
          <n-button style="width: 130px; margin-left: 28px" type="warning" attr-type="button" @click="btnReset">
            重置
          </n-button>
        </n-space>
      </n-form-item>
    </n-form>
  </div>

</template>

<script setup>
import { defineComponent, reactive, ref } from "vue";
import { PersonOutline, LockClosedOutline } from '@vicons/ionicons5'
import {VerifiedOutlined } from '@vicons/antd'
import VerificationCode from "../../composable/login/VerificationCode";
import LoginCheck from "../../composable/login/LoginCheck";
import request from "../../http/request";
import {useRouter} from "vue-router/dist/vue-router";
import {setNetName, setToken, setUid} from "../../utils/auth";
import frontDeskUrl from "../../api/Front-desk-url";

    const formRef = ref(null);

    const router = useRouter();

    const forgot =  async () => {
      await router.push({path: "/forgot"});
    }

    const {  LoginModel, rules } = LoginCheck()

  const doLogin = () => {
        formRef.value?.validate((errors) => {
          if (!errors) {
            request.post(frontDeskUrl().Login, LoginModel).then((res)=> {
              if (res && res.code === 200 ) {
                window.$notification.success({
                  content: "欢迎账号" + LoginModel.username +"用户登录",
                  duration: 2500,
                  keepAliveOnHover: true
                });
                setToken(res.data.token);
                setUid(res.data.uid);
                setNetName(res.data.netName)
                router.push({path: "/main"});
              } 

              if (res && res.code === 666) {
                window.$notification.errors({
                  content: "账号或密码错误FFF",
                  duration: 2500,
                  keepAliveOnHover: true
                });
              }
            })

          } else {
            console.log("登录失败")
          }
        });
      }
    
    const { captcha, getCaptcha3, VerKey } = VerificationCode();

    const btnReset = () => {
      LoginModel.name = '';
      LoginModel.password = '';
      LoginModel.validation=''
    }
</script>

<style>
/*body{*/
/*  !*!* 背景图垂直、水平均居中 *!*!*/
/*  background-position: center center;*/
/*  !*!* 背景图不平铺 *!*!*/
/*  background-repeat: no-repeat;*/
/*  !*!* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 *!*!*/
/*  background-attachment: fixed;*/
/*  !*!* 让背景图基于容器大小伸缩 *!*!*/
/*  background-size: cover;*/
/*  !*!* 设置背景颜色，背景图加载过程中会显示背景色 *!*!*/
/*  !*background-color: #464646;*!*/
/*  background-image: url('../../assets/2.png');*/
/*}*/
/*.login {*/
/*  width: 360px;*/
/*  padding: 20px;*/
/*  position: absolute;*/
/*  margin: 200px 550px auto 550px;*/
/*  background-color: rgba(255, 255, 255, 0.1);*/
/*  backdrop-filter: blur(2.5px);*/
/*  -webkit-backdrop-filter: blur(2.5px);*/
/*  border: 1px solid rgba(255, 255, 255, 0.18);*/
/*  box-shadow: rgba(216, 197, 197, 0.19) 0px 6px 15px 0px;*/
/*  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;*/
/*  border-radius: 12px;*/
/*  -webkit-border-radius: 12px;*/
/*  color: white;*/
/*}*/
</style>