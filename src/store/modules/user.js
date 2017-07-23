import user from '../../api/user'
import * as types from '../mutation_types'

const state = {
  all: []
}

const getters = {
  allUsers: state => state.all
}

const actions = {
  getAllUsers({commit}) {
    user.getAllUsers(users => commit(types.RECEIVE_USERS, {users}))
  },
  saveUser({commit}, newUser) {
    user.saveUser(
      newUser,
      (newUser) => commit(types.SAVE_USER_SUCCESS, {newUser})
    )
  },
  delUser({commit}, id) {
    user.delUser(
      id,
      (id) => commit(types.DEL_USER_SUCCESS, {id})
    )
  }
}

const mutations = {
  [types.RECEIVE_USERS](state, {users}) {
    state.all = users
  },
  [types.SAVE_USER_SUCCESS](state, {newUser}) {
    state.all.push(newUser)
  },
  [types.DEL_USER_SUCCESS](state, {id}) {
    state.all.splice(state.all.findIndex(item => item.id == id), 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
