<template>
  <div
    style="height: 90px"
  >
    <v-slide-y-reverse-transition>
      <hgroup
        v-show="showing"
        class="text-box"
      >
        <span
          v-for="(item, key) in items"
          :key="key"
        >
          {{ item }}<br />
        </span>
      </hgroup>
    </v-slide-y-reverse-transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default() {
        return ['Oops, There is nothing!'];
      },
    },
  },

  data: () => ({
    showing: false,
    items: [],
  }),

  watch: {
    value() {
      if (this.items[0] !== this.value[0]) {
        console.log(this.items !== this.value);
        console.log(this.items);
        console.log(this.value);
        this.showing = false;
        setTimeout(() => {
          this.items = this.value;
          this.showing = true;
        }, 500);
      }
    },
  },

  mounted() {
    this.items = this.value;
    setTimeout(() => {
      this.showing = true;
    }, 700);
  },
};
</script>

<style scoped>
.text-box {
  margin: 10px auto;
  position: relative;
  background: rgb(226, 226, 226);
  border-radius: .4em;
  text-align: center;
  padding: 20px;
  width: 300px;
}

.text-box:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top-color: rgb(226, 226, 226);
  border-bottom: 0;
  border-right: 0;
  margin-left: -10px;
  margin-bottom: -20px;
}
</style>
