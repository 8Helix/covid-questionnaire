<template>
  <main-frame>
    <template #form>
      <advice-form @love="sendLove"></advice-form>
    </template>
    <template #animation>
      <transition name="route">
        <love-logo
          v-if="increaseLove"
          :color="loveColor"
          class="love"
        ></love-logo>
      </transition>
      <img src="../assets/images/biker.png" class="biker" />
    </template>
    <the-navigation>
      <navigate-left class="left-vector" @click="previousPage"></navigate-left>
    </the-navigation>
  </main-frame>
</template>

<script>
import AdviceForm from '../components/form/AdviceForm.vue';
import LoveLogo from '../components/icons/LoveLogo.vue';
import NavigateLeft from '../components/icons/NavigateLeft.vue';

export default {
  components: {
    AdviceForm,
    NavigateLeft,
    LoveLogo,
  },
  data() {
    return {
      increaseLove: true,
      loveColor: '#F39494',
    };
  },
  watch: {
    loveColor() {
      setTimeout(() => (this.$data.increaseLove = false), 1);
    },
  },
  methods: {
    sendLove() {
      this.$data.loveColor = '#232323';
      setTimeout(() => this.$router.push('/madloba'), 550);
    },

    previousPage() {
      this.$router.push('/vaccination');
    },
  },
};
</script>

<style scoped>
.route-leave-from {
  transform: translate(0, 0, 10) scale(0, 0);
}
.route-leave-active {
  transition: all 0.6s;
}

.route-leave-to {
  transform: translate(-220px, 200px) scale(10.5, 7.8);
}

.love {
  position: fixed;
  top: 288.5px;
  right: 676.69px;
  z-index: 1;
  animation: lovemoving 0.6s;
}

.biker {
  top: 221px;
  right: 262px;
  position: fixed;
  z-index: 2;
}

@keyframes lovemoving {
  0% {
    transform: scale(0.8) translate(-25px, -108px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
}
</style>
