<template>
  <v-app>
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <MediaList />
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
            style="max-width: 800px;"
          >
            <v-fade-transition mode="out-in">
              <router-view :key="$route.fullPath" />
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
  * { text-transform: none !important; }
</style>
