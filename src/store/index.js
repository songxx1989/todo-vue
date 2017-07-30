import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import user from './modules/user'
import inventory from './modules/inventory'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user,inventory,todo
  },
})
