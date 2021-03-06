import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [

  // 登录
  {
    name: "login",
    path: "/login/login.vue",
    component: ()=> import("@/views/login/login.vue")
  },

  // 重定向
  {
    name: "repath",
    path: "/:pathMatch(.*)*",
    redirect: {name: "login"}
  },


  
  // 默认
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
