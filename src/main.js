import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created(){
    // this.$vuetify.theme.primary = "#00718F";
    // this.$vuetify.theme.secondary = "#035370";
    // this.$vuetify.theme.accent = "#49d586";
    // this.$vuetify.theme.error = "#ED706C";
    // this.$vuetify.theme.tertiary = "#035370";
  },
  render: h => h(App)
}).$mount("#app");
