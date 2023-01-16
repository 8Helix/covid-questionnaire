<template>
  <vee-form id="vee" @on-submit="$emit('submit')">
    <form-field label="სახელი*" name="firstname">
      <Field
        v-model.trim="firstname"
        name="firstname"
        type="text"
        rules="required|min:2|max:255|anbani"
        class="text-input"
      />
    </form-field>
    <form-field label="გვარი*" name="lastname">
      <Field
        v-model.trim="lastname"
        name="lastname"
        type="text"
        rules="required|min:2|max:255|anbani"
        class="text-input"
      />
    </form-field>
    <form-field label="იმეილი*" name="email">
      <Field
        v-model.trim="email"
        name="email"
        type="email"
        rules="required|email|redberry"
        class="text-input"
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
    firstname: {
      get() {
        return this.$store.getters.firstname;
      },
      set(value) {
        this.$store.commit('updateFirstname', value);
      },
    },
    lastname: {
      get() {
        return this.$store.getters.lastname;
      },
      set(value) {
        this.$store.commit('updateLastname', value);
      },
    },
    email: {
      get() {
        return this.$store.getters.email;
      },
      set(value) {
        this.$store.commit('updateEmail', value);
      },
    },
  },
};
</script>

<style>
.text-input {
  display: block;
  margin-top: 12px;
  margin-bottom: 7px;
  padding: 11px 20px 9px 20px;
  width: 513px;
  height: 50px;
  border: 0.8px solid var(--black);
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  outline: none;
}
</style>
