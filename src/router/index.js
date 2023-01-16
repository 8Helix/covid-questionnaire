import { createRouter, createWebHistory } from 'vue-router';

import AdvicePage from '../pages/AdvicePage.vue';
import IdentificationPage from '../pages/IdentificationPage.vue';
import StartPage from '../pages/StartPage.vue';
import MadlobaPage from '../pages/MadlobaPage.vue';
import QuestionnairePage from '../pages/QuestionnairePage.vue';
import VaccinationPage from '../pages/VaccinationPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: StartPage, name: 'home' },
    {
      path: '/identification',
      component: IdentificationPage,
      beforeEnter: (_, from, next) => {
        if (from.name === 'home' || from.path === '/questionnaire') next();
        else next({ name: 'home' });
      },
    },
    {
      path: '/questionnaire',
      component: QuestionnairePage,
      beforeEnter: (_, from, next) => {
        if (from.path === '/identification' || from.path === '/vaccination')
          next();
        else next({ name: 'home' });
      },
    },
    {
      path: '/vaccination',
      component: VaccinationPage,
      beforeEnter: (_, from, next) => {
        if (from.path === '/questionnaire' || from.path === '/advice') next();
        else next({ name: 'home' });
      },
    },
    {
      path: '/advice',
      component: AdvicePage,
      beforeEnter: (_, from, next) => {
        if (from.path === '/vaccination') next();
        else next({ name: 'home' });
      },
    },
    {
      path: '/madloba',
      component: MadlobaPage,
      beforeEnter: (_, from, next) => {
        if (from.path === '/advice') next();
        else next({ name: 'home' });
      },
    },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
});

export default router;
