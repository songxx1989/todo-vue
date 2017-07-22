<template>
  <div>
    <h1>注册</h1>
    姓名：<input type="text" v-model.trim="username"><br>
    账号：<input type="text" v-model.trim="account"><br>
    密码：<input type="password" v-model="password"><br>
    头像：<input type="file"><br>
    <button @click="publish">提交</button>
  </div>
</template>

<script>
  export default {
    name: 'join',
    data: function () {
      return {
        username: '',
        password: '',
        account: ''
      }
    },
    methods: {
      publish() {
        if (this.username == '' || this.password == '' || this.account == '') return

        $.ajax({
          url: 'http://127.0.0.1:8081/user',
          type: 'post',
          data: {
            username: this.username,
            password: this.password,
            account: this.account
          },
          dataType: 'json',
          success: function (resp) {
            console.log(resp);
            if (resp.code == 0) {
              self.todoList = resp.data;
            }
          }
        })
      }
    }
  }
</script>
