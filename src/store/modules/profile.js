const state = {
  dayOfBirth: null,
  targetDay: null,
  age: 0,
  missedTeeth: 0,
  previousInsuranceCompany: "",
  personalData: {
    salutation: "Frau",
    title: "Dr.",
    firstGivenName: "",
    surname: "",
    street: "",
    streetNo: "",
    country: "Deutschland",
    postCode: "",
    place: "",
    phoneNo: "",
    emailAddress: "",
    professionalActivities: "",
    settingDate: "",
    paymentOption: "",
    ibanNumber: "",
  },
};

const getters = {
  getDayOfBirty: state => state.dayOfBirth,
  getAge: state => state.age
};

const actions = {
  setDayOfBirth({ commit }, dayOfBirth) {
    commit("setDayOfBirth", dayOfBirth);
  },

  setTargetDay({ commit, state }, targetDay) {
    commit("setTargetDay", targetDay);
    commit(
      "setAge",
      targetDay.getFullYear() - new Date(state.dayOfBirth).getFullYear()
    );
  },

  setMissedTeeth({ commit }, misssedTeeth) {
    commit("setMissedTeeth", misssedTeeth);
  },

  setPreviousInsuranceCompany({ commit }, company) {
    commit("setPrevInsComp", company);
  },

  setPersonalData({ commit }, personalData) {
    commit("setPersonalData", personalData);
  },
};

const mutations = {
  setDayOfBirth(state, dayOfBirth) {
    state.dayOfBirth = dayOfBirth;
  },
  setTargetDay(state, targetDay) {
    state.targetDay = targetDay;
  },
  setAge(state, age) {
    state.age = age;
  },
  setMissedTeeth(state, numberOfMissedTeeth) {
    state.missedTeeth = numberOfMissedTeeth;
  },
  setPrevInsComp(state, prevInsCompany) {
    state.previousInsuranceCompany = prevInsCompany;
  },
  setPersonalData(state, personalData) {
    Object.keys(personalData).forEach(
      key => state.personalData[key] = personalData[key]
    );
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
