<template>
  <n-form
      ref="formRef"
      :model="RegisteredMode"
      :rules="rules"
      :style="{ maxWidth: '360px' }"
      label-placement="left"
  >
    <n-form-item path="netName">
      <n-input size="large" v-model:value="RegisteredMode.netName" placeholder="请输入用户名" clearable >
        <template #prefix>
          <n-icon :component="PersonOutline" />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item path="username">
      <n-input size="large" v-model:value="RegisteredMode.username" placeholder="请输入账号" clearable >
        <template #prefix>
          <n-icon :component="PersonOutline" />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item path="email">
      <n-input
          clearable
          size="large"
          v-model:value="RegisteredMode.email"
          show-password-on="mousedown"
          placeholder="请输入邮箱"
      >
        <template #prefix>
          <n-icon :component="At" />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item path="verCode">
      <n-grid :cols="3">
        <n-gi :span="2">
          <n-input
              v-model:value="RegisteredMode.verCode"
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
          <n-button type="info" @click="getVerification" style="margin-left: 3px; width: 115px; height: 38px; border-radius: 5px" :disabled="isDisposed"> {{ isDisposed ? `${time}s后重新获取` : "获取验证码" }}</n-button>
        </n-gi>
      </n-grid>
    </n-form-item>
    <input type="hidden" :value="RegisteredMode.uuid = Verkey.list">
    <!-- <input type="hidden" name="Vcode" :value="RegisteredMode.Vcode = VerCode.list"> -->
    <n-form-item path="password" >
      <n-input
          v-model:value="RegisteredMode.password"
          clearable
          size="large"
          type="password"
          show-password-on="mousedown"
          placeholder="密码"
      >
        <template #prefix>
          <n-icon :component="LockClosedOutline" />
        </template>
      </n-input>
    </n-form-item>

    <n-form-item path="reenteredPassword">
      <n-input
          v-model:value="RegisteredMode.reenteredPassword"
          clearable
          :first="false"
          size="large"
          type="password"
          show-password-on="mousedown"
          placeholder="确定密码"
      >
        <template #prefix>
          <n-icon :component="LockClosedOutline" />
        </template>
      </n-input>
    </n-form-item>

<!--    <n-form-item path="checkValue" >-->
<!--          <n-checkbox >-->
<!--            我已阅读并接受-->
<!--          </n-checkbox>-->
<!--        <n-space @click="policy">-->
<!--           《隐私政策》-->
<!--        </n-space>-->
<!--    </n-form-item>-->

    <n-form-item>
      <n-space vertical>
        <n-button style="width: 350px; " type="info" attr-type="button" @click="Registered">
          注册
        </n-button>
        <n-button style="width: 350px;"  type="success" attr-type="button" @click="btnReset">
          取消
        </n-button>
      </n-space>
    </n-form-item>
  </n-form>
</template>

<script setup>
import { PersonOutline, LockClosedOutline, At, ShieldHalfOutline } from '@vicons/ionicons5'
import RegisteredCheck from "../../composable/login/RegisteredCheck";
import {reactive, ref} from "vue";
import {useRouter} from "vue-router/dist/vue-router";
import request from "../../http/request";
import frontDeskUrl from "../../api/Front-desk-url";

  const formRef = ref(null);

  const router = useRouter();

  const policy =  async () => {
    await router.push({path: "/policy"});
  }

  const {  RegisteredMode, rules} = RegisteredCheck()

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
    request.get(frontDeskUrl().getCode+RegisteredMode.email).then((res)=> {
      if (res && res.code === 200) {
        Verkey.list = res.data.key
        VerCode.list = res.data.verCode
        console.log(res.data.verCode + "kkkkkkkkkkkkkkkkkk")
      }
    })
  }

  const Registered = () => {
      formRef.value?.validate((errors) => {
        if (!errors) {
          request.post(frontDeskUrl().add_user, RegisteredMode).then((res) => {
            if (res && res.code === 200 ) {
                window.$notification.success({
                  content: '注册成功',
                  meta: '请切换到登录界面进行登录。',
                  duration: 2500,
                  keepAliveOnHover: true
                });
              btnReset()
              window.location = router.push({path: "/login"});
            }
          })
        } else {
          console.log("验证失败")
        }
      });
    }

  const btnReset = () => {
    RegisteredMode.username = '';
    RegisteredMode.email = '';
    RegisteredMode.verCode = '';
    RegisteredMode.password = '';
    RegisteredMode.reenteredPassword = '';
    RegisteredMode.checkValue = '';
    RegisteredMode.netName = ''
  }
</script>
