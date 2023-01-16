<template>
  <div class="background">
    <transition name="logo">
      <div v-if="showLogo" class="logo">
        <redberry-logo></redberry-logo>
      </div>
    </transition>
    <transition>
      <div v-if="showParagraph" class="white-box"></div>
    </transition>
    <transition name="paragraph">
      <div v-if="showParagraph">
        <div class="paragraph-1" @click="nextPage"></div>
        <div class="paragraph-2"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import RedberryLogo from '../components/icons/RedberryLogo.vue';

export default {
  components: {
    RedberryLogo,
  },
  data() {
    return {
      showLogo: false,
      showParagraph: false,
    };
  },
  mounted() {
    this.$data.showLogo = true;
    setTimeout(() => {
      this.$data.showParagraph = true;
    }, 1200);
  },
  methods: {
    nextPage() {
      this.$router.push('/identification');
    },
  },
};
</script>

<style scoped>
.background {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.white-box {
  height: 101px;
  width: 256px;
  z-index: 100;
  background-color: white;
}

.logo {
  margin-top: 343px;
}

.logo-enter-from {
  transform: scale(42) translateY(5%);
}

.logo-enter-active {
  transition: transform 0.3s 0.3s ease-out;
}

.logo-enter-to {
  transform: scale(1) translateY(0);
}

.paragraph-1 {
  position: relative;
  width: 188px;
  height: 66px;
  background-image: url('../assets/images/startQuestionnaire.png');
  z-index: 8;
  cursor: pointer;
}

.paragraph-2 {
  display: none;
  position: relative;
  top: -65px;
  right: -1px;
  width: 188px;
  height: 66px;
  background-image: url('../assets/images/startQuestionnaire2.png');
  z-index: 1;
  cursor: pointer;
}
.paragraph-1:hover + .paragraph-2 {
  display: block;
}

.paragraph-enter-from {
  transform: translateY(-101px);
}

.paragraph-enter-active {
  transition: transform 1s;
}

.paragraph-enter-to {
  transform: translateY(0);
}
</style>
