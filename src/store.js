import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoritePositions: []
  },
  mutations: {
    addToFavorites (state, positionId) {
      state.favoritePositions.unshift(positionId);
    },
    removeFromFavorites (state, index) {
      state.favoritePositions.splice(index, 1);
    }
  },
  actions: {
    addToFavorites (context, positionId) {
      if (!context.state.favoritePositions.includes(positionId)) {
        context.commit('addToFavorites', positionId);
      }
    },
    removeFromFavorites (context, positionId) {
      const foundIndex = context.state.favoritePositions.indexOf(positionId);
      if (foundIndex > -1) {
        context.commit('removeFromFavorites', foundIndex);
      }
    }
  },
  getters: {
    isFavorite (state) {
      return (positionId) => {
        return state.favoritePositions.includes(positionId);
      };
    }
  }
});