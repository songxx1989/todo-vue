<template>
  <div class="todo">
    <h1>滴答清单</h1>
    <tinput placeholder="创建清单" @save="saveQingdan"></tinput>
  </div>
</template>

<script>
  import Tinput from './Tinput'
  import axios from 'axios'
  export default {
    name: 'hello',
    components: {
      Tinput
    },
    data () {
      return {}
    },
    methods: {
      saveQingdan(content){
        $.ajax({
          url: 'http://127.0.0.1:8081/qingdan',
          type: 'post',
          data: {
            name: content,
            status: 0
          },
          dataType: 'json',
          success: function (resp) {
            console.log(resp);
          },
          error: function (err) {
            console.log(err);
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
