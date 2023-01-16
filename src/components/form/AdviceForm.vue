<template>
  <vee-form id="advice" @on-submit="submit">
    <div class="form-field">
      <p class="paragraph">
        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
        რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
        განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან
        გადმოსვლის.
      </p>
      <p class="paragraph">
        პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
        ყოველდღიური კომუნიკაციაც გაიშვიათდა.
      </p>
    </div>
    <div class="form-field">
      <p>
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </p>
      <radio-button
        id="twice_a_week"
        v-model="nonFormal"
        label="კვირაში ორჯერ"
        name="meeting-frequency"
      ></radio-button>
      <radio-button
        id="once_a_week"
        v-model="nonFormal"
        label="კვირაში ერთხელ"
        name="meeting-frequency"
      ></radio-button>
      <radio-button
        id="once_in_a_two_weeks"
        v-model="nonFormal"
        label="ორ კვირაში ერთხელ"
        name="meeting-frequency"
      ></radio-button>
      <radio-button
        id="once_in_a_month"
        v-model="nonFormal"
        label="თვეში ერთხელ"
        name="meeting-frequency"
      ></radio-button>
      <ErrorMessage name="meeting-frequency" />
    </div>
    <div class="form-field">
      <p>კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</p>
      <radio-button
        id="1"
        v-model="officeDays"
        label="1"
        name="office-days"
      ></radio-button>
      <radio-button
        id="2"
        v-model="officeDays"
        label="2"
        name="office-days"
      ></radio-button>
      <radio-button
        id="3"
        v-model="officeDays"
        label="3"
        name="office-days"
      ></radio-button>
      <radio-button
        id="4"
        v-model="officeDays"
        label="4"
        name="office-days"
      ></radio-button>
      <radio-button
        id="5"
        v-model="officeDays"
        label="5"
        name="office-days"
      ></radio-button>
      <ErrorMessage name="office-days" />
    </div>
    <div class="form-field">
      <p>რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
      <Field
        id="thoughts"
        v-model.trim="liveMeetings"
        as="textarea"
        name="thoughts"
      />
    </div>
    <div class="form-field">
      <p>
        რას ფიქრობ არსებულ გარემოზე: <br />
        რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
      </p>
      <Field id="opinion" v-model.trim="opinion" as="textarea" name="opinion" />
    </div>
    <button class="button">დასრულება</button>
  </vee-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import { postData, clearStore } from '../../helpers/functions.js';

export default {
  components: {
    Field,
    ErrorMessage,
  },
  emits: ['love'],
  computed: {
    nonFormal: {
      get() {
        return this.$store.getters.nonFormal;
      },
      set(value) {
        this.$store.commit('setNonFormal', value);
      },
    },
    officeDays: {
      get() {
        return this.$store.getters.officeDays;
      },
      set(value) {
        this.$store.commit('setOfficeDays', value);
      },
    },
    liveMeetings: {
      get() {
        return this.$store.getters.liveMeetings;
      },
      set(value) {
        this.$store.commit('setLiveMeetings', value);
      },
    },
    opinion: {
      get() {
        return this.$store.getters.opinion;
      },
      set(value) {
        this.$store.commit('setOpinion', value);
      },
    },
  },
  methods: {
    submit() {
      postData(this.$store);
      clearStore(this.$store);
      this.$emit('love');
    },
  },
};
</script>

<style scoped>
.paragraph {
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  color: var(--black);
  margin-bottom: 27px;
}

textarea {
  width: 100%;
  height: 184px;
  font-size: 20px;
  line-height: 24px;
  resize: none;
}

.button {
  float: right;
  width: 180px;
  height: 56px;
  background-color: #208298;
  border-radius: 42px;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  border: none;
  margin-bottom: 74px;
}
</style>
