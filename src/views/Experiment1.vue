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
        @click="playAudio('얼음-선생님')"
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
    img: require('@/assets/얼음/인사1.png'),
    imgs: [
      require('@/assets/얼음/인사1.png'),
      require('@/assets/얼음/인사2.png'),
      require('@/assets/얼음/인사3.png'),
      require('@/assets/얼음/인사4.png'),
      require('@/assets/얼음/인사5.png'),
      require('@/assets/얼음/얼음1.jpg'),
      require('@/assets/얼음/얼음2.jpg'),
      require('@/assets/얼음/얼음3.jpg'),
      require('@/assets/얼음/얼음4.jpg'),
      require('@/assets/얼음/얼음5.jpg'),
      require('@/assets/얼음/얼음6.jpg'),
    ],
  }),

  computed: {
    condition() {
      return this.$store.state.data.experimentType;
    },
  },

  mounted() {
    this.playAudio('얼음-선생님');
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Experiment2' });
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
          if (currentTime > 0 && currentTime < 6) {
            this.img = require('@/assets/얼음/인사1.png');
          } else if (currentTime > 6 && currentTime < 12) {
            this.img = require('@/assets/얼음/인사2.png');
          } else if (currentTime > 12 && currentTime < 19) {
            this.img = require('@/assets/얼음/얼음1.jpg');
          } else if (currentTime > 19 && currentTime < 28) {
            this.img = require('@/assets/얼음/얼음2.jpg');
          } else if (currentTime > 28 && currentTime < 35) {
            this.img = require('@/assets/얼음/얼음3.jpg');
          } else if (currentTime > 35 && currentTime < 39) {
            this.img = require('@/assets/얼음/얼음1.jpg');
          } else if (currentTime > 39 && currentTime < 50) {
            this.img = require('@/assets/얼음/얼음4.jpg');
          } else if (currentTime > 50 && currentTime < 56) {
            this.img = require('@/assets/얼음/얼음5.jpg');
          } else if (currentTime > 56 && currentTime < 68) {
            this.img = require('@/assets/얼음/얼음4.jpg');
          } else if (currentTime > 68 && currentTime < 72) {
            this.img = require('@/assets/얼음/얼음6.jpg');
          } else if (currentTime > 72 && currentTime < 77) {
            this.img = require('@/assets/얼음/인사3.png');
          } else if (currentTime > 77) {
            this.img = require('@/assets/얼음/인사5.png');
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
