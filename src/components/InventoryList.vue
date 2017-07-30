<template>
  <div class="inventory">
    <todo-input placeholder="创建清单" @save="save"></todo-input>
    <ul class="inventory-list">
      <inventory-item v-for="item in inventories" :key="item.id" :inventory="item"></inventory-item>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import TodoInput from './TodoInput'
  import InventoryItem from './InventoryItem'

  export default {
    name: 'inventory-list',
    components: {
      TodoInput, InventoryItem
    },
    computed: mapGetters(['inventories']),
    methods: {
      ...mapActions(['getInventories', 'saveInventory']),
      save(content) {
        this.saveInventory({
          name: content,
          status: 0
        })
      }
    },
    created() {
      this.getInventories()
    },
  }
</script>

<style scoped>
  .inventory {
    width: 200px;
    margin-right: 20px;
  }
</style>
