import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("../pages/home.vue"),
      alias: "/",
    },
    {
      path: "/about",
      component: () => import("../pages/about.vue"),
    },
    {
      path: "/contact",
      component: () => import("../pages/contact.vue"),
    },
    {
      path: "/join",
      component: () => import("../pages/join.vue"),
    },
    {
      path: "/admin",
      component: () => import("../pages/admin.vue"),
    },
  ],
})

export default router
