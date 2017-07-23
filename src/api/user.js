export default {
  saveUser(data, cb, errCb) {
    $.ajax({
      url: 'http://127.0.0.1:8081/user',
      type: 'post',
      data: data,
      dataType: 'json',
      success: function (resp) {
        resp.code == 0 ? cb(resp.data) : errCb(resp.msg);
      }
    })
  },
  getAllUsers(cb, errCb) {
    $.ajax({
      url: 'http://127.0.0.1:8081/user',
      dataType: 'json',
      success: function (resp) {
        resp.code == 0 ? cb(resp.data) : errCb(resp.msg);
      }
    })
  },
  delUser(id, cb, errCb){
    $.ajax({
      url:'http://127.0.0.1:8081/user/'+id,
      type:'delete',
      dateType:'json',
      success:function(resp){
        resp.code == 0 ? cb(id) : errCb();
      }
    });
  }
}
