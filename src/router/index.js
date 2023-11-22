import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/MainPage.vue';
import PropertyPage from '@/components/PropertyPage.vue';
import MarketPage from '@/components/MarketPage.vue';

const routes = [
  { path: '/', redirect: '/main' },
  { path: '/main', component: MainPage },
  { path: '/property', component: PropertyPage },
  { path: '/market', component: MarketPage }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;