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
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
   /*     axios.post('http://127.0.0.1:8081/qingdan', {
          name: content,
          status: 0
        })
          .then(function (resp) {
            console.log(resp);
          });*/

        axios({
          method: 'post',
          url: 'http://127.0.0.1:8081/qingdan',
          data: {
            name: content,
            status: 0
          }
        }).then(function (resp) {
          console.log(resp);
        });;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
