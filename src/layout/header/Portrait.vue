<template>
  <n-row>
    <n-col>
      <div style=" color: white; font: 20px '宋体';  position: fixed; left: 85%; margin: 10px">
        <n-tag @click="Msg">公告信息</n-tag>
      </div>
    </n-col>
    <n-col>
      <n-dropdown  :options="options.list" >
          <n-avatar
              style="position: fixed; left: 91%; "
              :size="42"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
      </n-dropdown>
    </n-col>
    <n-col>
      <div style=" color: white; font: 20px '宋体';  position: fixed; left: 94%; margin: 10px">
          {{getName}}
      </div>
    </n-col>
  </n-row>

</template>

<script setup>
import {h, defineComponent, ref, onMounted} from "vue";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";
import { reactive} from "vue";
import {useRouter} from "vue-router/dist/vue-router";
import {NIcon} from "naive-ui";
import {clearSession, getNetName, getUid} from "../../utils/auth";
import {get, post, put} from "../../http/request";
import frontDeskUrl from "../../api/Front-desk-url";
import EditUerCheck from "../../composable/user/EditUerCheck";

const router = useRouter();

const getName = getNetName();


const uid = getUid()

const img = ref()

console.log(getName + "-----------------------------")

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};

const options = reactive({
  list:[
    {
      label: "用户信息",
      key: "UserIno",
      icon: renderIcon(UserIcon),
      props: {
        onClick: () => {
           router.push({path: "/UserInfo"});
        }
      }
    },
    {
      label: "修改信息",
      key: "EditUser",
      icon: renderIcon(EditIcon),
      props: {
        onClick: () => {
         router.push({path: "/EditUserInfo"})
        }
      }
    },
    {
      label: "退出登陆",
      key: "Logout",
      icon: renderIcon(LogoutIcon),
      props: {
        onClick: () => {
          clearSession()
          window.location =  router.push({path: "/login"});
        }
      }
    },
  ],
})

const data = reactive({
  list: []
})

const Msg = ()=> {
  router.push({path: "/MsgInfo"});
}

const getList = async ()=> {
  await get( frontDeskUrl().getByIdInfo+uid).then((res)=> {
    if (res && res.code === 200) {
      data.list = res.data
    }
  })
}

onMounted(()=> {
  getList()
})

const UserInfo = ()=> {
  get(frontDeskUrl().getByIdInfo + uid ).then((res)=> {
    // console.log(res.data.uportrait)
    // img.value = res.data.uportrait
  })
}

onMounted(()=> {
  UserInfo()
})


</script>

<style>
</style>