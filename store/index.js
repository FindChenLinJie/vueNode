import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 10,
    num: 1
};

const mutations = {
    increase(state) {
        state.count++;
    },
    decrease(state) {
        state.count--;
    }
};

const actions = {
    add: ({ commit }) => commit('increase'),
    les: ({ commit }) => commit('decrease')
};

const getters = {
    count: count => {
        return state.count;
    }
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});