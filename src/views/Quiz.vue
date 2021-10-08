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
            <br />
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
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              block
              :disabled="disabled"
              color="primary"
              @click="dialog.value = false; overlay = true"
            >
              준비됐어 {{ countDown > 0 ? `(${countDown})` : '' }}
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
        class="body-2 text-center"
      >
        {{ (quizIndex + 1) + '/' + (quizs[round].length) }}
      </div>
      <Textbox
        style="font-size: 30px; padding: 30px"
        :value="[quiz.question]"
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
    </v-card-text>

    <v-card-actions>
      <v-col>
        <v-col>
          <v-btn
            v-for="(item, i) in quiz.answers"
            :key="i"
            block
            depressed
            class="my-2"
            :color="selected && selected === item ? 'primary' : 'normal'"
            @click="selected = item"
          >
            {{ item }}
          </v-btn>
        </v-col>
        <v-btn
          block
          class="my-2"
          color="primary"
          :disabled="!selected"
          @click="checkAnswer(selected)"
        >
          선택완료
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { mapMutations } from 'vuex';
import Counter from './components/Counter.vue';
import Textbox from './components/Textbox.vue';

export default {
  components: {
    Counter,
    Textbox,
  },

  data: () => ({
    countDown: 3,
    dialog: true,
    overlay: false,
    page: 0,
    textbox: [[[
      '이제 문제를 풀어보자!',
      '내가 문제를 내볼게.',
      '준비됐어?',
    ]], [[
      '이제 문제를 풀어보자!',
      '내가 문제를 낼테니,',
      '맞는 단어를 골라줘.',
    ]], [[
      '이제 문제를 풀어보자!',
      '내가 문제를 낼테니,',
      '맞는 단어를 골라줘.',
    ]]],
    quizIndex: 0,
    selected: '',
    quiz: {
      question: '',
      answers: ['', '', ''],
      answer: '',
    },
    quizs: [[
      {
        question: '안녕하세요',
        answers: ['Bonjour', 'Bonjore', 'Bonsoir'],
        answer: 'Bonjour',
      }, {
        question: '네',
        answers: ['Oi', 'Oui', 'Oei'],
        answer: 'Oui',
      },
    ], [
      {
        question: '감사합니다',
        answers: ['Merci', 'Mersi', 'Mercie'],
        answer: 'Merci',
      },
      {
        question: '안녕히 주무세요',
        answers: ['Bonjour', 'Bonjoir', 'Bonsoir'],
        answer: 'Bonsoir',
      },
      {
        question: '아니오',
        answers: ['No', 'Non', 'None'],
        answer: 'Non',
      },
      {
        question: '카페',
        answers: ['Cafée', 'Café', 'Cafe'],
        answer: 'Café',
      },
      {
        question: '입구',
        answers: ['Entré', 'Entrée', 'Entree'],
        answer: 'Entrée',
      },
      {
        question: '출구',
        answers: ['Sortie', 'Sortié', 'Sortiee'],
        answer: 'Sortie',
      },
      {
        question: '대학교',
        answers: ['Universite', 'Universitée', 'Université'],
        answer: 'Université',
      },
      {
        question: '의자',
        answers: ['chaire', 'chais', 'chaise'],
        answer: 'chaise',
      },
      {
        question: '실례합니다',
        answers: ['Au revoir', 'Enchanté', 'S\'il vous plaît'],
        answer: 'S\'il vous plaît',
      },
      {
        question: '집',
        answers: ['mason', 'maison', 'flèche'],
        answer: 'maison',
      },
    ], [
      {
        question: '지하철',
        answers: ['metro', 'métro', 'underground'],
        answer: 'métro',
      },
      {
        question: '티, 차',
        answers: ['thé', 'téa', 'tea'],
        answer: 'thé',
      },
      {
        question: '전화',
        answers: ['téléphone', 'teléphone', 'téléphono'],
        answer: 'téléphone',
      },
      {
        question: '화장실',
        answers: ['toilet', 'toilett', 'toilette'],
        answer: 'toilette',
      },
      {
        question: '택시',
        answers: ['cap', 'taxi', 'texi'],
        answer: 'taxi',
      },
      {
        question: '부탁합니다',
        answers: ['Excusez-me', 'Excusez-moi', 'Excuse-moi'],
        answer: 'Excusez-moi',
      },
      {
        question: '행복',
        answers: ['bonheur', 'bonher', 'bonsoir'],
        answer: 'bonheur',
      },
      {
        question: '작가',
        answers: ['auther', 'authur', 'auteur'],
        answer: 'auteur',
      },
      {
        question: '마늘',
        answers: ['aile', 'ile', 'ail'],
        answer: 'ail',
      },
      {
        question: '계절',
        answers: ['saision', 'saison', 'season'],
        answer: 'saison',
      },
    ]],
    answers: [],
    submitData: [],
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
    this.shuffleQuiz();
  },

  methods: {
    ...mapMutations([
      'updateFields',
    ]),

    submit() {
      this.$set(this.submitData, `round${this.round}`, { answers: this.answers });
      this.updateFields(this.submitData);
      this.$router.push({ name: 'Grading', query: { round: this.round } });
    },

    shuffleArr(arr) {
      const newArr = arr;
      for (let i = 0; i < newArr.length; i += 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr;
    },

    shuffleQuiz() {
      this.quizs[this.round].map((item) => {
        const nitem = item;
        nitem.answers = this.shuffleArr(item.answers);
        return nitem;
      });
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
      this.pushAnswer(item);
      if (this.quizs[this.round].length - 1 === this.quizIndex) {
        console.log('퀴즈 종료');
        this.submit();
      } else {
        this.quizIndex += 1;
        this.setQuiz();
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

<style>
  .word {
    padding: 60px 30px;
    text-align: center;
    font-size: 30px;
  }
</style>
