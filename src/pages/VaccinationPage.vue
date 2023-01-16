<template>
  <main-frame>
    <template #form>
      <vaccination-form @submit="submit"></vaccination-form>
    </template>
    <template #animation>
      <transition :name="direction">
        <the-star v-if="show" class="star"></the-star>
      </transition>
      <img src="../assets/images/doctor.png" class="doctor" />
    </template>
    <the-navigation>
      <navigate-left class="left-vector" @click="previousPage"></navigate-left>
      <button type="submit" form="vaccine" class="right-vector">
        <navigate-right></navigate-right>
      </button>
    </the-navigation>
  </main-frame>
</template>

<script>
import VaccinationForm from '../components/form/VaccinationForm.vue';
import TheStar from '../components/icons/TheStar.vue';
import NavigateRight from '../components/icons/NavigateRight.vue';
import NavigateLeft from '../components/icons/NavigateLeft.vue';

export default {
  components: {
    VaccinationForm,
    NavigateRight,
    NavigateLeft,
    TheStar,
  },
  beforeRouteEnter(_, from, next) {
    if (from.path === '/advice') {
      next((vm) => (vm.$data.direction = 'back'));
    } else {
      next();
    }
  },
  data() {
    return {
      direction: 'front',
      show: false,
    };
  },
  mounted() {
    this.$data.show = true;
  },
  methods: {
    submit() {
      this.$router.push('/advice');
    },
    previousPage() {
      this.$router.push('/questionnaire');
    },
  },
};
</script>

<style scoped>
.star {
  position: absolute;
  top: 180.5px;
  right: 668px;
  z-index: 1;
}

.doctor {
  position: relative;
  margin-top: 54px;
  z-index: 2;
}

.back-enter-active {
  animation: movingback 0.5s;
}

.front-enter-active {
  animation: movingfront 0.5s;
}

@keyframes movingfront {
  0% {
    transform: scale(0.8) translate(-170px, 320px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
}

@keyframes movingback {
  0% {
    transform: scale(0.8) translate(25px, 108px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
}
</style>
