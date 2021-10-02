<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-card-text>
      <div class="title text-center">
        {{ infos[round].title }}
      </div>
      <div class="subtitle-1 text-center">
        문제 수: {{ infos[round].wordCount }}
      </div>
      <div class="subtitle-1 text-center">
        공부시간: {{ infos[round].time }}
      </div>
      <Textbox
        :value="textbox[round][page]"
      />

      <div
        class="px-3 py-5 body-1 text-center"
      >
        <div style="width: 25%; margin: 0 auto">
          <v-img
            :src="require('@/assets/noah.png')"
          />
        </div>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        color="primary"
        :disabled="disabled"
        @click="submit()"
      >
        공부 시작하기 {{ countDown > 0 ? `(${countDown})` : '' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { setTimeout } from 'timers';
import Textbox from './components/Textbox.vue';

export default {
  components: {
    Textbox,
  },
  data: () => ({
    countDown: 5,
    infos: [{
      title: '튜토리얼',
      wordCount: 2,
      time: '1분',
    }, {
      title: '세트A',
      wordCount: 10,
      time: '10분',
    }],
    page: 0,
    textbox: [[
      [
        '자, 연습문제를 풀어보자!', // Tutorial
        '30초 동안 단어를 외워보자.',
        '준비됐으면 아래 버튼을 눌러줘.',
      ],
    ], [
      [
        '준비됐어?', // Rount 1
      ],
    ]],
  }),

  computed: {
    condition() {
      return this.$store.state.data.experimentType;
    },

    disabled() {
      return this.countDown > 0;
    },

    round() {
      return Number(this.$route.query.round) || 0;
    },
  },

  mounted() {
    this.countDownTimer();
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Voca', query: { round: this.round } });
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
