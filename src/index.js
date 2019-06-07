import 'Styles/main.scss';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';

Vue.use(BootstrapVue);

const app = new Vue({
  render: createElement => createElement(App),
  el: '#app',
});

app();
