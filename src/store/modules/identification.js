export default {
  state() {
    return {
      first_name: '',
      last_name: '',
      email: '',
    };
  },
  getters: {
    firstname(state) {
      return state.first_name;
    },
    lastname(state) {
      return state.last_name;
    },
    email(state) {
      return state.email;
    },
  },
  mutations: {
    updateFirstname(state, payload) {
      state.first_name = payload;
    },
    updateLastname(state, payload) {
      state.last_name = payload;
    },
    updateEmail(state, payload) {
      state.email = payload;
    },
  },
};
