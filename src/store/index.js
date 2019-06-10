import Vue from 'vue';
import Vuex from 'vuex';

import home from 'Store/home.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home
  }
});
