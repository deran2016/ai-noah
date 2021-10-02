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
          {{ countDown }}초
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
        word: 'pain',
        def: '빵',
      },
    ], [
      {
        word: 'round1',
        def: '세트1 단어',
      },
    ]],
    textbox: [[
      [
        '20초 동안 단어를 외워보자!',
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
    this.countDownTimer();
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Quiz', query: { round: this.round } });
    },

    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.submit();
      }
    },

    getColor(answer, myanswer) {
      let color = 'green';
      if (answer !== myanswer) color = 'red';
      else color = 'green';
      return color;
    },
  },
};
</script>
