<template>
  <div class="main">
    <the-header></the-header>
    <section class="section">
      <div class="form">
        <slot name="form"></slot>
      </div>
      <div>
        <slot name="animation"></slot>
      </div>
    </section>
    <slot></slot>
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style scoped>
.main {
  width: 100vw;
  min-height: 100vh;
  background-color: #eaeaea;
  padding: 0 10.4% 5.4% 10.4%;
  position: relative;
}

.form {
  padding-top: 42px;
}

.section {
  display: flex;
  justify-content: space-between;
}
</style>
