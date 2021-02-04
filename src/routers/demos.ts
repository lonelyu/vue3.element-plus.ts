export default [
  {
    path: "/demos",
    name: "demos-index",
    component: () => import("@/views/pages/demos/Index.vue"),
  },
  {
    path: "/demos/socket",
    redirect: '/demos/socket/chat',
    component: () => import("@/components/router.vue"),
    children: [
      {
        path: "chat",
        name: "demos-socket-chat",
        component: () => import("@/views/pages/demos/webSocket/chat.vue"),
      }
    ]
  },
  {
    path: "/demos/mysql",
    redirect: '/demos/mysql/add',
    component: () => import("@/components/router.vue"),
    children: [
      {
        path: "add",
        name: "demos-mysql-add",
        component: () => import("@/views/pages/demos/mysql/add.vue"),
      },
      {
        path: "del",
        name: "demos-mysql-del",
        component: () => import("@/views/pages/demos/mysql/del.vue"),
      },
      {
        path: "edit",
        name: "demos-mysql-edit",
        component: () => import("@/views/pages/demos/mysql/edit.vue"),
      },
      {
        path: "search",
        name: "demos-mysql-search",
        component: () => import("@/views/pages/demos/mysql/search.vue"),
      },
    ]
  },
]