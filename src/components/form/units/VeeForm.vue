<template>
  <Form :id="id" @submit="$emit('onSubmit')">
    <slot></slot>
  </Form>
</template>

<script>
import { Form } from 'vee-validate';
export default {
  components: {
    Form,
  },
  props: ['id'],
  emits: ['onSubmit'],
};
</script>

<style>
form {
  width: 622px;
}
</style>
