<template>
  <div class="qingdan">
    <todo-input placeholder="创建清单" @save="saveQingdan"></todo-input>
    <ul class="qingdan-list">
      <qingdan-item v-for="item in todoList" :key="item.id" :qingdan="item"></qingdan-item>
    </ul>
  </div>
</template>

<script>
  import TodoInput from './TodoInput'
  import QingdanItem from './QingdanItem'

  export default {
    name: 'qingdan-list',
    components: {
      TodoInput, QingdanItem
    },
    data: function () {
      return {
        todoList: []
      };
    },
    created: function () {
      this.getQingdanList();
    },
    methods: {
      getQingdanList: function () {
        var self = this;
        $.ajax({
          url: 'http://127.0.0.1:8081/qingdan',
          type: 'get',
          dataType: 'json',
          success: function (resp) {
            if (resp.code == 0) {
              self.todoList = resp.data;
            }
          },
          error: function (err) {
            console.log(err);
          }
        });
      },
      saveQingdan(content) {
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

<style scoped>
  .qingdan{
    width: 200px;
  }
</style>
