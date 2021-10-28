<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-card-text>
      <div class="px-8 mb-5 title text-center">
        실험 종료
      </div>
      <v-divider />
      <div class="px-8 py-5 body-1 text-center">
        단어외우기와 관련된 실험이 종료되었습니다. <br />
        아래 버튼을 누르시고 [설문조사 하러가기] 버튼을 눌러주세요. <br />
        설문조사까지 모두 완료되어야 <br />
        최종적으로 실험이 완료됩니다.
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        color="primary"
        :loading="isSending"
        :disabled="disabled"
        @click="goSurvey"
      >
        설문조사 하러가기 {{ countDown > 0 ? `(${countDown})` : '' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
// import axios from 'axios';

export default {
  data: () => ({
    isSending: false,
    countDown: 5,
  }),

  computed: {
    condition() {
      return this.$store.state.data.experimentType;
    },

    disabled() {
      return this.countDown > 0;
    },
  },

  async mounted() {
    this.submitData();
    this.countDownTimer();
    setTimeout(() => {
      // this.goSurvey();
      // if (!this.isSending) {
      //   const url = 'https://docs.google.com/forms/d/e/1FAIpQLScJc0mV0mqJBh-TYiXZb4jDbsMf-exUKO3yJieu-zunOv3tUQ/viewform';
      //   window.location = url;
      // }
    }, this.countDown * 1000);
  },

  methods: {
    async submitData() {
      this.isSending = true;
      const data = this.$store.getters.getSubmitData;
      console.log(data, this.$store);
      try {
        await this.$firebase.database().ref(`response/${this.$store.state.data.participantID}`).set(data);
      } catch (err) {
        console.log(err);
      } finally {
        this.isSending = false;
      }
    },

    goSurvey() {
      const url = 'https://forms.gle/tP4Swd7NCTcGFFJY9';
      window.open(url);
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
