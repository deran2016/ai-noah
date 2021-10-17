<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-card-text>
      <div class="title text-center">
        결과
      </div>
      <v-divider />
      <div class="title text-center">
        {{ `${correct.length * (100 / result.answers.length)}/100` }}
      </div>
      <div class="mx-2 my-3 body-1 text-center">
        <span
          v-for="(item, key) in text"
          :key="`text${key}`"
        >
          {{ item }}<br />
        </span>
      </div>
      <Textbox
        :value="textbox[round][page]"
      />
      <div
        class="px-3 py-5 body-1 text-center"
        style="width: 40%; margin: 0 auto"
      >
        <v-img
          :src="require('@/assets/noah.png')"
        />
      </div>
      <v-divider />
      <v-simple-table
        class="elevation-1"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th
                v-for="(header, index) in headers"
                :key="index"
                class="text-center"
              >
                {{ header.text }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in result.answers"
              :key="index"
            >
              <td class="text-center">
                {{ item.answer }}
              </td>
              <td class="text-center">
                {{ item.question }}
              </td>
              <!--
              <td class="text-center">
                <v-chip
                  :color="getColor(item.answer, item.myanswer)"
                  dark
                >
                  {{ item.myanswer }}
                </v-chip>
              </td>
              -->
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        color="primary"
        :disabled="disabled"
        @click="next()"
      >
        {{ page === textbox[round].length - 1 ?
          (round > 0 ? (round === 2 ? '끝내기' : '다음 세트 풀기') : '단어 외우러 가기')
          : '다음' }}
        {{ countDown > 0 ? `(${countDown})` : '' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
import Textbox from './components/Textbox.vue';

export default {
  components: {
    Textbox,
  },

  data: () => ({
    countDown: 3,
    page: 0,
    textbox: [[
      [
        '잘했어. 이렇게 하면 되는거야.',
      ], [
        '이제 첫번째 세트를 공부해볼까?',
      ], [
        '준비됐으면 아래 버튼을 눌러보자!',
      ],
    ], [
      [
        '정말 잘했어! 다음 공부도 파이팅하자.',
      ],
    ], [
      [
        '정말 잘했어! 다음 공부도 파이팅하자.',
      ],
    ]],
    headers: [{
      text: '단어', value: 'answer', sortable: false, align: 'center',
    }, {
      text: '뜻', value: 'question', sortable: false, align: 'center',
    },
    /*
    {
      text: '내가 쓴 정답', value: 'myanswer', sortable: false, align: 'center',
    }
    */
    ],
  }),

  computed: {
    disabled() {
      return this.countDown > 0;
    },

    condition() {
      return this.$store.state.data.experimentType;
    },

    round() {
      return Number(this.$route.query.round) || 0;
    },

    result() {
      return this.$store.state.data[`round${this.round}`] || 'No results';
    },

    correct() {
      return this.result.answers.filter((item) => item.answer === item.myanswer);
    },

    text() {
      let str;
      if (this.round === 0) {
        str = ['본 세트에서는 단어 결과에 대한', '분석이 나타납니다.'];
      } else {
        str = ['당신의 단어 성적은', '같은 레벨의 사용자 중에서', '상위 10% 입니다.'];
      }
      return str;
    },
  },

  mounted() {
    this.countDownTimer();
    console.log(this.correct.length);
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Main', query: { round: this.round + 1 } });
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

    getColor(answer, myanswer) {
      let color = 'green';
      if (answer !== myanswer) color = 'red';
      else color = 'green';
      return color;
    },

    next() {
      if (this.page >= this.textbox[this.round].length - 1) {
        if (this.round === 2) {
          // eslint-disable-next-line no-alert
          this.$router.push({ name: 'Submit' });
        } else {
          this.submit();
        }
      } else {
        this.page += 1;
        this.resetCount();
      }
    },
  },
};
</script>
