import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

import HomePage from './components/Pages/HomePage.vue';
import ContactPage from './components/Pages/ContactPage.vue';
import ProductsPage from './components/Pages/ProductsPage.vue';
import NotFoundPage from './components/Pages/NotFoundPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductsPage },
  { path: '/contact', component: ContactPage },
  { path: '*', component: NotFoundPage },
];

//todo: JONAY!!! no te olvides de explicar el mode history
const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')