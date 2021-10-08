<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-card-text>
      <div class="title text-center">
        단어 연습문제
      </div>
      <v-divider />
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
              v-for="(item, index) in words[round]"
              :key="index"
            >
              <td class="text-center">
                {{ item.word }}
              </td>
              <td class="text-center">
                {{ item.def }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>

    <v-card-actions
      class="text-center"
    >
      <v-col>
        <v-btn
          class="mx-5"
          width="65%"
          color="primary"
          @click="submit"
        >
          암기 완료
        </v-btn>
        <span
          class="body-1"
        >
          {{ getTime(countDown) }}
        </span>
      </v-col>
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
    countDown: 60,
    page: 0,
    headers: [{
      text: '단어', value: 'word', sortable: false, align: 'center',
    }, {
      text: '뜻', value: 'def', sortable: false, align: 'center',
    }],
    words: [[
      {
        word: 'Bonjour',
        def: '안녕하세요',
      },
      {
        word: 'Oui',
        def: '네',
      },
    ], [
      {
        word: 'Merci',
        def: '감사합니다',
      },
      {
        word: 'Bonsoir',
        def: '안녕히 주무세요',
      },
      {
        word: 'Non',
        def: '아니오',
      },
      {
        word: 'Café',
        def: '카페',
      },
      {
        word: 'Entrée',
        def: '입구',
      },
      {
        word: 'Sortie',
        def: '출구',
      },
      {
        word: 'Université',
        def: '대학교',
      },
      {
        word: 'chaise',
        def: '의자',
      },
      {
        word: 'S\'il vous plaît',
        def: '실례합니다',
      },
      {
        word: 'maison',
        def: '집',
      },
    ], [
      {
        word: 'métro',
        def: '지하철',
      },
      {
        word: 'thé',
        def: '티, 차',
      },
      {
        word: 'téléphone',
        def: '전화',
      },
      {
        word: 'toilette',
        def: '화장실',
      },
      {
        word: 'taxi',
        def: '택시',
      },
      {
        word: 'Excusez-moi',
        def: '부탁합니다',
      },
      {
        word: 'bonheur',
        def: '행복',
      },
      {
        word: 'auteur',
        def: '작가',
      },
      {
        word: 'ail',
        def: '마늘',
      },
      {
        word: 'saison',
        def: '계절',
      },
    ]],
    textbox: [[
      [
        '30초 동안 단어를 외워보자!',
      ],
    ], [
      [
        '나와 함께 단어를 외워보자',
        '10분 동안 외우는거야.',
      ],
    ], [
      [
        '나와 함께 단어를 외워보자',
        '10분 동안 외우는거야.',
      ],
    ]],
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
  },

  mounted() {
    if (this.round === 0) {
      this.countDown = 30;
    } else {
      this.countDown = 60 * 10;
    }
    this.countDownTimer();
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Quiz', query: { round: this.round } });
    },

    countDownTimer() {
      if (this.$router.history.current.name === 'Voca') {
        if (this.countDown > 0) {
          setTimeout(() => {
            this.countDown -= 1;
            this.countDownTimer();
          }, 1000);
        } else {
          this.submit();
        }
      }
    },

    getColor(answer, myanswer) {
      let color = 'green';
      if (answer !== myanswer) color = 'red';
      else color = 'green';
      return color;
    },

    getTime(time) {
      const min = parseInt((time % 3600) / 60, 10);
      const sec = time % 60;
      return min > 0 ? `${min}분 ${sec}초` : `${sec}초`;
    },
  },
};
</script>
