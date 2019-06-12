import Vue from 'vue';
import Vuex from 'vuex';

import app from 'Store/app.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app
  }
});
