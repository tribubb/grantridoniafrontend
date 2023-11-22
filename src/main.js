// main.js
import { createApp } from 'vue';
import App from './App.vue';
// IMPDEV: following comment has a practical purpose in disabling the unused variable errors, do not question later
// eslint-disable-next-line no-unused-vars
import { createRouter, createWebHistory } from 'vue-router';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');