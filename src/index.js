import 'Styles/main.scss';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';

Vue.use(BootstrapVue);

const app = new Vue({
  el: '#app',
  render: createElement => createElement(App)
});

app();
