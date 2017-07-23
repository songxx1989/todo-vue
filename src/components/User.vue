<template>
  <div>
    <h3>注册</h3>
    姓名：<input type="text" v-model.trim="newUser.username"><br>
    账号：<input type="text" v-model.trim="newUser.account"><br>
    密码：<input type="password" v-model="newUser.password"><br>
    <button @click="saveUser(newUser)">提交</button>

    <h3>用户列表</h3>
    <table border cellspacing="0">
      <tr>
        <th>id</th>
        <th>姓名</th>
        <th>账号</th>
        <th>密码</th>
        <th>创建时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in users">
        <td>{{item.id}}</td>
        <td>{{item.username}}</td>
        <td>{{item.account}}</td>
        <td>{{item.password}}</td>
        <td>{{item.createTime}}</td>
        <td>
          <a href="javascript:;" @click="delUser(item.id)">X</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'user',
    computed: mapGetters({
      users: 'allUsers'
    }),
    data: function () {
      return {
        newUser: {
          username: '',
          password: '',
          account: ''
        }
      }
    },
    methods: mapActions([
      'getAllUsers', 'saveUser','delUser'
    ]),
    created() {
      this.getAllUsers()
    },
  }
</script>

<style scoped>
  th, td {
    padding: 5px 10px;
  }
</style>
