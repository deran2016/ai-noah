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
      <div class="mx-2 my-3 body-1">
        문제에 대한 결과가 아래와 같이 표시됩니다.<br />
        버튼을 누르면 두번째 단어외우기 Tutorial로 넘어갑니다.
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
                {{ item.question }}
              </td>
              <td class="text-center">
                {{ item.answer }}
              </td>
              <td class="text-center">
                <v-chip
                  :color="getColor(item.answer, item.myanswer)"
                  dark
                >
                  {{ item.myanswer }}
                </v-chip>
              </td>
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
        @click="submit"
      >
        단어 외우러 가기 {{ countDown > 0 ? `(${countDown})` : '' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    countDown: 5,
    headers: [{
      text: '문제', value: 'question', sortable: false, align: 'center',
    }, {
      text: '정답', value: 'answer', sortable: false, align: 'center',
    }, {
      text: '내가 쓴 정답', value: 'myanswer', sortable: false, align: 'center',
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
      return this.$route.query.round || 0;
    },

    result() {
      return this.$store.state.data[`round${this.round}`] || 'No results';
    },
  },

  mounted() {
    this.countDownTimer();
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Voca', query: { round: this.round } });
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
  },
};
</script>
