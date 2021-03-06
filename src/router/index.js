/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/:preset/',
    name: 'Terms',
    component: () => import('../views/Terms.vue'),
  },
  {
    path: '/:preset/ex',
    name: 'Explanation',
    component: () => import('../views/Explanation.vue'),
  },
  {
    path: '/:preset/intro',
    name: 'Intro',
    component: () => import('../views/Intro.vue'),
  },
  {
    path: '/:preset/practice',
    name: 'Practice',
    component: () => import('../views/Practice.vue'),
  },
  {
    path: '/:preset/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
  },
  {
    path: '/:preset/voca',
    name: 'Voca',
    component: () => import('../views/Voca.vue'),
  },
  {
    path: '/:preset/quiz',
    name: 'Quiz',
    component: () => import('../views/Quiz.vue'),
  },
  {
    path: '/:preset/grading',
    name: 'Grading',
    component: () => import('../views/Grading.vue'),
  },
  {
    path: '/:preset/result',
    name: 'Result',
    component: () => import('../views/Result.vue'),
  },
  {
    path: '/:preset/submit',
    name: 'Submit',
    component: () => import('../views/Submit.vue'),
  },
  {
    path: '/:preset/end',
    name: 'End',
    component: () => import('../views/End.vue'),
  },

  { path: '*', redirect: '/404', hidden: true },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.params.preset) {
    const { preset } = to.params;

    switch (preset) {
      case '1':
        console.log('Type 1');
        store.state.data.experimentType = '1';
        next();
        break;
      case '2':
        console.log('Type 2');
        store.state.data.experimentType = '2';
        next();
        break;
      case '3':
        console.log('Type 3');
        store.state.data.experimentType = '3';
        next();
        break;
      case '4':
        console.log('Type 4');
        store.state.data.experimentType = '4';
        next();
        break;
      default:
        console.log('wrong preset');
        next({ name: '404' });
        // store.state.data.experimentType = 'no';
        // next();
    }
  }
  next();
});

export default router;
