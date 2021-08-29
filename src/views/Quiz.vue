<template>
  <v-card
    class="mx-auto"
    max-width="95vw"
    height="95vh"
    outlined
  >
    <v-card-text
      class="row"
    >
      <div
        class="column"
        :class="{circle: correct}"
      >
        <h1 class="quiz_title">
          퀴즈! 맞혀보세요!
        </h1>
        <p class="quiz_content">
          {{ problems[now].problem.split(problems[now].answer)[0] }}
          <span
            :class="{blind: blind, answer: correct}"
          >
            {{ problems[now].answer }}
          </span>
          {{ problems[now].problem.split(problems[now].answer)[1] }}
        </p>
        <div class="row answerlist">
          <v-btn
            v-for="(item, key) in problems[now].list"
            :id="item"
            :key="key"
            :class="{check: correct && (problems[now].answer === item)}"
            outlined
            rounded
            style="width: 25%; font-size: 3vw; padding: 4vw; margin: 0 auto;"
            @click="checkAnswer(problems[now], item)"
          >
            {{ numbering(key + 1) + ' ' + item }}
          </v-btn>
        </div>
      </div>
      <img
        class="quiz_img"
        :src="require('@/assets/img/퀴즈선생님.png')"
        height="250"
      />
    </v-card-text>
  </v-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { setTimeout } from 'timers';

export default {
  data: () => ({
    now: 0,
    blind: true,
    correct: false,
    problems: [{
      problem: '손에 물기때문에 얼음이 달라붙는다',
      answer: '물기',
      list: ['물기', '붙기', '돌기'],
    }],
  }),

  computed: {
    condition() {
      return this.$store.state.data.experimentType;
    },
  },

  mounted() {
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Game' });
    },

    numbering(num) {
      let str = '';
      switch (num) {
        case 1:
          str = '①';
          break;
        case 2:
          str = '②';
          break;
        case 3:
          str = '③';
          break;
        default:
          str = '';
      }
      return str;
    },

    checkAnswer(problem, item) {
      if (problem.answer === item) {
        this.blind = false;
        this.correct = true;
        this.next();
      }
    },

    next() {
      setTimeout(() => {
        if (this.now + 1 < this.problems.length) {
          this.blind = true;
          this.correct = false;
          this.now += 1;
        } else if (this.now + 1 === this.problems.length) {
          this.submit();
        }
      }, 1000);
    },
  },
};
</script>

<style>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  -webkit-box-orient: horizontal;
  -ms-flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -ms-flex-direction: column;
  width: 50%;
  margin: 10px auto;
}
.quiz_img {
  text-align: center;
}
.quiz_title {
  margin: 10px 20px 0px 20px;
  width: 80%;
  font-size: 4.2vw !important;
  line-height: 100px;
  color: orange;
  text-align: center;
}
.quiz_content {
  margin: 0px 20px 2px 20px;
  width: 80%;
  word-break: normal;
  font-size: 4vw !important;
  line-height: 45px;
  text-align: center;
}
.blind {
  background-color: orange;
  color: orange;
  border: 3px solid rgb(233, 156, 14);
  border-radius: 5px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.circle {
  background-image: url('~@/assets/img/동그라미.png');
  background-position: center;
  background-size: 150px;
}
.check {
  background-image: url('~@/assets/img/체크.png');
  background-position-x: 13px;
  background-color: yellow;
}
.answer {
  background-color: yellow;
}
</style>
