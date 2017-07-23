<template>
  <li class="qingdan-item">
    <router-link :to="'/todo/qingdan/'+qingdan.id">{{qingdan.name}}</router-link>
  </li>
</template>

<script>
  export default {
    name: 'qingdan-item',
    props: ['qingdan'],
    data: function () {
      return {}
    },
    computed: {},
  }
</script>

<style scoped>
  .qingdan-item {
    background-color: #f1f1f1;
    padding: 5px 10px;
    margin: 1px 0;
    font-size: 12px;
    transition: background-color .2s;
  }

  .qingdan-item:hover {
    background-color: #e8e8e8;
  }

  a{
    text-decoration: none;
    color: #000;
    font-family:'宋体';
  }
</style>
