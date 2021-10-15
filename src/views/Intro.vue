<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-card-text>
      <Textbox
        :value="textbox[page]"
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
        @click="next()"
      >
        {{ page === textbox.length - 1 ? '준비됐어' : '다음' }}
        {{ countDown > 0 ? `(${countDown})` : '' }}
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
    countDown: 4,
    page: 0,
    textbox: [[
      '안녕? 반가워.',
      '난 너의 친구, 노아라고 해.',
    ], [
      '오늘은 나와 같이',
      '기초 불어를 공부해보자.',
    ], [
      '불어는 아마 잘 모를테니까,',
      '우선 간단하게 단어를 읽는',
      '방법부터 알아볼까?',
    ], [
      '재미있겠다! 준비됐어?',
      '준비됐으면 아래의 버튼을',
      '눌러줘.',
    ]],
  }),

  computed: {
    condition() {
      return this.$store.state.data.experimentType;
    },

    disabled() {
      return this.countDown > 0;
    },
  },

  mounted() {
    this.countDownTimer();
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Main' });
    },

    resetCount() {
      this.countDown = 3;
      this.countDownTimer();
    },

    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },

    next() {
      if (this.page >= this.textbox.length - 1) {
        this.submit();
      } else {
        this.page += 1;
        this.resetCount();
      }
    },
  },
};
</script>
