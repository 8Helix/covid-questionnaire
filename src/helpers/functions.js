import axios from 'axios';

function postData(store) {
  const form = {
    ...store.state.identification,
    ...store.state.questionnaire,
    ...store.state.vaccination,
    ...store.state.advice,
    antibodies: {
      test_date: store.getters.testDate,
      number: store.getters.testNumber,
    },
  };

  Object.keys(form.antibodies).forEach((key) => {
    if (form.antibodies[key] === '' || form.antibodies[key] === null) {
      delete form.antibodies[key];
    }
  });

  Object.keys(form).forEach((key) => {
    if (
      form[key] === '' ||
      form[key] === null ||
      (typeof form[key] === 'object' && Object.keys(form[key]).length === 0)
    ) {
      delete form[key];
    }
  });

  if (form.covid_sickness_date) {
    const date = form.covid_sickness_date.split('-');
    const value = format(new Date(date[0], date[1], date[2]));
    form.covid_sickness_date = value;
  }

  axios.post('https://covid19.devtest.ge/api/create', JSON.stringify(form), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

function format(inputDate) {
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();

  date = date.toString().padStart(2, '0');

  month = month.toString().padStart(2, '0');

  return `${date}/${month}/${year}`;
}

function clearStore(store) {
  store.commit('updateFirstname', '');
  store.commit('updateLastname', '');
  store.commit('updateEmail', '');

  store.commit('setHadCovid', '');
  store.commit('setAntibodyTest', null);
  store.commit('setTestDate', '');
  store.commit('setTestNumber', null);
  store.commit('setSicknessDate', '');

  store.commit('setHadVaccine', null);
  store.commit('setVaccinationStage', '');
  store.commit('setWaiting', '');

  store.commit('setNonFormal', '');
  store.commit('setOfficeDays', null);
  store.commit('setLiveMeetings', '');
  store.commit('setOpinion', '');
}

export { postData, clearStore };
