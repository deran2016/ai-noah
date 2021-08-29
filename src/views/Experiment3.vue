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
        @click="playAudio('잎 모양-선생님')"
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
    img: require('@/assets/잎/잎1.jpg'),
    imgs: [
      require('@/assets/잎/인사1.png'),
      require('@/assets/잎/인사2.png'),
      require('@/assets/잎/인사3.png'),
      require('@/assets/잎/잎1.jpg'),
      require('@/assets/잎/잎2.jpg'),
      require('@/assets/잎/잎3.jpg'),
      require('@/assets/잎/잎4.png'),
      require('@/assets/잎/잎5.jpg'),
      require('@/assets/잎/잎6.jpg'),
      require('@/assets/잎/잎7.jpg'),
      require('@/assets/잎/잎8.jpg'),
      require('@/assets/잎/잎9.jpg'),
      require('@/assets/잎/잎10.jpg'),
      require('@/assets/잎/잎11.jpg'),
    ],
  }),

  computed: {
    condition() {
      return this.$store.state.data.experimentType;
    },
  },

  mounted() {
    this.playAudio('잎 모양-선생님');
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Quiz' });
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
          if (currentTime > 0 && currentTime < 5) {
            this.img = require('@/assets/잎/잎1.jpg');
          } else if (currentTime > 5 && currentTime < 11) {
            this.img = require('@/assets/잎/잎2.jpg');
          } else if (currentTime > 11 && currentTime < 21) {
            this.img = require('@/assets/잎/잎3.jpg');
          } else if (currentTime > 21 && currentTime < 30) {
            this.img = require('@/assets/잎/잎4.png');
          } else if (currentTime > 30 && currentTime < 38) {
            this.img = require('@/assets/잎/잎1.jpg');
          } else if (currentTime > 38 && currentTime < 45) {
            this.img = require('@/assets/잎/잎5.jpg');
          } else if (currentTime > 45 && currentTime < 48) {
            this.img = require('@/assets/잎/잎6.jpg');
          } else if (currentTime > 48 && currentTime < 55) {
            this.img = require('@/assets/잎/잎7.jpg');
          } else if (currentTime > 55 && currentTime < 65) {
            this.img = require('@/assets/잎/잎9.jpg');
          } else if (currentTime > 65 && currentTime < 70) {
            this.img = require('@/assets/잎/잎10.jpg');
          } else if (currentTime > 70 && currentTime < 79) {
            this.img = require('@/assets/잎/잎11.jpg');
          } else if (currentTime > 79 && currentTime < 87) {
            this.img = require('@/assets/잎/인사1.png');
          } else if (currentTime > 87) {
            this.img = require('@/assets/잎/인사2.png');
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
