<template>
  <vee-form id="covid" @on-submit="$emit('submit')">
    <form-field name="covid">
      <p>გაქვს გადატანილი Covid-19?*</p>
      <radio-button
        id="yes"
        v-model="hadCovid"
        label="კი"
        name="covid"
      ></radio-button>
      <radio-button
        id="no"
        v-model="hadCovid"
        label="არა"
        name="covid"
      ></radio-button>
      <radio-button
        id="have_right_now"
        v-model="hadCovid"
        label="ახლა მაქვს"
        name="covid"
      ></radio-button>
    </form-field>
    <form-field v-if="showTests" name="antibody">
      <p>ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
      <radio-button
        id="true"
        v-model="antibodyTest"
        label="კი"
        name="antibody"
      ></radio-button>
      <radio-button
        id="false"
        v-model="antibodyTest"
        label="არა"
        name="antibody"
      ></radio-button>
    </form-field>
    <form-field v-if="showTestApproximation" name="test-number">
      <p>
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
        რაოდენობა
      </p>
      <Field
        v-model="testDate"
        class="text-input"
        placeholder="რიცხვი"
        type="text"
        onfocus="(this.type='date')"
        onblur="(this.type='text')"
        name="test-date"
      />
      <Field
        v-model="testNumber"
        class="text-input"
        placeholder="ანტისხეულების რაოდენობა"
        type="text"
        name="test-number"
        rules="numeric"
      />
    </form-field>
    <form-field v-if="showCovidApproximation" name="sickness-date">
      <p>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
      <Field
        v-model="sicknessDate"
        class="text-input"
        placeholder="დდ/თთ/წწ"
        type="text"
        onfocus="(this.type='date')"
        onblur="(this.type='text')"
        name="sickness-date"
        rules="required"
      />
    </form-field>
  </vee-form>
</template>

<script>
import { Field } from 'vee-validate';
export default {
  components: {
    Field,
  },
  emits: ['submit'],
  computed: {
    hadCovid: {
      get() {
        return this.$store.getters.hadCovid;
      },
      set(value) {
        this.$store.commit('setHadCovid', value);
      },
    },
    antibodyTest: {
      get() {
        return this.$store.getters.antibodyTest;
      },
      set(value) {
        this.$store.commit('setAntibodyTest', value);
      },
    },
    testDate: {
      get() {
        return this.$store.getters.testDate;
      },
      set(value) {
        this.$store.commit('setTestDate', value);
      },
    },
    testNumber: {
      get() {
        return this.$store.getters.testNumber;
      },
      set(value) {
        this.$store.commit('setTestNumber', value);
      },
    },
    sicknessDate: {
      get() {
        return this.$store.getters.sicknessDate;
      },
      set(value) {
        this.$store.commit('setSicknessDate', value);
      },
    },
    showTests: function () {
      return this.hadCovid === 'yes' ? true : false;
    },
    showTestApproximation: function () {
      return this.antibodyTest === 'true' ? true : false;
    },
    showCovidApproximation: function () {
      return this.antibodyTest === 'false' ? true : false;
    },
  },
  watch: {
    hadCovid(newValue) {
      if (newValue === 'no' || newValue === 'have_right_now') {
        console.log(newValue);
        this.$store.commit('setAntibodyTest', null);
        this.$store.commit('setSicknessDate', '');
      }
    },
    antibodyTest(newValue) {
      if (newValue === 'true') {
        this.$store.commit('setSicknessDate', '');
      } else {
        this.$store.commit('setTestDate', '');
        this.$store.commit('setTestNumber', null);
      }
    },
  },
};
</script>
