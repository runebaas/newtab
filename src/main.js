/* eslint-disable import/first,import/newline-after-import */
import Vue from 'vue';
import VueMoment from 'vue-moment';
import App from './App';

Vue.use(VueMoment);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
