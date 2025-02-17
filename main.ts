import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import Timer from './components/Timer.vue';
import ModalExample from './components/ModalExample.vue';
import SimpleCalculator from './components/SimpleCalculator.vue';
import FilteredList from './components/FilteredList.vue';
import LocalStorageExample from './components/LocalStorageExample.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/timer', name: 'Timer', component: Timer },
  { path: '/modal', name: 'ModalExample', component: ModalExample },
  { path: '/calculator', name: 'SimpleCalculator', component: SimpleCalculator },
  { path: '/filtered-list', name: 'FilteredList', component: FilteredList },
  { path: '/local-storage', name: 'LocalStorageExample', component: LocalStorageExample },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');


