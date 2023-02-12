
// 이 선택자의 요소가 화면에 나타날 때에 할 일
// var waypoints = $('#options-only').waypoint({
//   handler: function(direction) {
//     notify(this.element.id + ' hit')
//   }
// })

$(function() {
  let executed = false;
  $('.section2').waypoint(function() {
    let targetNumber = $('.animate').attr('data-rate');
    if(!executed) {
      // %도 나오게 하기
      var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
      $('.animate').animateNumber(
        { 
        number: targetNumber,
        numberStep: percent_number_step,
        },
        1500);
      executed = true;
    }
  },
  {
    offset: '80%'
  }
  )
})