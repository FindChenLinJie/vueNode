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

// 与 store 实例具有相同方法和属性的 context 对象
const actions = { // Action 提交的是 mutation，而不是直接变更状态
    // increment (context) {
    //  context.commit('increment')
    // }
    add: ({ commit }) => commit('increase'),
    les: ({ commit }) => commit('decrease')
};

const getters = {
    // count: count => {
    //     return state.count;
    // }
    count: function(state) {
        return state.count;
    }
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});