<template>
  <div class="todo">
    <qingdan-list></qingdan-list>
    <router-view></router-view>
  </div>
</template>

<script>
  import QingdanList from './QingdanList'
  export default {
    name:'todo',
    components:{QingdanList},

  }
</script>

<style scoped>
  .todo{
    display: flex;
  }
</style>
