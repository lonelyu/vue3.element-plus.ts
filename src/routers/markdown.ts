export default [
  {
    path: "/markdown",
    name: "markdown-index",
    component: () => import("@/views/pages/markdown/Index.vue"),
  },
  {
    path: "/markdown/es6",
    name: "markdown-es6",
    component: () => import("@/views/pages/markdown/es6/Index.vue"),
  },
]