const state = {
  categories: null
};

const getters = {
};

const actions = {
  setCategories({ commit }, categories) {
    commit("setCategories", categories);
  }
};

const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
  setInitiateState(state) {
    state.categories = null;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
