import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import Product from "./modules/products";
import Profile from "./modules/profile";
import AjaxApiService from "../services/AjaxApiService";
import axios from "axios";
Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  restoreState: (key, storage) => {
    const data = storage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  }
});
export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    pagesProgress: 0
  },
  mutations: {
    setPagesProgress(state, percentage) {
      state.pagesProgress = percentage;
    }
  },
  actions: {
    setPagesProgress({ commit }, progress) {
      commit("setPagesProgress", progress);
    },
    /*eslint-disable*/
    callBackendService({ commit }, payload){
      return AjaxApiService.post("/backendCall", 
         payload 
      ).then(
        res => {
          return res;
        },
        error => {
          return false;
        }
      
      );
    },

    getIpAddress(){
      return axios.get('https://api.ipify.org?format=json').then(
        response => {
          return response.data.ip
        },
        error => {
          return false;
        }
      )
    }
  },
  getters: {
    getPagesProgress: state => state.pagesProgress
  },
  modules: {
    products: Product,
    profile: Profile
  }
});
