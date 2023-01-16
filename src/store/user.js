import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({ userInfo: {} }),
  actions: {
    setUserInfo(obj) {
      this.userInfo = obj;
    },
  },
});
