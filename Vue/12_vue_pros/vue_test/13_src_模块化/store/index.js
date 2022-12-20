import Vue from 'vue'
import Vuex from 'vuex'
import personOptions from './person'
import countOptions from './count'

Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
   modules: {
       personOptions,
       countOptions
   }
})