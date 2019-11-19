import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    pagesProgress: 0
  },
  mutations: {
    setPagesProgress(state, percentage){
      state.pagesProgress = percentage;
    }
  },
  actions: {
    setPagesProgress({commit}, progress){
      commit("setPagesProgress", progress)
    }
  },
  getters: {
    getPagesProgress : state => state.pagesProgress
  },
  modules: {}
});
