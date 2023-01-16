import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import Login from "../pages/Login.vue"
const routes = [
  { path: "/", component: Index },
  { path: "/login", component: Login },
];

export const router = createRouter({
  history: createWebHistory(),
  routes, 
});
