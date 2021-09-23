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
      <div class="mx-2 my-3 body-1">
        다음은 Noah와 함께 외워야 하는 단어 리스트입니다.<br />
        1분동안 아래 단어를 외워주세요.
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
              v-for="(item, index) in words"
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
          style="font-size: 20px"
        >
          {{ countDown }}초
        </span>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    countDown: 60,
    headers: [{
      text: '단어', value: 'word', sortable: false, align: 'center',
    }, {
      text: '뜻', value: 'def', sortable: false, align: 'center',
    }],
    words: [{
      word: 'pain',
      def: '빵',
    }],
  }),

  computed: {
    disabled() {
      return this.countDown > 0;
    },

    condition() {
      return this.$store.state.data.experimentType;
    },

    round() {
      return this.$store.state.data.round || 0;
    },
  },

  mounted() {
    this.countDownTimer();
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Quiz' });
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
