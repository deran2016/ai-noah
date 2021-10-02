<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-card-text>
      <div class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
        />
        <br />
        <br />
        채점중...
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    countDown: 2,
  }),

  computed: {
    condition() {
      return this.$store.state.data.experimentType;
    },

    round() {
      return this.$route.query.round || 0;
    },
  },

  mounted() {
    this.countDownTimer();
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Result', query: { round: this.round } });
    },

    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.submit();
      }
    },
  },
};
</script>

<style>
  .word {
    padding: 60px 30px;
    text-align: center;
    font-size: 30px;
  }
</style>
