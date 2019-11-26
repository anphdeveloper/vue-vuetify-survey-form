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
    path: "/activateJS",
    name: "ActivateJS",
    component: function() {
      return import("../views/ActivateJS.vue");
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
  },
  {
    path: "/myPaymentMethod",
    name: "MyPaymentMethod",
    component: function() {
      return import("../views/MyPaymentMethod.vue");
    }
  },
  {
    path: "/explanationAndInformation",
    name: "ExplanationAndInformation",
    component: function() {
      return import("../views/ExplanationAndInformation.vue");
    }
  },
  {
    path: "/myInputsOverview",
    name: "MyInputsOverview",
    component: function() {
      return import("../views/MyInputsOverview.vue");
    }
  },
  {
    path: "/manyThanks",
    name: "ManyThanks",
    component: function() {
      return import("../views/ManyThanks.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
