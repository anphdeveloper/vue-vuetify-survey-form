import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";


Vue.config.productionTip = false;
//import helper functions
import Helper from "./plugins/helpers";
Vue.prototype.$helper = Helper;
Vue.use(Helper);

new Vue({
  router,
  store,
  vuetify,
  created() {},
  render: h => h(App)
}).$mount("#app");
