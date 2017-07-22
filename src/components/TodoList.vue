<template>
  <div class="todo-list">
    <tinput placeholder="创建待办事项" @save="saveTodo"></tinput>
    <h1>{{qid}}</h1>
  </div>
</template>

<script>
  import Tinput from './Tinput'

  export default {
    name: 'todo-app',
    components: {
      Tinput
    },
    props:['qid'],
    data() {
      return {}
    },
    methods: {
      saveTodo: function (content) {
        console.log(content);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
