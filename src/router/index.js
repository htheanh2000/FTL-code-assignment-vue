import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/q1",
    name: "q1",
    component: () => import(/* webpackChunkName: "q1" */ "../views/Q1.vue")
  },
  {
    path: "/q2",
    name: "q2",
    component: () => import(/* webpackChunkName: "q2" */ "../views/Q2.vue")
  },
  {
    path: "/q3",
    name: "q3",
    component: () => import(/* webpackChunkName: "q3" */ "../views/Q3.vue")
  },
  {
    path: "/q4",
    name: "q4",
    component: () => import(/* webpackChunkName: "q4" */ "../views/Q4.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
