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
        {{ (quizIndex + 1) + '/' + (quizs[(condition - 1) % 2][round].length) }}
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
    quizs: [[[
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
    ]], [[
      {
        question: '안녕하세요',
        answers: ['Bonjoure', 'Bonjour', 'Bonjore', 'Bonsoir'],
        answer: 'Bonjour',
      },
      {
        question: '네',
        answers: ['Ouii', 'Oi', 'Oui', 'Oei'],
        answer: 'Oui',
      },
    ], [
      {
        question: '부탁합니다',
        answers: ['Excues-moi', 'Excusez-moi', 'Excuses-moi', 'Excuze-moi'],
        answer: 'Excusez-moi',
      },
      {
        question: '알다, 구분하다',
        answers: ['combien', 'déguster', 'connaître', 'penser'],
        answer: 'connaître',
      },
      {
        question: '식사하다',
        answers: ['déguster', 'savourer', 'manger', 'prénom'],
        answer: 'manger',
      },
      {
        question: '잘가',
        answers: ['Bonsoir', 'Au revoir', 'bientet', 'salute'],
        answer: 'Au revoir',
      },
      {
        question: '나무',
        answers: ['aller', 'arbru', 'arbre', 'neigu'],
        answer: 'arbre',
      },
      {
        question: '자다',
        answers: ['domir', 'dormir', 'dormire', 'domire'],
        answer: 'dormir',
      },
      {
        question: '말하다, 알다',
        answers: ['revir', 'dire', 'parler', 'rideau'],
        answer: 'parler',
      },
      {
        question: '입다',
        answers: ['metrre', 'mettree', 'mettre', 'mèttre'],
        answer: 'mettre',
      },
      {
        question: '출구',
        answers: ['sortié', 'sortiée', 'sortia', 'sortie'],
        answer: 'sortie',
      },
      {
        question: '시음하다',
        answers: ['manger', 'penser', 'savourer', 'déguster'],
        answer: 'déguster',
      },
      {
        question: '가다',
        answers: ['alle', 'allere', 'aller', 'ellar'],
        answer: 'aller',
      },
      {
        question: '말하다, 부탁하다',
        answers: ['demain', 'dire', 'tard', 'revir'],
        answer: 'dire',
      },
      {
        question: '처음 뵙겠습니다',
        answers: ['Enchanté', 'Enchante', 'Enchanteda', 'Enchantéda'],
        answer: 'Enchanté',
      },
      {
        question: '맛보다, 음미하다',
        answers: ['savoure', 'savourer', 'savior', 'parler'],
        answer: 'savourer',
      },
      {
        question: '입구',
        answers: ['épuisé', 'entree', 'entrée', 'entry'],
        answer: 'entrée',
      },
      {
        question: '미소',
        answers: ['sourire', 'savoir', 'semaine', 'souirre'],
        answer: 'sourire',
      },
      {
        question: '실례합니다',
        answers: ['Excusez-moi', 'Excuse-moi', 'S\'il vous plaît', 'S\'il vos plaît'],
        answer: 'S\'il vous plaît',
      },
      {
        question: '어서오세요',
        answers: ['Enchanté', 'Bienvanue', 'Enchante', 'Bienvenue'],
        answer: 'Bienvenue',
      },
      {
        question: '의자',
        answers: ['chais', 'chaire', 'chaise', 'chiasee'],
        answer: 'chaise',
      },
      {
        question: '커튼',
        answers: ['rideau', 'retrou', 'rideue', 'rouver'],
        answer: 'rideau',
      },
      {
        question: '근심을 덜다',
        answers: ['dérider', 'dèrider', 'désunir', 'dèsunir'],
        answer: 'dérider',
      },
      {
        question: '생각하다',
        answers: ['pensar', 'prais', 'pense', 'penser'],
        answer: 'penser',
      },
      {
        question: '알다',
        answers: ['tard', 'savoir', 'combien', 'combién'],
        answer: 'savoir',
      },
      {
        question: '오다',
        answers: ['aller', 'venir', 'vénir', 'allar'],
        answer: 'venir',
      },
      {
        question: '생각하다',
        answers: ['dire', 'se dire', 'savior', 'sortie'],
        answer: 'se dire',
      },
    ], [
      {
        question: '첫번째',
        answers: ['premier', 'fraise', 'premièr', 'première'],
        answer: 'premier',
      },
      {
        question: '즐거운',
        answers: ['fraise', 'joyeux', 'bonheur', 'praise'],
        answer: 'joyeux',
      },
      {
        question: '격려하다',
        answers: ['réconforte', 'feter', 'réconforté', 'fêter'],
        answer: 'réconforté',
      },
      {
        question: '생선',
        answers: ['poisson', 'poison', 'possion', 'possioun'],
        answer: 'poisson',
      },
      {
        question: '창문',
        answers: ['fenetre', 'verrièru', 'fenêtre', 'verriêru'],
        answer: 'fenêtre',
      },
      {
        question: '씻다',
        answers: ['lever', 'laver', 'le leaver', 'laverr'],
        answer: 'laver',
      },
      {
        question: '창문',
        answers: ['tiroir', 'fenetre', 'verrière', 'verriêru'],
        answer: 'verrière',
      },
      {
        question: '놀다, 장난하다',
        answers: ['jouer', 'jardin', 'joyeux', 'joyeur'],
        answer: 'jouer',
      },
      {
        question: '부드럽게 하다, 윤기나게 하다',
        answers: ['tendresse', ' lisse', 'tendresse', 'lissea'],
        answer: ' lisse',
      },
      {
        question: '정리하다',
        answers: ['rangement', 'range', 'ranger', 'déposer'],
        answer: 'ranger',
      },
      {
        question: '부드러움, 유연함',
        answers: ['tenderess', 'tenderese', 'tendrasse', 'tendresse'],
        answer: 'tendresse',
      },
      {
        question: '행복한',
        answers: ['bonheur', 'heureux', 'joyeux', 'joyuex'],
        answer: 'heureux',
      },
      {
        question: '침실',
        answers: ['chétare', 'chambre', 'derrière', 'rideau'],
        answer: 'chambre',
      },
      {
        question: '쓰레기통',
        answers: ['pubelle', 'boîte', 'bouteille', 'poubelle'],
        answer: 'poubelle',
      },
      {
        question: '숟가락',
        answers: ['cuiller', 'cutiller', 'cutller', 'culler'],
        answer: 'cuiller',
      },
      {
        question: '세련된',
        answers: ['reffine', 'raffine', 'rafine', 'refine'],
        answer: 'raffine',
      },
      {
        question: '해외의',
        answers: ['étranger', 'etrangér', 'tourisme', 'tourismé'],
        answer: 'étranger',
      },
      {
        question: '커튼',
        answers: ['cartian', 'rideue', 'rideau', 'certian'],
        answer: 'rideau',
      },
      {
        question: '다소',
        answers: ['qualque', 'assez', 'essaz', 'quelque'],
        answer: 'quelque',
      },
      {
        question: '만족해하다, 기뻐하다',
        answers: ['feliciter', 'bonhéur', 'féliciter', 'bonheur'],
        answer: 'féliciter',
      },
      {
        question: '딸기',
        answers: ['fraise', 'verry', 'berri', 'fêter'],
        answer: 'fraise',
      },
      {
        question: '축하하다',
        answers: ['bonheur', 'joyeux', 'fêter', 'complimenter'],
        answer: 'fêter',
      },
      {
        question: '행복',
        answers: ['plaisir', 'joyeux', 'jouissance', 'bonheur'],
        answer: 'bonheur',
      },
      {
        question: '~의 뒤에',
        answers: ['verrièru', 'arrière', 'derrière', 'avenir'],
        answer: 'derrière',
      },
      {
        question: '~의 앞에',
        answers: ['l\'avant', 'derrière', 'lavant', 'de\'rrière'],
        answer: 'l\'avant',
      },
      {
        question: '기쁘게하다',
        answers: ['réjouir', 'féliciter', 'feliciter', 'rejouir'],
        answer: 'réjouir',
      },
    ]]],
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
    // this.shuffleQuiz();
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
      this.quizs[(this.condition - 1) % 2][this.round].map((item) => {
        const nitem = item;
        nitem.answers = this.shuffleArr(item.answers);
        return nitem;
      });
    },

    setQuiz() {
      this.quiz = this.quizs[(this.condition - 1) % 2][this.round][this.quizIndex];
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
      this.selected = '';
      if (this.quizs[(this.condition - 1) % 2][this.round].length - 1 === this.quizIndex) {
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
