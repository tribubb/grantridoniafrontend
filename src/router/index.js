import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/components/MainPage.vue';
import PropertyPage from '@/components/PropertyPage.vue';
import MarketPage from '@/components/MarketPage.vue';

const routes = [
  { path: '/', redirect: '/main' },
  { path: '/main', name: 'main', component: MainPage },
  { path: '/property', name: 'property', component: PropertyPage },
  { path: '/market', name: 'market', component: MarketPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;