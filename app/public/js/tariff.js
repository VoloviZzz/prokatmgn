$('#add_new_car').click(function () {
  var obj = {
    name: $('.adding-name-input input').val(),
    price: $('.adding-price-input input').val(),
    color: $('.adding-color-input input').val(),
    desc: $('.adding-desc-input textarea').val(),
    year: $('.adding-year-input input').val(),
    kpp: $('.adding-kpp-input input').prop('checked')? '1' : '0',
    condic: $('.adding-condic-input input').prop('checked')? '1' : '0',
    dvc: $('.adding-dvc-input input').val(),
    zalog: $('.adding-zalog-input input').val(),
    img: $('.adding-img-input .btn').text().trim()
  };
  $.post("/api/tarif/add", obj).done(function (result) {
    console.log(result);
    if (result.status == 'ok') {
      Alert.success(result.message);
    } else {
      Alert.error(result, 'Ошибка!')
    }
  });
  console.log(obj);
});

$('.remove_car').click(function () {
  console.log('remove');
  var obj = {
    id: $(this).data('id')
  };
  $.post("/api/tarif/remove", obj).done(function (result) {
    console.log(result);
    if (result.status == 'ok') {
      Alert.success('Успех!');
      location.reload();
    } else {
      Alert.error(result.message, 'Ошибка!')
    }
  });
  console.log(obj);
});


$('#upload_photo').on('change', function (e) {
  var $self = $(this);
  var fd = new FormData();
  fd.append('upload', this.files[0]);

  $.ajax({
    url: '/api/images/upload',
    data: fd,
    processData: false,
    contentType: false,
    type: 'POST',
    success: function success(result) {
      if (result.status !== 'ok') {
        console.log(result);
        return Alert.error(result.message);
      }
       $('.adding-img-input .btn').text(result.data.fileUrl)
    }
  });
})























//
