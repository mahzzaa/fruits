import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router'
import routes from './routes'
import VueBodyClass from 'vue-body-class';

Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes,
  mode:'history'
});


const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router :router
}).$mount('#app')
