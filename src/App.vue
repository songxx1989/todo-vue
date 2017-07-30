<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    background-color: #f1f1f1;
    margin: 1px 0;
    font-size: 12px;
  }

  li.active {
    font-weight: 700;
    background-color: #e8e8e8;
  }

  li:hover {
    background-color: #e8e8e8;
  }

  li a {
    text-decoration: none;
    color: #000;
    font-family: '宋体';
    display: block;
    padding: 5px 10px;
  }
</style>
