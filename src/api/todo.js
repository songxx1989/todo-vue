export default {
  getTodosByIid(iid, cb, errCb) {
    $.ajax({
      url: 'http://127.0.0.1:8081/todo/' + iid,
      dataType: 'json',
      success: function (resp) {
        resp.code == 0 ? cb(resp.data) : errCb(resp.msg);
      }
    })
  },
  saveTodo(data, cb, errCb) {
    $.ajax({
      url: 'http://127.0.0.1:8081/todo/',
      type: 'post',
      data: data,
      dataType: 'json',
      success: function (resp) {
        resp.code == 0 ? cb(resp.data) : errCb(resp.msg);
      }
    })
  },
}
