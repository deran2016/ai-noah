/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firebase-database';
import Vue2TouchEvents from 'vue2-touch-events';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

const firebaseConfig = {
  apiKey: 'AIzaSyCrG36piiSuGabhU98dC4WXrx0qarOk92M',
  authDomain: 'ai-noah.firebaseapp.com',
  databaseURL: 'https://ai-noah-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ai-noah',
  storageBucket: 'ai-noah.appspot.com',
  messagingSenderId: '301783147583',
  appId: '1:301783147583:web:1f0e42191799968076048a',
  measurementId: 'G-VK6GTRD3SM',
};

firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;
Vue.config.productionTip = false;

Vue.use(Vue2TouchEvents);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
