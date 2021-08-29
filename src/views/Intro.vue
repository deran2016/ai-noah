<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-card-text
      class="row"
    >
      <div class="column">
        <h1 class="intro_title">
          재미있는
          <br />
          과학 이야기
        </h1>
        <v-btn
          outlined
          rounded
          style="width: 80%; font-size: 30px; padding: 30px; margin: 0 auto;"
          color="primary"
          @click="submit"
        >
          학습 시작 ▶︎
        </v-btn>
      </div>
      <img
        class="intro_img"
        :src="require('@/assets/img/3.png')"
        height="300px"
      />
    </v-card-text>
  </v-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { setTimeout } from 'timers';

export default {
  data: () => ({
    countDown: 7,
  }),

  computed: {
    disabled() {
      return this.countDown > 0;
    },
    condition() {
      return this.$store.state.data.experimentType;
    },
  },

  mounted() {
    this.countDownTimer();
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Experiment1' });
    },

    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },
  },
};
</script>

<style>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.column {
  display: flex;
  flex-direction: column;
}
.intro_img {
  text-align: center;
}
.intro_title {
  margin: 10px 50px 10px 50px;
  font-size: 70px !important;
  line-height: 100px;
  text-align: center;
}
</style>
