import user from '../../api/user'
import * as types from '../mutation_types'

const state = {
  users: []
}

const getters = {
  users: state => state.users
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
    state.users = users
  },
  [types.SAVE_USER_SUCCESS](state, {newUser}) {
    state.users.push(newUser)
  },
  [types.DEL_USER_SUCCESS](state, {id}) {
    state.users.splice(state.users.findIndex(item => item.id == id), 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
