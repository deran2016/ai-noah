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
        :value="textbox[(condition - 1) % 2][round][parseInt((condition - 1) / 2)][page]"
      />
      <div
        class="px-3 py-5 body-1 text-center"
        style="width: 20%; margin: 0 auto"
      >
        <v-img
          :src="require(`@/assets/noah${parseInt((condition - 1) / 2)}.png`)"
        />
      </div>

      <v-simple-table
        fixed-header
        height="350px"
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
              v-for="(item, index) in words[(condition - 1) % 2][round]"
              :key="index"
            >
              <td class="text-center">
                {{ item.word }}
                <v-btn
                  icon
                  color="green"
                  :disabled="isPlaying"
                  @click="playAudio(item.word)"
                >
                  <v-icon>mdi-volume-high</v-icon>
                </v-btn>
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
          width="40%"
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
    isPlaying: false,
    countDown: 60,
    page: 0,
    headers: [{
      text: '단어', value: 'word', sortable: false, align: 'center',
    }, {
      text: '뜻', value: 'def', sortable: false, align: 'center',
    }],
    words: [[[
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
    ]], [[
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
        word: 'Excusez-moi',
        def: '부탁합니다',
      },
      {
        word: 'Enchanté',
        def: '처음 뵙겠습니다',
      },
      {
        word: 'entrée',
        def: '입구',
      },
      {
        word: 'sortie',
        def: '출구',
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
        word: 'Au revoir',
        def: '잘가',
      },
      {
        word: 'dire',
        def: '말하다, 부탁하다',
      },
      {
        word: 'sourire',
        def: '미소',
      },
      {
        word: 'parler',
        def: '말하다, 알다',
      },
      {
        word: 'se dire',
        def: '생각하다',
      },
      {
        word: 'savoir',
        def: '알다',
      },
      {
        word: 'penser',
        def: '생각하다',
      },
      {
        word: 'manger',
        def: '식사하다',
      },
      {
        word: 'arbre',
        def: '나무',
      },
      {
        word: 'savourer',
        def: '맛보다, 음미하다',
      },
      {
        word: 'aller',
        def: '가다',
      },
      {
        word: 'déguster',
        def: '시음하다',
      },
      {
        word: 'rideau',
        def: '커튼',
      },
      {
        word: 'dormir',
        def: '자다',
      },
      {
        word: 'mettre',
        def: '입다',
      },
      {
        word: 'connaître',
        def: '알다, 구분하다',
      },
      {
        word: 'venir',
        def: '오다',
      },
      {
        word: 'dérider',
        def: '근심을 덜다',
      },
      {
        word: 'Bienvenue',
        def: '어서오세요',
      },
    ], [
      {
        word: 'raffine',
        def: '세련된',
      },
      {
        word: 'tendresse',
        def: '부드러움, 유연함',
      },
      {
        word: 'lisse',
        def: '부드럽게 하다, 윤기나게 하다',
      },
      {
        word: 'réconforté',
        def: '격려하다',
      },
      {
        word: 'fêter',
        def: '축하하다',
      },
      {
        word: 'joyeux',
        def: '즐거운',
      },
      {
        word: 'heureux',
        def: '행복한',
      },
      {
        word: 'poisson',
        def: '생선',
      },
      {
        word: 'fraise',
        def: '딸기',
      },
      {
        word: 'alimentaire',
        def: '음식의, 영양의',
      },
      {
        word: 'quelque',
        def: '다소',
      },
      {
        word: 'fenêtre',
        def: '창문',
      },
      {
        word: 'chambre',
        def: '침실',
      },
      {
        word: 'premier',
        def: '첫번째',
      },
      {
        word: 'derrière',
        def: '~의 뒤에',
      },
      {
        word: 'ranger',
        def: '정리하다',
      },
      {
        word: 'jouer',
        def: '놀다, 장난하다',
      },
      {
        word: 'l\'avant',
        def: '~의 앞에',
      },
      {
        word: 'laver',
        def: '씻다',
      },
      {
        word: 'verrière',
        def: '창문',
      },
      {
        word: 'bonheur',
        def: '행복',
      },
      {
        word: 'poubelle',
        def: '쓰레기통',
      },
      {
        word: 'réjouir',
        def: '기쁘게하다',
      },
      {
        word: 'féliciter',
        def: '만족해하다, 기뻐하다',
      },
      {
        word: 'cuiller',
        def: '숟가락',
      },
    ]]],
    textbox: [[[
      [
        [
          '자. 30초동안 단어를 외워보자!',
        ],
      ],
      [
        [
          '자, 30초동안 단어를 외워봅시다.',
        ],
      ],
    ], [
      [
        [
          '나와 함께 단어를 외워보자',
          '3분 동안 외우는거야.',
        ],
      ],
      [
        [
          '저와 함께 단어를 외워볼게요.',
          '3분 동안 외워보겠습니다.',
        ],
      ],
    ], [
      [
        [
          '나와 함께 단어를 외워보자',
          '3분 동안 외우는거야.',
        ],
      ],
      [
        [
          '저와 함께 단어를 외워볼게요.',
          '3분 동안 외워보겠습니다.',
        ],
      ],
    ]], [[
      [
        [
          '자. 30초동안 단어를 외워보자!',
        ],
      ],
      [
        [
          '자, 30초동안 단어를 외워봅시다.',
        ],
      ],
    ], [
      [
        [
          '나와 함께 단어를 외워보자',
          '3분 동안 외우는 거야.',
        ],
      ],
      [
        [
          '저와 함께 단어를 외워볼게요.',
          '3분 동안 외워보겠습니다.',
        ],
      ],
    ], [
      [
        [
          '나와 함께 단어를 외워보자',
          '3분 동안 외우는 거야.',
        ],
      ],
      [
        [
          '저와 함께 단어를 외워볼게요.',
          '3분 동안 외워보겠습니다.',
        ],
      ],
    ]]],
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
    this.countDown = this.setCountDown();
    this.countDownTimer();
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Quiz', query: { round: this.round } });
    },

    setCountDown() {
      let countDown;
      if (this.condition === '1' || this.condition === '3') {
        if (this.round === 0) {
          countDown = 30; // 30 seconds
        } else if (this.round > 0) {
          countDown = 60 * 3; // 3 minutes
        }
      } else if (this.condition === '2' || this.condition === '4') {
        if (this.round === 0) {
          countDown = 30; // 30 seconds
        } else if (this.round > 0) {
          countDown = 60 * 3; // 3 minutes
        }
      }
      return countDown;
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

    playAudio(file) {
      this.file = file;

      const audio = document.getElementById(this.file);
      try {
        audio.play();
        audio.onplaying = () => {
          this.isPlaying = true;
        };
        audio.onended = () => {
          this.isPlaying = false;
        };
      } catch (e) {
        console.log(e);
      } finally {
        this.isPlaying = false;
      }
    },
  },
};
</script>
