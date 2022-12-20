export default {
    namespaced:true,
    actions : {
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
    },
    mutations : {
        INCREMENT(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        },
    },
    getters : {
        multiTen(state) {
            return state.sum * 10
        }
    },
    state: {
        sum:0
    }
}