<template>
  <v-card
    class="mx-auto"
    max-width="95vw"
    height="95vh"
    outlined
  >
    <v-card-text
      style="justify-content: center; text-align: center"
    >
      <img
        :src="img"
        height="250"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn
        v-if="!isPlaying && !isComplete"
        fab
        @click="playAudio('나이테-선생님')"
      >
        ▶︎
      </v-btn>
      <v-btn
        v-if="isComplete"
        outlined
        rounded
        style="width: 20%; font-size: 30px; padding: 30px; margin-left: 120px"
        color="primary"
        @click="submit"
      >
        <img
          :src="require('@/assets/img/다음.png')"
          height="60"
        />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

export default {
  data: () => ({
    file: '',
    isPlaying: false,
    isComplete: false,
    img: require('@/assets/나이테/인사1.png'),
    imgs: [
      require('@/assets/나이테/인사1.png'),
      require('@/assets/나이테/인사2.png'),
      require('@/assets/나이테/인사3.png'),
      require('@/assets/나이테/나이테2.jpg'),
      require('@/assets/나이테/나이테3.jpg'),
      require('@/assets/나이테/나이테4.jpg'),
      require('@/assets/나이테/나이테5.jpg'),
      require('@/assets/나이테/나이테6.jpg'),
      require('@/assets/나이테/나이테7.jpg'),
      require('@/assets/나이테/나이테8.jpg'),
      require('@/assets/나이테/나이테9.jpg'),
    ],
  }),

  computed: {
    condition() {
      return this.$store.state.data.experimentType;
    },
  },

  mounted() {
    this.playAudio('나이테-선생님');
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Experiment3' });
    },

    preloadImg() {
      for (let i = 0; i < this.artImgs.length; i += 1) {
        const img = new Image();
        img.src = this.imgs[i].src;
      }
      console.log('preloaded');
    },

    playAudio(file) {
      this.file = file;

      const audio = document.getElementById(this.file);
      try {
        audio.play();
        audio.onplaying = () => {
          this.isPlaying = true;
          this.checkAudioTime(audio);
        };
        audio.onended = () => {
          this.isPlaying = false;
        };
        audio.onerror = () => {
          this.isPlaying = false;
        };
      } catch (e) {
        this.isPlaying = false;
        console.log(e);
      } finally {
        this.isPlaying = false;
      }
    },

    checkAudioTime(audio) {
      const { currentTime } = audio;
      if (this.isPlaying) {
        setTimeout(() => {
          if (currentTime > 0 && currentTime < 4) {
            this.img = require('@/assets/나이테/인사1.png');
          } else if (currentTime > 4 && currentTime < 16) {
            this.img = require('@/assets/나이테/나이테2.jpg');
          } else if (currentTime > 16 && currentTime < 25) {
            this.img = require('@/assets/나이테/나이테3.jpg');
          } else if (currentTime > 25 && currentTime < 36) {
            this.img = require('@/assets/나이테/나이테4.jpg');
          } else if (currentTime > 36 && currentTime < 51) {
            this.img = require('@/assets/나이테/나이테5.jpg');
          } else if (currentTime > 51 && currentTime < 58) {
            this.img = require('@/assets/나이테/나이테6.jpg');
          } else if (currentTime > 58 && currentTime < 63) {
            this.img = require('@/assets/나이테/나이테7.jpg');
          } else if (currentTime > 63 && currentTime < 70) {
            this.img = require('@/assets/나이테/나이테8.jpg');
          } else if (currentTime > 70 && currentTime < 79) {
            this.img = require('@/assets/나이테/나이테9.jpg');
          } else if (currentTime > 79) {
            this.img = require('@/assets/나이테/인사2.png');
            this.isComplete = true;
          }
          this.checkAudioTime(audio);
        }, 100);
      }
    },
  },
};
</script>

<style>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.column {
  display: flex;
  flex-direction: column;
}
.intro_img {
  text-align: center;
}
.intro_title {
  margin: 10px 50px 10px 50px;
  font-size: 70px !important;
  line-height: 100px;
  text-align: center;
}
</style>
