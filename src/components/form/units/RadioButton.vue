<template>
  <div class="radio">
    <Field
      :id="id"
      v-model="value"
      :value="id"
      :name="name"
      type="radio"
      rules="required"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
import { Field } from 'vee-validate';
export default {
  components: {
    Field,
  },
  props: ['id', 'name', 'modelValue', 'label'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<style>
.form-field input[type='radio'] {
  margin: 0 18px;
  width: 23px;
  height: 23px;
  accent-color: var(--black);
}

.radio {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}
</style>
