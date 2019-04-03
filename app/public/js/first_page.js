$(document).ready(function () {


});
function sendMsg() {
  // var form = $(elem).parent();
  var data = {
    name1: $('.form_elem.name1 input').val(),
    name2: $('.form_elem.name2 input').val(),
    name3: $('.form_elem.name3 input').val(),
    date: $('.form_elem.b_day input').val(),
    car: $('.form_elem.car option:selected').text(),
    phone: $('.form_elem.phone input').val()
  };
  if (data.phone.length < 4) {Alert.error('Укажите ваш номер телефона.'); return;}
  else
  Alert.success('Запрос был отправлен. С вами свяжутся в ближайшее время.');
  var msg = `Добрый день, для вас был сделан заказ от ${data.name1} ${data.name2} ${data.name3}. На ${data.date} и ${data.car}. По номеру телефона ${data.phone}.`;
  console.log(msg);
  $.post('/api/order2/send', { msg: msg}).done(function (result) {
    console.log(result);
  })
}
