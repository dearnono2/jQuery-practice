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


// 방법 2
// 자바스크립트의 숫자는 무한대가 아니므로 숫자의 끝에 도달하면 에러가 생길 수 있다!
// 그렇기 때문에 방법 2와같이 숫자를 계속해서 더하는 로직을 사용하기 위해서는 숫자를 담은 변수(ex: 아래의 num)를 초기화 해주는것이 좋다!

// +방법 2는 오류가 있다! 만약 리스트1을 클릭하고 곧바로 리스트2를 클릭하게 된다면 바로 열리지 않는다... 리스트 2를 선택할 때 num은 짝수이기 때문에 클래스명 on을 삭제하기 때문이다!
// let num = 0;

// $('li').click(function() {
//   num += 1
//   console.log(num);
//   if(num % 2 !== 0) {
//     $(this).addClass('on');
//     $(this).find('.text').text('close');
//   } else {
//     $(this).removeClass('on');
//     $(this).find('.text').text('open');
//     num = 0;
//     // 값 초기화 해주기
//   }
// })


// 방법 3
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