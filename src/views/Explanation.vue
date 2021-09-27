<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1 text-center">
          실험 전 안내사항
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-card-text>
      <div
        v-for="(item, key) in desc[page]"
        :key="key"
      >
        <div class="text-center mb-3 title">
          {{ item.title }}
        </div>

        <div
          class="px-3 py-5 body-1"
          :class="{'text-center': item.align}"
        >
          <span
            v-for="(content, key2) in item.content"
            :key="key2"
          >
            {{ content }}<br />
          </span>
        </div>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        color="primary"
        :disabled="disabled"
        @click="submit"
      >
        {{ page === 2 ? '다음' : '확인' }} {{ countDown > 0 ? `(${countDown})` : '' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { setTimeout } from 'timers';

export default {
  data: () => ({
    countDown: 5,
    page: 0,
    desc: [[{
      title: '실험내용 안내',
      content: [
        '귀하는 해당 실험에서 불어사용국가 생활에서 유용한 불어단어를 공부하게 됩니다.',
        '귀하의 불어수준은 사전 테스트를 통해 데이터화되어 입력되어 있으며,',
        '귀하의 불어 단어능력을 향상시킬 수 있도록 설계되었습니다.',
      ],
    }, {
      title: '실험 진행시 주의사항',
      content: [
        '실험시간동안 이루어지는 단어공부과정은 모두 데이터화되어 저장됩니다.',
        '단어공부 및 시험 시 치팅을 주의해 주시기 바랍니다.',
        '치팅 내역은 데이터 분석을 통해 판별될 수 있으며,',
        '감지될 경우 실험비 지급이 어려울 수 있습니다.',
        '단어시험의 결과는 실험비 지급여부와 무관합니다.',
      ],
    }], [{
      title: '인공지능 에이전트 Noah',
      content: [
        '인공지능 에이전트는 특정한 목적을 위해 주어진 과업에 따라 작업을 수행하는 자율적 프로세스입니다.',
        '인공지능 에이전트 \'Noah\'는 자율적인 인격체를 부여받아, 인간과 상호작용할 수 있도록 설계되었습니다.',
        '해당 실험에서는 Noah와 함께 주어진 단어를 외우며, 단어를 외운 후 평가를 진행하게 됩니다.',
      ],
    }], [{
      title: '',
      content: [
        '지금부터 실험을 시작하겠습니다.',
        '이제부터 안내 내용을 따라오면서',
        '학습 파트너 \'Noah\'와',
        '단어를 외워보세요.',
      ],
      align: 'center',
    }]],
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
      if (!this.page || this.page === 1) {
        this.page += 1;
        this.countDown = 5;
        this.countDownTimer();
      } else if (this.page === 1) {
        this.page += 1;
      } else {
        this.$router.push({ name: 'Intro' });
      }
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
