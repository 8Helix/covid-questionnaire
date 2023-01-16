export default {
  state() {
    return {
      non_formal_meetings: '',
      number_of_days_from_office: null,
      what_about_meetings_in_live: '',
      tell_us_your_opinion_about_us: '',
    };
  },
  getters: {
    nonFormal(state) {
      return state.non_formal_meetings;
    },
    officeDays(state) {
      return JSON.stringify(state.number_of_days_from_office);
    },
    liveMeetings(state) {
      return state.what_about_meetings_in_live;
    },
    opinion(state) {
      return state.tell_us_your_opinion_about_us;
    },
  },
  mutations: {
    setNonFormal(state, payload) {
      state.non_formal_meetings = payload;
    },
    setOfficeDays(state, payload) {
      const value = payload === null ? null : +payload;
      state.number_of_days_from_office = value;
    },
    setLiveMeetings(state, payload) {
      state.what_about_meetings_in_live = payload;
    },
    setOpinion(state, payload) {
      state.tell_us_your_opinion_about_us = payload;
    },
  },
};
