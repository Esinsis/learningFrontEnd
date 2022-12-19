import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    increment(context, value) {
        console.log('action中的increment方法被调用了', context, value)
        context.commit('INCREMENT', value)
    },
    decrement(context, value) {
        console.log('action中的 decrement 方法被调用了', context, value)
        context.commit('DECREMENT', value)
    },
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
        console.log('mutations中的INCREMENT方法被调用了', state, value)
        state.sum += value
    },
    DECREMENT(state, value) {
        console.log('mutations中的DECREMENT方法被调用了', state, value)
        state.sum -= value
    }
}

const state = {
    sum: 0
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})