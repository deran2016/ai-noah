<template>
  <hgroup class="text-box">
    <span
      v-for="(item, key) in value"
      :key="key"
    >
      {{ item }}<br />
    </span>
  </hgroup>
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
};
</script>

<style scoped>
.text-box {
  margin: 10px auto;
  position: relative;
  background: rgb(226, 226, 226);
  border-radius: .4em;
  text-align: center;
  padding: 6px;
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
