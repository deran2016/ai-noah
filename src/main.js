/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firebase-database';
import Vue2TouchEvents from 'vue2-touch-events';
import firebaseconfig from '../firebaseconfig';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

firebase.initializeApp(firebaseconfig);

Vue.prototype.$firebase = firebase;
Vue.config.productionTip = false;

Vue.use(Vue2TouchEvents);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
