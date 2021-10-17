<template>
  <div class="mediaList">
    <div>
      <audio
        v-for="(file, key) in tutorial"
        :id="file.id"
        :key="key"
        :src="`https://docs.google.com/uc?export=open&id=${file.src}`"
        preload="auto"
      >
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tutorial: [
      { id: 'Bonjour', src: '1-K3w6B4OiVWZGscl0E4COiEBOwCXGXSe' },
      { id: 'Oui', src: '1-IL_gLDkUhZs1-bplJWwqyuN3ve4mGHm' },
    ],
    easy: [],
    hard: [],
  }),
};
</script>
