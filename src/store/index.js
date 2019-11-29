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
    },
    setInitiateState(state) {
      state.pagesProgress = 0;
    }
  },
  actions: {
    setPagesProgress({ commit }, progress) {
      commit("setPagesProgress", progress);
    },
    /*eslint-disable*/
    callBackendService({ commit }, payload){
      return AjaxApiService.post("", 
         payload 
      ).then(
        res => {
          return res || true;
        },
        error => {
          console.log("issue", error.response)
          return false;
        }
      ).catch(error => {
        console.log("error", error)
      });
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
    },
    initiateState({ commit }) {
      commit("setInitiateState");
      commit("profile/setInitiateState", null, {root: true});
      commit("products/setInitiateState", null, {root: true});         
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
