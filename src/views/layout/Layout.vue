<script setup lang='ts'>
import { useUserStore } from '@/store/user';
import { useRouter } from 'vue-router';
import Header from './header.vue';
const userStore = useUserStore();
const router = useRouter();

const userId = userStore.userId;
// 如果用户未登录, 则跳转到登录页面
if (!userId) {
  router.push('/admin');
}
</script>

<template>
 <div class="base-layout">
  <div class="base-layout-header">
    <slot name="header">
      <Header />
    </slot>
  </div>
  <div class="base-layout-content">
    <div class="base-layout-content-left"></div>
    <div class="base-layout-content-right"></div>
  </div>
 </div>
</template>

<style lang='scss' scoped>
.base-layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-header {
    height: 100px;
    width: 100%;
    background-color: #ffffff;
  }

  &-content {
    height: 100%;
    width: 100%;
    background-color: #8791ac;
  }
}
</style>