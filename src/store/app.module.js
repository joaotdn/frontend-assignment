import { UPDATE_BREADCRUMB } from 'Store/actions.type';
import { INSERT_ITEM } from 'Store/mutations.type';

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
    commit(INSERT_ITEM, item);
  }
};

// TODO: home must come dynamically
const mutations = {
  [INSERT_ITEM] (state, item) {
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
