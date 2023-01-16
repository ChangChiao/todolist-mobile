<script setup>
import { userStore } from "../store/user";
import { router } from "../router";
import { ref } from "vue";
const account = ref('')
const password = ref('')

const login = (e) => {
    e.preventDefault();
    userStore().setUserInfo({account})
    router.push('/')
}
</script>

<template> 
  <form class="flex flex-col">
    <label for="account">account</label>
    <input id="account" v-model="account" />
    <label for="password">password</label>
    <input id="password" v-model="password" type="password" />
    <button class="btn" type="submit" @click="login">submit</button>
  </form>
</template>
