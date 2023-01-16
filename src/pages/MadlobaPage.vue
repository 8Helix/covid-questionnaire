<template>
  <div class="background">
    <div class="box">
      <transition name="big-star">
        <big-star v-if="showStars" class="big-star"></big-star>
      </transition>
      <transition name="paragraph">
        <p v-if="showText" class="paragraph">მადლობა</p>
      </transition>
      <transition name="small-star">
        <small-star v-if="showStars" class="small-star"></small-star>
      </transition>
    </div>
  </div>
</template>

<script>
import BigStar from '../components/icons/BigStar.vue';
import SmallStar from '../components/icons/SmallStar.vue';

export default {
  components: {
    BigStar,
    SmallStar,
  },
  data() {
    return {
      showText: false,
      showStars: false,
    };
  },
  mounted() {
    this.$data.showText = true;
    setTimeout(() => {
      this.$data.showStars = true;
    }, 1200);
  },
};
</script>

<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
}

.box {
  position: relative;
}

.paragraph {
  color: #fff;
  font-size: 64px;
  font-weight: 700;
  line-height: 76.8px;
  letter-spacing: 12px;
  font-family: 'bpgArial';
}

.big-star {
  position: absolute;
  left: 26px;
  top: -83px;
}

.small-star {
  position: absolute;
  right: 30px;
  top: 86px;
}

.big-star-enter-from {
  opacity: 0;
  transform: scale(0.9) translate(25px, 90px);
}

.big-star-enter-to {
  opacity: 1;
  transform: scale(1) translate(0, 0);
}

.small-star-enter-from {
  opacity: 0;
  transform: translate(-48px, -68px);
}

.small-star-enter-to {
  opacity: 1;
  transform: translate(0, 0);
}

.big-star-enter-active,
.small-star-enter-active {
  transition: all 0.3s ease-out;
}

.paragraph-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(-8px);
}
.paragraph-enter-active {
  transition: all 0.5s 0.4s;
}

.paragraph-enter-to {
  opacity: 1;
  transform: scale(1) translateY(0);
}
</style>
