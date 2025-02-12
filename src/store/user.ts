/**
 * 全局用户相关状态管理
 */

import { defineStore } from 'pinia';
import type { UserInfo } from '@/types/userInfo';
export const useUserStore = defineStore('user', {
  state: () => ({
    userId: '',
    userInfo: {} as UserInfo,
    token: '',
    isActive: false,
  }),
  actions: {
    setUserId(userId: string) {
      this.userId = userId;
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
    },
    setToken(token: string) {
      this.token = token;
    },
    setIsActive(isActive: boolean) {
      this.isActive = isActive;
    },
    setUserInfoField(field: keyof UserInfo, value: any) {
      (this.userInfo as any)[field] = value;
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
