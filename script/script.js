$(function() {
  let boxes = $('.box');
  $('.container').on('click', function() {
    $(this).css('background-color', 'green'),
    $(this).text('저장된 box의 총 갯수는' + boxes.length + '개 입니다.'),
    $('#lens').css('color', 'blue');
  })
})