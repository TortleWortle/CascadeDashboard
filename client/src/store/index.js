import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import changes from './modules/changes';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Mchanges: changes,
  },
  state: {
    guilds: [],
    loading: true,
    changes: [],
    selectedGuildId: null,
  },
  getters,
  mutations,
  actions,
});
