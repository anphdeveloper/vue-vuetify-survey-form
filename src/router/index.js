import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start",
    component: function() {
      return import("../views/Start.vue");
    }
  },
  {
    path: "/inputDOB",
    name: "InputDayOfBirthday",
    component: function() {
      return import("../views/InputDOB.vue");
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: function() {
      return import("../views/Dashboard.vue");
    }
  },
  {
    path: "/myHealth",
    name: "MyHealth",
    component: function() {
      return import("../views/MyHealth.vue");
    }
  },
  {
    path: "/myDentalHealth",
    name: "MyDentalHealth",
    component: function() {
      return import("../views/MyDentalHealth.vue");
    }
  },
  {
    path: "/myPersonalData",
    name: "MyPersonalData",
    component: function() {
      return import("../views/MyPersonalData.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
