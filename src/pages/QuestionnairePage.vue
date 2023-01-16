<template>
  <main-frame>
    <template #form>
      <questionnaire-form @submit="submit"></questionnaire-form>
    </template>
    <template #animation>
      <transition :name="direction">
        <the-ball v-if="show" class="ball"></the-ball>
      </transition>
      <img src="../assets/images/boy.png" class="boy" />
    </template>
    <the-navigation>
      <navigate-left class="left-vector" @click="previousPage"></navigate-left>
      <button type="submit" form="covid" class="right-vector">
        <navigate-right></navigate-right>
      </button>
    </the-navigation>
  </main-frame>
</template>

<script>
import QuestionnaireForm from '../components/form/QuestionnaireForm.vue';
import TheBall from '../components/icons/TheBall.vue';
import NavigateRight from '../components/icons/NavigateRight.vue';
import NavigateLeft from '../components/icons/NavigateLeft.vue';

export default {
  components: {
    QuestionnaireForm,
    NavigateRight,
    NavigateLeft,
    TheBall,
  },
  beforeRouteEnter(_, from, next) {
    if (from.path === '/vaccination') {
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
      this.$router.push('/vaccination');
    },
    previousPage() {
      this.$router.push('/identification');
    },
  },
};
</script>

<style scoped>
.ball {
  position: absolute;
  top: 398px;
  right: 805px;
  z-index: 1;
}

.boy {
  position: relative;
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
    transform: scale(0.8) translate(480px, -80px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
}

@keyframes movingback {
  0% {
    transform: scale(0.8) translate(170px, -320px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
}
</style>
