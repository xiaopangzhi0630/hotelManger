import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import theme from './module/theme.js';
import mutation from './module/mutation.js';

export default new Vuex.Store({
  state: {
  },

  mutations: {
  },

  actions: {
  },

  modules: {
    theme,
    mutation,
  }
})
