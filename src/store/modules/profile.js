const state = {
  dateOfBirth: null,
  targetDay: null,
  age: 0,
};

const getters = {
  getDateOfBirty : state => state.dateOfBirth,
  getAge: state => state.age
};

const actions = {
  setDateOfBirth( {commit}, dateOfBirth){
    commit("setDateOfBirth", dateOfBirth)
  },
  setTargetDay( {commit}, targetDay){
    commit("setTargetDay", targetDay)
  },

};

const mutations = {
  setDateOfBirth( state, dateOfBirth){
    state.dateOfBirth = dateOfBirth;
  },
  setTargetDay( state, targetDay){
    state.targetDay = targetDay;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}