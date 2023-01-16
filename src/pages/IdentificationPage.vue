<template>
  <main-frame>
    <template #form>
      <identification-form @submit="submit"></identification-form>
      <div class="line"></div>
      <p class="paragraph">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
    </template>
    <template #animation>
      <transition>
        <the-rectangle v-if="show" class="rectangle"></the-rectangle>
      </transition>
      <img src="../assets/images/kiddos.png" class="kiddos" />
    </template>
    <the-navigation>
      <button type="submit" form="vee" class="right-vector">
        <navigate-right></navigate-right>
      </button>
    </the-navigation>
  </main-frame>
</template>

<script>
import IdentificationForm from '../components/form/IdentificationForm.vue';
import NavigateRight from '../components/icons/NavigateRight.vue';
import TheRectangle from '../components/icons/TheRectangle.vue';

export default {
  components: {
    IdentificationForm,
    NavigateRight,
    TheRectangle,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.$data.show = true;
  },
  methods: {
    submit() {
      this.$router.push('/questionnaire');
    },
  },
};
</script>

<style scoped>
.line {
  margin-top: 64px;
  width: 237px;
  border-bottom: 0.8px solid var(--black);
}

.paragraph {
  margin-top: 20px;
  width: 365px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #626262;
}

.right-vector {
  border: none;
  background-color: #eaeaea;
  margin-left: 147px;
}

.rectangle {
  position: absolute;
  top: 388px;
  right: 360px;
  z-index: 1;
  animation: recmoving 0.6s;
}
.kiddos {
  position: relative;
  z-index: 2;
}

.v-enter-active {
  transform-origin: left;
  transition: transform 0.5s;
}

@keyframes recmoving {
  0% {
    transform: scale(0.6, 0.6) translate(-50px, 20px);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1) translate(0, 0);
    opacity: 8;
  }
}
</style>
