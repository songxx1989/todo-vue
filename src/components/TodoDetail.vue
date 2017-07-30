<template>
  <div class="todo-detail">
    <h3 v-show="!nameEditable"
        @click.ctrl="nameEditable=!nameEditable">{{activeTodo.name}}</h3>

    <input type="text"
           v-model="activeTodo.name"
           @keyup.enter="nameEditable=!nameEditable"
           v-show="nameEditable">

    <p>{{activeTodo.remark}}</p>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'todo-detail',
    computed: {
      ...mapGetters(['activeTodo'])
    },
    data() {
      return {
        nameEditable: false
      }
    }
  }
</script>

<style scoped>
  .todo-detail {
    flex-grow: 1;
  }
</style>
