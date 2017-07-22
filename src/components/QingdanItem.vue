<template>
  <li class="qingdan-item" :class="qingdan.status | qingdanClass">
    <input type="checkbox" :checked="qingdan.status | qingdanChecked">
    <a href="javascript:;">{{qingdan.name}}</a>
    <i class="fa fa-times" aria-hidden="true"></i>
  </li>
</template>

<script>
  export default {
    name: 'qingdan-item',
    props: ['qingdan'],
    data: function () {
      return {}
    },
    computed: {

    },
    filters:{
      qingdanClass:function(value){
        return ['finished','unfinished'][value];
      },
      qingdanChecked:function(value){
        return value == 1;
      }
    }
  }
</script>

<style scoped></style>
