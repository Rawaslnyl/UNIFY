var num = 1;
$('.jia').click(function() {
  num = num + 1;
  console.log(num);
  $('#shu').attr('value', num);
});
$('.jia1').click(function() {
  num = num + 1;
  console.log(num);
  $('.shu1').attr('value', num);
});
$('.jia2').click(function() {
  num = num + 1;
  console.log(num);
  $('.shu2').attr('value', num);
});
$('.jian').click(function() {
  num = num - 1;
  if (num < 1) {
    num = 1;
  }
  console.log(num);
  $('#shu').attr('value', num);
});
$('.jian1').click(function() {
  num = num - 1;
  if (num < 1) {
    num = 1;
  }
  console.log(num);
  $('.shu1').attr('value', num);
});
$('.jian2').click(function() {
  num = num - 1;
  if (num < 1) {
    num = 1;
  }
  console.log(num);
  $('.shu2').attr('value', num);
});

// 隐藏
$('.xiala').click(function() {
  $('#conuntry').slideToggle(1000);
});
$('.del').click(function() {
  $('.apply').slideToggle(1000);
});

//删除
$('.shan .lajitong').click(function() {
  $(this)
    .parents('.product')
    .remove();
});
