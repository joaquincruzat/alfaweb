import Vue from "vue";
import VueRouter from "vue-router";
//import store from "@/store";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import AdminView from "../views/AdminView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { login: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    meta: { login: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

import { getAuth } from "firebase/auth";
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const authRequired = to.meta.login;
  if (!user && authRequired) {
    next("/login");
  } else {
    next();
  }
});
export default router;
