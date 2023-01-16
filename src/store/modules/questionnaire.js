export default {
  state() {
    return {
      had_covid: '',
      had_antibody_test: null,
      antibodies: {
        test_date: '',
        number: null,
      },
      covid_sickness_date: '',
    };
  },
  getters: {
    hadCovid(state) {
      return state.had_covid;
    },
    antibodyTest(state) {
      return state.had_antibody_test === null
        ? null
        : state.had_antibody_test === true
        ? 'true'
        : 'false';
    },
    testDate(state) {
      return state.antibodies.test_date;
    },
    testNumber(state) {
      return state.antibodies.number;
    },
    sicknessDate(state) {
      return state.covid_sickness_date;
    },
  },
  mutations: {
    setHadCovid(state, payload) {
      state.had_covid = payload;
    },
    setAntibodyTest(state, payload) {
      const value = payload === null ? null : payload === 'true' ? true : false;
      state.had_antibody_test = value;
    },
    setTestDate(state, payload) {
      state.antibodies.test_date = payload;
    },
    setTestNumber(state, payload) {
      const value =
        payload === null || payload === '' || isNaN(+payload)
          ? payload
          : +payload;
      state.antibodies.number = value;
    },
    setSicknessDate(state, payload) {
      state.covid_sickness_date = payload;
    },
  },
};
