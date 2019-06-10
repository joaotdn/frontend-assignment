import 'Styles/main.scss';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from 'Router';

Vue.use(BootstrapVue);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: createElement => createElement(App)
});
