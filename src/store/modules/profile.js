const state = {
  dayOfBirth: null,
  targetDay: null,
  age: 0,
};

const getters = {
  getDayOfBirty : state => state.dayOfBirth,
  getAge: state => state.age
};

const actions = {
  setDayOfBirth( {commit}, dayOfBirth){
    commit("setDayOfBirth", dayOfBirth)
  },

  setTargetDay( {commit, state}, targetDay){
    console.log('state', state);
    commit("setTargetDay", targetDay);
    commit("setAge", targetDay.getFullYear() - new Date(state.dayOfBirth).getFullYear());
  },
};

const mutations = {
  setDayOfBirth( state, dayOfBirth){
    state.dayOfBirth = dayOfBirth;
    console.log('dayofbirth', state.dayOfBirth);
  },
  setTargetDay( state, targetDay){
    state.targetDay = targetDay;
  },
  setAge( state, age){
    state.age = age;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}