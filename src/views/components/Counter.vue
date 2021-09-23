<template>
  <v-overlay
    :value="overlay"
  >
    <div class="counter">
      <span class="number">
        {{ countDown }}
      </span>
    </div>
  </v-overlay>
</template>

<script>
import { setTimeout } from 'timers';

export default {
  props: {
    countdown: {
      type: Number,
      default: 3,
    },
  },

  data: () => ({
    overlay: true,
    countDown: 0,
  }),

  emits: {
    next: () => true,
  },

  mounted() {
    this.countDown = this.countdown;
    this.countDownTimer();
  },

  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.overlay = false;
        this.$emit('next');
      }
    },
  },
};
</script>

<style scoped>
  .counter {
    display: block;
    width: 240px;
    height: 240px;
    border: 15px solid #ccc;
    border-radius: 9999px;
    font-size: 80px;
    text-align: center;
  }
  .number {
    display: block;
    margin: 45px auto 0;
    color: rgb(228, 228, 228);
  }
</style>
