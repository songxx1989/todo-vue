import inventory from '../../api/inventory'
import * as types from '../mutation_types'

const state = {
  inventories: [],
  activeInventoryId: null,
}

const getters = {
  inventories: state => state.inventories,
  activeInventoryId: state => state.activeInventoryId,
  activeInventory: state => state.inventories.find(inventory => inventory.id == state.activeInventoryId) || {}
}

const actions = {
  getInventories({commit}) {
    inventory.getInventories(inventories => commit(types.RECEIVE_INVENTORIES, {inventories}))
  },
  saveInventory({commit}, newInventory) {
    inventory.saveInventory(
      newInventory,
      (newInventory) => commit(types.SAVE_INVENTORY_SUCCESS, {newInventory})
    )
  },
}

const mutations = {
  [types.RECEIVE_INVENTORIES](state, {inventories}) {
    state.inventories = inventories
  },
  [types.ACTIVE_INVENTORY_ID](state, {id}) {
    state.activeInventoryId = id
  },
  [types.SAVE_INVENTORY_SUCCESS](state, {newInventory}) {
    state.inventories.push(newInventory)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
