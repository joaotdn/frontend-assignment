import 'Styles/main.scss';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from 'Router';
import store from 'Store';

Vue.use(BootstrapVue);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: createElement => createElement(App)
});
