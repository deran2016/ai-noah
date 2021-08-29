<template>
  <v-app>
    <v-main>
      <div id="portrait">
        <p>본 실험 페이지는 가로모드에 최적화되어 있습니다.</p>
        <p>가로모드로 변경해주세요.</p>
      </div>
      <v-container
        id="landscape"
        fluid
      >
        <MediaList />

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="12"
            style="width: 100%;"
          >
            <v-fade-transition mode="out-in">
              <router-view />
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
/* eslint-disable import/no-unresolved */
import MediaList from './views/components/MediaList.vue';

export default {
  name: 'App',

  components: {
    MediaList,
  },

  computed: {
  },
};
</script>

<style>
@media( orientation: portrait ){
  #portrait {
    display: block;
    text-align: center;
  }
  #landscape {
    display: none;
  }
}
@media (orientation: landscape) {
  #portrait {
    display: none;
  }
  #landscape {
    display: block;
  }
}
@font-face {
    font-family: 'Maplestory';
    src: local('Maplestory'), url('fonts/MaplestoryBold.eot');
    src: url('fonts/MaplestoryBold.eot?#iefix') format('embedded-opentype'),
        url('fonts/MaplestoryBold.woff') format('font-woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Maplestory Light';
    src: url('fonts/MaplestoryLight.eot');
    src: url('fonts/MaplestoryLight.eot?#iefix') format('embedded-opentype'),
        url('fonts/MaplestoryLight.woff') format('font-woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
html, main {
  font-family: 'Maplestory' !important;
}
</style>
