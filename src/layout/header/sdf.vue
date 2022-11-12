<template>
  <n-dropdown trigger="hover" :options="options.list" @select="options.handleSelect()">
    <n-button>找个地方休息</n-button>
  </n-dropdown>
</template>

<script setup>
import { reactive} from "vue";

const options = reactive({
  list:      [
    {
      label: "滨海湾金沙，新加坡",
      key: "marina bay sands",
      props: {
        onClick: () => {
          alert("Ok")
        }
      }
    },
    {
      label: "布朗酒店，伦敦",
      key: "brown's hotel, london",
      children: [
        {
          label: "鸡肉",
          key: "chicken",
          disabled: true,
          props: {
            onClick: () => {
              alert("Ok")
            }
          }
        },
        {
          label: "牛肉",
          key: "beef"
        }
      ]
    },
    {
      label: "亚特兰蒂斯巴哈马，拿骚",
      key: "atlantis nahamas, nassau",
      props: {
        onMousedown: () => {
          alert("Ok")
        }
      }
    }
  ],
  handleSelect(key) {
    alert("Ok")
  }
})
</script>








export default defineComponent({
setup() {
return {
value: ref(5),
show: ref(true),
options: [
{
label: "用户资料",
key: "profile",
icon: renderIcon(UserIcon)
},
{
label: "编辑用户资料",
key: "editProfile",
icon: renderIcon(EditIcon)
},
{
label: "退出登录",
key: "logout",
icon: renderIcon(LogoutIcon)
}
]
};
}
});