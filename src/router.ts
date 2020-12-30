import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Layout.vue"),
    children: [
      {
        path: "/",
        name: "index",
        component: () => import("@/views/Index.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/About.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
