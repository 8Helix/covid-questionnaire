import { createStore } from 'vuex';
import identification from './modules/identification';
import questionnaire from './modules/questionnaire';
import vaccination from './modules/vaccination';
import advice from './modules/advice';

const store = createStore({
  modules: {
    identification,
    questionnaire,
    vaccination,
    advice,
  },
});

export default store;
