<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-card-text>
      <div class="title text-center">
        {{ infos[(condition - 1) % 2][round].title }}
      </div>
      <div class="subtitle-1 text-center">
        문제 수: {{ infos[(condition - 1) % 2][round].wordCount }}
      </div>
      <div class="subtitle-1 text-center">
        공부시간: {{ infos[(condition - 1) % 2][round].time }}
      </div>
      <Textbox
        :value="textbox[round][parseInt((condition - 1) / 2)][page]"
      />

      <div
        class="px-3 py-5 body-1 text-center"
      >
        <div style="width: 40%; margin: 0 auto">
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
    infos: [[{
      title: '튜토리얼',
      wordCount: 2,
      time: '30초',
    }, {
      title: '세트A',
      wordCount: 10,
      time: '3분',
    }, {
      title: '세트B',
      wordCount: 10,
      time: '3분',
    }], [{
      title: '튜토리얼',
      wordCount: 2,
      time: '30초',
    }, {
      title: '세트A',
      wordCount: 25,
      time: '3분',
    }, {
      title: '세트B',
      wordCount: 25,
      time: '3분',
    }]],
    page: 0,
    textbox: [[
      [
        [
          '단어를 외우는 시간이네!', // Tutorial
          '오늘 같이 공부한걸 생각하면',
          '더 잘 외워지지 않을까?',
          '우선 어떻게 하는지 한 번',
          '연습하라고 하네. 한 번 해보자!',
        ],
      ],
      [
        [
          '자, 오늘 배운 발음을 생각하면서',
          '단어를 외워봅시다! 우선 어떻게',
          '하는지 한 번 연습해볼까요?',
        ],
      ],
    ], [
      [
        [
          '준비됐어?', // Round 1
        ],
      ],
      [
        [
          '준비됐나요?',
        ],
      ],
    ], [
      [
        [
          '준비됐어?', // Round 2
        ],
      ],
      [
        [
          '준비됐나요?',
        ],
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
