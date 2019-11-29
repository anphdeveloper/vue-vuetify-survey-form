const state = {
  dayOfBirth: null,
  targetDay: null,
  age: 0,
  missedTeeth: 0,
  prevInsCompany: {
    haveCompany: false,
    companyName: ""
  },
  personalData: {
    salutation: "Frau",
    title: "Kein Titel",
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
    insuredOption: "0",
    paymentOption: "",
    agreeSEPA: false,
    ibanNumber: "",
    agreeAdvice: false,
    agreeTerms: false,
    agreeForLastYear: false
  }
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

  setPrevInsCompany({ commit }, company) {
    commit("setPrevInsComp", company);
  },

  setPersonalData({ commit }, personalData) {
    commit("setPersonalData", personalData);
  }
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
    Object.keys(prevInsCompany).forEach(
      key => (state.prevInsCompany[key] = prevInsCompany[key])
    );
  },
  setPersonalData(state, personalData) {
    Object.keys(personalData).forEach(
      key => (state.personalData[key] = personalData[key])
    );
  },
  setInitiateState(state) {
    (state.dayOfBirth = null),
      (state.targetDay = null),
      (state.age = 0),
      (state.missedTeeth = 0),
      (state.prevInsCompany = {
        haveCompany: false,
        companyName: ""
      }),
      (state.personalData = {
        salutation: "Frau",
        title: "Kein Titel",
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
        insuredOption: "0",
        paymentOption: "",
        agreeSEPA: false,
        ibanNumber: "",
        agreeAdvice: false,
        agreeTerms: false,
        agreeForLastYear: false
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
