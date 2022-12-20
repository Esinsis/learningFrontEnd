import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    oddPlus(context, value) {
        if (context.state.sum % 2) {
            context.commit('INCREMENT', value)
        }
    },
    delayPlus(context, value) {
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 500)
    }
}

const mutations = {
    INCREMENT(state, value) {
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    }
}

// vuex 中的getters 类似于Vue 中的计算属性
const getters = {
    multiTen(state) {
        return state.sum * 10
    }
}

const state = {
    sum: 0
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})