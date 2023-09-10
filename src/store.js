import { createStore } from 'vuex';

const store = createStore({
  state: {
    slideshowHeight: '600px',
    username: null,
    password: null,
    discordid: null,
    loggedIn: false,
  },
  mutations: {
    updateSlideshowHeight(state, height) {
      state.slideshowHeight = height;
    },
    setLoggedIn(state, { username, discordid }) {
      state.username = username;
      state.discordid = discordid;
      state.loggedIn = true;
    },
    logout(state) {
      state.username = null;
      state.discordid = null;
      state.loggedIn = false;
    },
  },
  actions: {
    updateSlideshowHeight({ commit }, height) {
      commit('updateSlideshowHeight', height);
    },
    login({ commit }, payload) {
      commit('setLoggedIn', payload);
    },
    logout({ commit }) {
      commit('logout');
      localStorage.setItem('username', null);
      localStorage.setItem('password', null);
      localStorage.setItem('discordid', null);
      localStorage.setItem('loggedIn', 'false');
    },
  },
  getters: {
    getSlideshowHeight: (state) => state.slideshowHeight,
    getUsername: (state) => state.username,
    getDiscordId: (state) => state.discordid,
    isLoggedIn: (state) => state.loggedIn,
  },
});

export default store;