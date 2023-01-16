<template>
  <div class="form-field">
    <label v-if="label" :for="name">{{ label }}</label>
    <slot></slot>
    <ErrorMessage v-if="name" :name="name" />
  </div>
</template>

<script>
import { ErrorMessage } from 'vee-validate';
export default {
  components: {
    ErrorMessage,
  },
  props: ['name', 'label'],
};
</script>

<style>
span {
  margin-left: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #f15524;
}

.form-field {
  margin-bottom: 47px;
}

.form-field label,
.form-field p {
  display: block;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: var(--black);
}

.form-field p {
  margin-bottom: 18px;
}
</style>
