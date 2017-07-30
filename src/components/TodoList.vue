<template>
  <div class="todo-list">
    <todo-input placeholder="创建待办事项" @save="save"></todo-input>
    <ul>
      <li v-for="item in todos"
          :class="{active: item.id==activeTodoId}"
          @click="todoClickHandler(item.id)">
        <router-link :to="'/todo/inventory/'+activeInventoryId+'/todo/'+item.id">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import * as types from '../store/mutation_types'
  import TodoInput from './TodoInput'

  export default {
    name: 'todo-list',
    components: {TodoInput},
    computed: {
      ...mapGetters(['activeInventoryId', 'todos', 'activeTodoId']),

    },
    methods: {
      ...mapActions(['getTodosByIid', 'saveTodo']),
      ...mapMutations([types.ACTIVE_TODO_ID]),
      save(content) {
        this.saveTodo({
          iid: this.activeInventoryId,
          name: content,
          status: 0
        })
      },
      todoClickHandler(id) {
        this[types.ACTIVE_TODO_ID]({activeTodoId: id})
      }
    },
    created() {
      this.getTodosByIid(this.activeInventoryId)
    },
    watch: {
      '$route'(to, from) {
        this.getTodosByIid(this.activeInventoryId)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo-list {
    width: 200px;
    margin-right: 20px;
  }
</style>
