<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      max-width="600"
      persistent
    >
      <template v-slot:default="dialog">
        <v-card>
          <v-card-text>
            <div class="body-1 pa-3 py-6">
              이제 문제를 풀어보겠습니다.<br />
              Noah가 낸 문제를 보고, 맞는 답을 고르세요.<br />
              기회는 한 번 뿐이니 신중히 생각 후 답을 골라주세요.<br />
              단어를 선택하면 다음 문제로 넘어갑니다.<br />
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              block
              color="primary"
              @click="dialog.value = false; overlay = true"
            >
              확인
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

    <Counter
      v-if="overlay"
      :countdown="3"
      @next="setQuiz()"
    />

    <v-card-text>
      <div
        class="text-center"
      >
        {{ (quizIndex + 1) + '/' + (quizs[round].length) }}
      </div>
      <div
        class="word"
      >
        {{ quiz.question }}
      </div>
      <v-divider />
    </v-card-text>

    <v-card-actions>
      <v-col>
        <v-btn
          v-for="(item, i) in shuffleArr(quiz.answers)"
          :key="i"
          block
          outlined
          class="my-2"
          color="primary"
          @click="checkAnswer(item)"
        >
          {{ item }}
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { mapMutations } from 'vuex';
import Counter from './components/Counter.vue';

export default {
  components: {
    Counter,
  },

  data: () => ({
    dialog: true,
    overlay: false,
    quizIndex: 0,
    quiz: {
      question: '',
      answers: ['', '', ''],
      answer: '',
    },
    quizs: [[
      {
        question: '지구',
        answers: ['지구', '화성', '목성'],
        answer: '지구',
      }, {
        question: '한국',
        answers: ['한국', '중국', '일본'],
        answer: '한국',
      },
    ]],
    answers: [],
    submitData: [],
  }),

  computed: {
    condition() {
      return this.$store.state.data.experimentType;
    },

    round() {
      return this.$store.state.data.round || 0;
    },
  },

  mounted() {
  },

  methods: {
    ...mapMutations([
      'updateFields',
    ]),

    submit() {
      this.$set(this.submitData, `round${this.round}`, { answers: this.answers });
      this.updateFields(this.submitData);
      this.$router.push({ name: 'Grading' });
    },

    shuffleArr(arr) {
      const newArr = arr;
      for (let i = 0; i < newArr.length; i += 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr;
    },

    setQuiz() {
      this.quiz = this.quizs[this.round][this.quizIndex];
    },

    pushAnswer(item) {
      this.answers.push({
        question: this.quiz.question,
        answer: this.quiz.answer,
        myanswer: item,
      });
    },

    checkAnswer(item) {
      /** 맞는 답일때만 넘어가려면
      if (this.quiz.answer === item) {
        if (this.quizs[this.round].length - 1 === this.quizIndex) {
          console.log('퀴즈 종료');
          this.submit();
        } else {
          this.pushAnswer(item);
          this.quizIndex += 1;
          this.setQuiz();
        }
      }
      */
      this.pushAnswer(item);
      if (this.quizs[this.round].length - 1 === this.quizIndex) {
        console.log('퀴즈 종료');
        this.submit();
      } else {
        this.quizIndex += 1;
        this.setQuiz();
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
