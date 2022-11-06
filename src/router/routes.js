const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    redirect: "home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("pages/Home.vue"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("pages/My.vue"),
      },
      {
        path: "/alarm",
        name: "alarm",
        component: () => import("pages/Alarm.vue"),
      },
      {
        path: "/movie",
        name: "movie",
        component: () => import("pages/Movie.vue"),
      },
      {
        path: "/dome",
        name: "dome",
        component: () => import("pages/dome.vue"),
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    component: () => import("pages/test.vue"),
  },
  {
    path: "/tab",
    name: "tab",
    component: () => import("pages/tab.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("pages/table.vue"),
  },
  {
    path: "/ant",
    name: "ant",
    component: () => import("pages/ant_table.vue"),
  },
  {
    path: "/select",
    name: "select",
    component: () => import("pages/select.vue"),
  },
  {
    path: "/pull",
    name: "pull",
    component: () => import("pages/pull.vue"),
  },
  {
    path: "/float",
    name: "float",
    component: () => import("pages/right_float.vue"),
  },
  {
    path: "/scroll",
    name: "scroll",
    component: () => import("pages/scroll.vue"),
  },
  {
    path: "/css",
    name: "css",
    component: () => import("pages/css.vue"),
  },
  {
    path: "/cal",
    name: "cal",
    component: () => import("pages/cal.vue"),
  },
  {
    path: "/slider",
    name: "slider",
    component: () => import("pages/slider_3d.vue"),
  },
  {
    path: "/ios",
    name: "ios",
    component: () => import("pages/ios.vue"),
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
