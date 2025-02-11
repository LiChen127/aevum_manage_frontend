/**
 * 全局用户相关状态管理
 */

import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: '',
    userInfo: {},
    token: '',
    isActive: false,
  }),
  actions: {
    setUserId(userId: string) {
      this.userId = userId;
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
    },
    setToken(token: string) {
      this.token = token;
    },
    setIsActive(isActive: boolean) {
      this.isActive = isActive;
    },
  },
  getters: {
    getUserId: (state) => state.userId,
    getUserInfo: (state) => state.userInfo,
    getToken: (state) => state.token,
    getIsActive: (state) => state.isActive,
  },
});

export default useUserStore;
