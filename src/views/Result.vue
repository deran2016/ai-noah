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
      <v-divider />
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
              v-for="(item, index) in result.answers"
              :key="index"
            >
              <td class="text-center">
                {{ item.answer }}
                <v-btn
                  icon
                  color="green"
                  :disabled="isPlaying"
                  @click="playAudio(item.answer)"
                >
                  <v-icon>mdi-volume-high</v-icon>
                </v-btn>
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
        :disabled="disabled || isPlaying"
        @click="next()"
      >
        {{ page === textbox[(condition - 1) % 2][round][parseInt((condition - 1) / 2)].length - 1 ?
          (round > 0 ? (round === 2 ? '끝내기' : '다음 세트 풀기') : '단어 외우러 가기')
          : '다음' }}
        {{ countDown > 0 ? `(${countDown})` : '' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable radix */
/* eslint-disable import/no-unresolved */
import Textbox from './components/Textbox.vue';

export default {
  components: {
    Textbox,
  },

  data: () => ({
    isPlaying: false,
    countDown: 3,
    page: 0,
    textbox: [
      [ // Positive
        [ // Tutorial
          [
            [
              '이런 식으로 결과가 나오는구나!',
            ],
            [
              '이제 첫번째 세트를 공부해볼까?',
            ],
            [
              '준비됐으면 아래 버튼을 눌러보자!',
            ],
          ],
          [
            [
              '이렇게 결과를 확인할 수 있어요.',
            ],
            [
              '이제 첫번째 세트를 공부해볼까요?',
            ],
            [
              '준비됐으면 아래 버튼을 눌러보세요!',
            ],
          ],
        ],
        [ // Round 1
          [
            [
              '대단하다! 이렇게 잘 맞추다니',
              '나는 좀 어렵던데 너는 되게',
              '잘 하는구나! 그러면 다음',
              '단어 세트로 넘어가보자.',
            ],
          ],
          [
            [
              '정말 잘했어요!',
              '그러면 다음 단어 세트를 공부해 봅시다.',
            ],
          ],
        ],
        [ // Round 2
          [
            [
              '와! 정말 잘했는데? 불어 공부에 소질이 있나봐!',
              '나랑 해서 더 잘 되는 것 같기도 하고~',
              '좋은 결과를 보니 나도 덩달아 기분이 좋네!',
            ],
            [
              '오늘 너랑 같이 하니까',
              '너무 즐거웠어.',
              '다음에도 같이하자! 안녕!',
            ],
          ],
          [
            [
              '정말 잘했어요.',
              '불어 공부에 소질이 있는 것 같네요!',
            ],
            [
              '다음에도 불어공부를 같이 해봅시다.',
              '수고하셨습니다.',
            ],
          ],
        ],
      ],
      [ // Negative
        [ // Tutorial
          [
            [
              '이런 식으로 결과가 나오는구나!',
            ],
            [
              '이제 첫번째 세트를 공부해볼까?',
            ],
            [
              '준비됐으면 아래 버튼을 눌러보자!',
            ],
          ],
          [
            [
              '이렇게 결과를 확인할 수 있어요.',
            ],
            [
              '이제 첫번째 세트를 공부해볼까요?',
            ],
            [
              '준비됐으면 아래 버튼을 눌러보세요!',
            ],
          ],
        ],
        [ // Round 1
          [
            [
              '아쉽다. 그래도 정말 고생했어!',
              '처음 공부한건데 이정도 실력이면 대단하다..',
              '나는 보면서 너가 어려울수도',
              '있을 것 같다고 생각했거든.',
            ],
            [
              '그래도 더 집중해서 단어를 외우면',
              '다음 세트에서는 더 잘할거라고 믿어.',
            ],
          ],
          [
            [
              '고생하셨어요.',
              '처음 공부했는데도 이정도 실력이면',
              '대단한 거에요. 더 집중해서',
              '단어를 외우면 다음 세트에서는',
              '더 잘 할거에요.',
            ],
          ],
        ],
        [ // Round 2
          [
            [
              '이번에 어땠어? 원래 하면서 점점 늘리는거지~',
              '처음부터 잘하면 재미없더라. 처음이니까 괜찮아!',
              '점점 늘려가는 재미로 더 열심히 하면',
              '많이 늘거야~! 나랑 같이 차근차근 해보자!',
            ],
            [
              '오늘 너랑 같이 하니까',
              '너무 즐거웠어.',
              '다음에도 같이하면 좋겠다! 안녕!',
            ],
          ],
          [
            [
              '이번에는 어땠나요?',
              '원래 하면서 점점 늘리는거랍니다.',
              '처음부터 잘하는 것보다, 꾸준히',
              '점점 늘어가는게 성취감이 더 들거에요.',
              '차근차근 해봅시다.',
            ],
            [
              '오늘의 수업이 즐거웠길 바랍니다.',
              '수고하셨습니다.',
            ],
          ],
        ],
      ],
    ],
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
      } else if (this.round === 1) {
        if ((this.condition - 1) % 2 === 0) {
          str = ['점수 결과는', '상위 20 퍼센트입니다.'];
        } else if ((this.condition - 1) % 2 === 1) {
          str = ['점수 결과는', '하위 20 퍼센트입니다.'];
        }
      } else if (this.round === 2) {
        if ((this.condition - 1) % 2 === 0) {
          str = ['점수 결과는', '상위 18 퍼센트입니다.'];
        } else if ((this.condition - 1) % 2 === 1) {
          str = ['점수 결과는', '하위 18 퍼센트입니다.'];
        }
      }
      return str;
    },
  },

  mounted() {
    this.countDownTimer();
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

    next() {
      if (this.page >= this.textbox[
        (this.condition - 1) % 2][this.round][parseInt((this.condition - 1) / 2)].length - 1) {
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
