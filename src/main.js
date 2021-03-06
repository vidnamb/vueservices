import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App },
  router,
  store
}).$mount('#app');
