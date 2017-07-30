<template>
  <div class="inventory-detail">
    <todo-list></todo-list>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import * as types from '../store/mutation_types'
  import TodoList from './TodoList'

  export default {
    name: 'inventory-detail',
    components: {TodoList},
    computed:{
      ...mapGetters(['activeInventory']),
    },
    methods: {
      ...mapMutations([types.ACTIVE_INVENTORY_ID]),
    },
    created(){
      this[types.ACTIVE_INVENTORY_ID]({id: this.$route.params.iid})
    },
    watch: {
      '$route' (to, from) {
        this[types.ACTIVE_INVENTORY_ID]({id: this.$route.params.iid})
      }
    }
  }
</script>

<style scoped>
  .inventory-detail {
    flex-grow: 1;
    display: flex;
  }
</style>
