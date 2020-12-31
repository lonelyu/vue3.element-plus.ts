import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import demosRoute from './routers/demos';
import markdownRoute from './routers/markdown';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/demos",
    component: () => import("@/views/Layout.vue"),
    children: [
      ...demosRoute,
      ...markdownRoute
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
