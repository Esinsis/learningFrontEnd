export default {
    namespaced: true,
    actions: {
        addPerson(context, value) {
            context.commit('ADD_PERSON', value)
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: []
    },
    getters: {
        firstPersonName(state){
            if (state.personList.length) {
                return state.personList[0].name
            }
        }
    }
}