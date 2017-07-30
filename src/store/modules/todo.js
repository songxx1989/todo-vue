import todo from '../../api/todo'
import * as types from '../mutation_types'

const state = {
  todos: [],
  activeTodoId: null,
}

const getters = {
  todos: state => state.todos,
  activeTodoId: state => state.activeTodoId,
  activeTodo: state => state.todos.find(todo => todo.id == state.activeTodoId) || {}
}

const actions = {
  getTodosByIid({commit}, iid) {
    todo.getTodosByIid(iid, todos => commit(types.RECEIVE_TODOS, {todos}))
  },
  saveTodo({commit}, newTodo) {
    todo.saveTodo(newTodo, newTodo => commit(types.SAVE_TODO_SUCCESS, {newTodo}))
  }
}

const mutations = {
  [types.RECEIVE_TODOS](state, {todos}) {
    state.todos = todos
  },
  [types.SAVE_TODO_SUCCESS](state, {newTodo}) {
    state.todos.push(newTodo)
  },
  [types.ACTIVE_TODO_ID](state, {activeTodoId}) {
    state.activeTodoId = activeTodoId
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
