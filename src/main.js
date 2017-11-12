/* eslint-disable import/first,import/newline-after-import */
import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons';
import VueMoment from 'vue-moment';
import App from './App';

Vue.component('icon', Icon);
Vue.use(VueMoment);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
