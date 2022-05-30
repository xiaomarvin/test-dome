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
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("pages/login.vue"),
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
