import 'Styles/main.scss';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueCurrencyInput from 'vue-currency-input';
import App from './App';
import router from 'Router';
import store from 'Store';

Vue.use(BootstrapVue);
Vue.use(VueCurrencyInput);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: createElement => createElement(App)
});
