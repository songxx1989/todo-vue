export default {
  getInventories(cb, errCb) {
    $.ajax({
      url: 'http://127.0.0.1:8081/inventory',
      dataType: 'json',
      success: function (resp) {
        resp.code == 0 ? cb(resp.data) : errCb(resp.msg);
      }
    })
  },
  saveInventory(data, cb, errCb) {
    $.ajax({
      url: 'http://127.0.0.1:8081/inventory',
      type: 'post',
      data: data,
      dataType: 'json',
      success: function (resp) {
        resp.code == 0 ? cb(resp.data) : errCb(resp.msg);
      }
    })
  },
}
