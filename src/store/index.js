import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue',
  },
  mutations: {
    //commit mutations
    increaseCount(state, randNum) {
      //state.counter++;
      state.counter += randNum;
    },
    decreaseCount(state, randNum) {
      //state.counter--;
      state.counter -= randNum;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    },
  },
  actions: {
    //despatch actions
    increaseCount({ commit }) {
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then((response) => {
        //console.log(response);
        commit('increaseCount', response.data);
      });
    },
    decreaseCount({ commit }) {
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then((response) => {
        commit('decreaseCount', response.data);
      });
    },
    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue);
    },
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {},
});
