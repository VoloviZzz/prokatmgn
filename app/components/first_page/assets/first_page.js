$(document).ready(function () {


});
alert('asd');
function sendMsg(msg) {
  $.post('/api/order/send', { msg: 'img'}).done(function () {
    console.log('success');
  })
}
