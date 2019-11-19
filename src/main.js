import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './resgisterServiceWorker'
import axios from 'axios'
window.axios = axios;

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import firebase from './services/Firebase';
import {messaging} from './services/Messaging';
messaging(firebase);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
