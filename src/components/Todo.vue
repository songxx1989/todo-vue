<template>
  <div class="todo">
    <inventory-list></inventory-list>
    <router-view></router-view>
  </div>
</template>

<script>
  import InventoryList from './InventoryList'

  export default {
    name:'todo',
    components:{InventoryList},

  }
</script>

<style scoped>
  .todo{
    display: flex;
  }
</style>
