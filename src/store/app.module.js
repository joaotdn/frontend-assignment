import { UPDATE_BREADCRUMB } from 'Store/actions.type';
import { SET_BREADCRUMB } from 'Store/mutations.type';

const state = {
  items: []
};

const getters = {
  breadcrumbItems (state) {
    return state.items;
  }
};

const actions = {
  [UPDATE_BREADCRUMB] ({ commit }, item) {
    commit(SET_BREADCRUMB, item);
  }
};

const mutations = {
  // TODO
  [SET_BREADCRUMB] (state, item) {
    state.items = [
      {
        text: 'Home',
        to: '/'
      },
      item
    ];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
