<template>
  <div class="user-bar">
    <template v-if="show">
      <span v-for="item in userList">{{item.username}},</span>
      <button @click="editUserList">编辑</button>
    </template>
    <template v-else>
      <select multiple v-model="selectedUserList">
        <option v-for="item in allUserList" :value="item.id" :selected="isSelected(item.id)">{{item.username}}</option>
      </select>
      <button @click="saveUserList">保存</button>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'user-bar',
    props: ['userList', 'id'],
    data: function () {
      return {
        allUserList: [],
        selectedUserList: [],
        show: true
      }
    },
    methods: {
      editUserList() {
        var self = this;
        $.ajax({
          url: 'http://127.0.0.1:8081/user',
          type: 'get',
          cache: true,
          dataType: 'json',
          success: function (resp) {
            if (resp.code == 0) {
              self.allUserList = resp.data;
              self.show = false;
            }
          }
        })
      },
      saveUserList() {
        var selectedUsers = this.selectedUserList.join();
        var self = this;
        $.ajax({
          url: 'http://127.0.0.1:8081/inventory/' + this.id + '/' + selectedUsers,
          type: 'patch',
          dataType: 'json',
          success: function (resp) {
            if (resp.code == 0) {
              self.userList = resp.data.userList;
              self.show = true;
            }
          }
        })
      },
      isSelected(id) {
        for (var i = 0; i < this.userList.length; i++) {
          if (id == this.userList[i].id) {
            return true;
          }
        }
        return false;
      }
    },
  }
</script>
