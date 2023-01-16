<template>
  <vee-form id="vaccine" @on-submit="$emit('submit')">
    <form-field name="vaccinated">
      <p>უკვე აცრილი ხარ?*</p>
      <radio-button
        id="true"
        v-model="hadVaccine"
        label="კი"
        name="vaccinated"
      ></radio-button>
      <radio-button
        id="false"
        v-model="hadVaccine"
        label="არა"
        name="vaccinated"
      ></radio-button>
    </form-field>
    <form-field v-if="showStage" name="vaccine-stage">
      <p>აირჩიე რა ეტაპზე ხარ*</p>
      <radio-button
        id="first_dosage_and_registered_on_the_second"
        v-model="vaccinationStage"
        label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
        name="vaccine-stage"
      ></radio-button>
      <radio-button
        id="fully_vaccinated"
        v-model="vaccinationStage"
        label="სრულად აცრილი ვარ"
        name="vaccine-stage"
      ></radio-button>
      <radio-button
        id="first_dosage_and_not_registered_yet"
        v-model="vaccinationStage"
        label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
        name="vaccine-stage"
      ></radio-button>
    </form-field>
    <form-field v-if="showWhatRUWaiting" name="wait">
      <p>რას ელოდები?*</p>
      <radio-button
        id="registered_and_waiting"
        v-model="waiting"
        label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
        name="wait"
      ></radio-button>
      <radio-button
        id="not_planning"
        v-model="waiting"
        label="არ ვგეგმავ"
        name="wait"
      ></radio-button>
      <radio-button
        id="had_covid_and_planning_to_be_vaccinated"
        v-model="waiting"
        label="გადატანილი მაქვს და ვგეგმავ აცრას"
        name="wait"
      ></radio-button>
    </form-field>
    <form-field v-if="showRegisterLink">
      <p class="message">
        რომ არ გადადო, <br />
        ბარემ ახლავე დარეგისტრირდი <br />
        <a href="https://booking.moh.gov.ge/" target="_blank"
          >https://booking.moh.gov.ge/</a
        >
      </p>
    </form-field>
    <form-field v-if="showVaccinationLink">
      <p class="message">
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br />
        თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
      </p>
      <p class="message">
        👉 რეგისტრაციის ბმული <br />
        <a href="https://booking.moh.gov.ge/" target="_blank">
          https://booking.moh.gov.ge/</a
        >
      </p>
    </form-field>
    <form-field v-if="showWebsiteLink">
      <p class="message">
        👉
        <a href="https://booking.moh.gov.ge/" target="_blank">
          https://booking.moh.gov.ge/</a
        >
      </p>
    </form-field>
  </vee-form>
</template>

<script>
export default {
  emits: ['submit'],
  computed: {
    hadVaccine: {
      get() {
        return this.$store.getters.hadVaccine;
      },
      set(value) {
        this.$store.commit('setHadVaccine', value);
      },
    },
    vaccinationStage: {
      get() {
        return this.$store.getters.vaccinationStage;
      },
      set(value) {
        this.$store.commit('setVaccinationStage', value);
      },
    },
    waiting: {
      get() {
        return this.$store.getters.waiting;
      },
      set(value) {
        this.$store.commit('setWaiting', value);
      },
    },
    showStage: function () {
      return this.hadVaccine === 'true' ? true : false;
    },
    showRegisterLink: function () {
      return this.vaccinationStage === 'first_dosage_and_not_registered_yet'
        ? true
        : false;
    },
    showWhatRUWaiting: function () {
      return this.hadVaccine === 'false' ? true : false;
    },
    showVaccinationLink: function () {
      return this.waiting === 'had_covid_and_planning_to_be_vaccinated'
        ? true
        : false;
    },
    showWebsiteLink: function () {
      return this.waiting === 'not_planning' ? true : false;
    },
  },
  watch: {
    hadVaccine(newValue) {
      if (newValue === 'true') {
        this.$store.commit('setVaccinationStage', '');
      } else if (newValue === 'false') {
        this.$store.commit('setWaiting', '');
      }
    },
  },
};
</script>

<style scoped>
a {
  color: #1289ae;
}

.message {
  margin-left: 60px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: var(--black);
}
</style>
