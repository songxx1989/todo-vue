<template>
  <div class="qingdan-detail">
    清单详情页{{ $route.params.id }}
    <user-bar :userList="qingdan.userList" :id="qingdan.id"></user-bar>
  </div>
</template>

<script>
  import UserBar from './UserBar'

  export default {
    name: 'qingdan-detail',
    components: {UserBar},
    created() {
      this.queryQingdan()
    },
    data: function () {
      return {
        qingdan: {userList: [], id: null}
      }
    },
    methods: {
      queryQingdan() {
        var self = this;
        $.ajax({
          url: 'http://127.0.0.1:8081/qingdan/' + this.$route.params.id,
          dataType: 'json',
          success: function (resp) {
            if (resp.code == 0) {
              self.qingdan = resp.data
            }
          }
        })

      }
    }
  }
</script>

<style scoped>
  .qingdan-detail {
    flex-grow: 1;
  }
</style>
