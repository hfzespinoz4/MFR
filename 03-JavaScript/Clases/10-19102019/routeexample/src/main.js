import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from "./routes.js"

Vue.use(VueRouter);

//todo: JONAY!!! no te olvides de explicar el mode history
const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')