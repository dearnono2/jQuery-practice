const lists = $('li');
const btn = $('button');

// 방법 1
lists.click(function() {
  if($(this).hasClass('on')) {
    $(this).removeClass('on');
    $(this).find('.text').text('open');
  } else {
    $(this).addClass('on');
    $(this).find('.text').text('close');
  }
})

// 두가지 방법 모두 작동하지만 위의 코드가 더 효율적이다.


// 방법 2
// lists.each(function (index, element) {
//   $(element).click(function () {
//     if ($(element).hasClass("on")) {
//       $(element).removeClass("on");
//       $(btn[index]).children().last().text("open");
//     } else {
//       $(element).addClass("on");
//       $(btn[index]).children().last().text("close");
//     }
//   });
// });