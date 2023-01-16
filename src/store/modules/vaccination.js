export default {
  state() {
    return {
      had_vaccine: null,
      vaccination_stage: '',
      i_am_waiting: '',
    };
  },
  getters: {
    hadVaccine(state) {
      return state.had_vaccine === null
        ? null
        : state.had_vaccine === true
        ? 'true'
        : 'false';
    },
    vaccinationStage(state) {
      return state.vaccination_stage;
    },
    waiting(state) {
      return state.i_am_waiting;
    },
  },
  mutations: {
    setHadVaccine(state, payload) {
      const value = payload === null ? null : payload === 'true' ? true : false;
      state.had_vaccine = value;
    },
    setVaccinationStage(state, payload) {
      state.vaccination_stage = payload;
    },
    setWaiting(state, payload) {
      state.i_am_waiting = payload;
    },
  },
};
