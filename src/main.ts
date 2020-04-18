import Vue from 'vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import App from './App.vue';

import '@/plugins/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
