import Vue from 'vue';
import Vuex from 'vuex';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import store from './store/store';
import router from './router';
import _axios from "./common/http";

Vue.use(Element);
Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.prototype.axios = _axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
