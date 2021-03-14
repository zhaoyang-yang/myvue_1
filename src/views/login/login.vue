<template>
  <p>用户名</p>
  <input class="username" placeholder="请输入用户名" />
  <div><button value="登录" @click="login" /></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { LOGIN } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const number = ref(null);
    const store = useStore();
    const login = () => {
      store.dispatch(LOGIN, number.value); //异步请求将输入值交给vuex处理
    };
    return {
      number,
      login
    };
  }
});
</script>
