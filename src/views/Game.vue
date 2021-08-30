<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-card-text
      class="row"
    >
      <canvas
        id="paint"
        width="300"
        height="300"
      >
        지원하지 않는 브라우저입니다.
      </canvas>
    </v-card-text>
  </v-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
export default {
  data: () => ({
    painting: false,
  }),

  computed: {
    canvas() {
      return this.$el.querySelector('#paint');
    },
    context() {
      return this.canvas.getContext('2d');
    },
    condition() {
      return this.$store.state.data.experimentType;
    },
  },

  mounted() {
    this.canvas.addEventListener('touchstart', this.startPainting);
    this.canvas.addEventListener('touchmove', this.onMouseMove);
    this.canvas.addEventListener('touchend', this.stopPainting);
    this.canvas.addEventListener('touchcancel', this.stopPainting);
  },

  methods: {
    submit() {
      this.$router.push({ name: 'Experiment1' });
    },

    startPainting(event) {
      const x = event.touches[0].clientX - this.canvas.offsetLeft;
      const y = event.touches[0].clientY - this.canvas.offsetTop;
      this.painting = true;
      this.context.beginPath();
      this.context.moveTo(x, y);
    },

    stopPainting() {
      this.painting = false;
      this.context.closePath();
      this.context.save();
    },

    onMouseMove(event) {
      event.preventDefault();
      const x = event.touches[0].clientX - this.canvas.offsetLeft;
      const y = event.touches[0].clientY - this.canvas.offsetTop;
      this.context.lineTo(x, y);
      this.context.stroke();
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
#paint {
  border: 1px solid #ccc;
}
body { overflow: hidden; }
body * { touch-action: none; }
</style>
