import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// import store from './store.js'

import 'primevue/resources/themes/vela-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
// ToastService needs to be installed globally
import ToastService from 'primevue/toastservice';
Vue.use(ToastService);

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
