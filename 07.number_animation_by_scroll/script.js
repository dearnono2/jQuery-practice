/**
  .offset().top 요소가 왼쪽에서, 위에서부터 얼마나 떨어져있는지 left값과 top값을 구할 수 있음. 
  .scrollTop() window의 스크롤 양
*/

/**
  section1에서 section2로 진입하는 순간, 이벤트를 주고 싶을 때?
  => 예를 들어 section2가 윈도우에서 1000px 정도 떨어져있다고 한다면, scrollTop값 1000px일 떄 이벤트를 주면
  이미 늦다... 즉, section2의 scrollTop값보다 더 적은 값일 때 이벤트를 주는것이 좋다. 300px 정도? 더 적게~
  

*/

$(function() {
  // 중복 실행 방지
  let executed = false;  // 아직 실행 안됨.
  $(window).scroll(function() {
    // section2가 브라우저 화면에서 떨어진 거리에서 -300
    let threshold = $('.section2').offset().top - 300;

    // if(excuted == false)
    if(!executed) {
      // 아직 실행된 적이 없을 때 작동해야 하는 것들.
      if($(window).scrollTop() >= threshold) {
        let progressRate = $('.animate').attr('data-rate');
        // animate progress 사용자속성 값 percent -> 60%

        /**
          $('.box).animate({width:100%, height:100%}),
          {
            duration: 1500,
            easing: 'easeOutQuint',
            conplete: function(){...끝나고 할일},
            progress: function(){...진행중 할일}
          }
        */
        $({percent: 0}).animate({percent:progressRate}, {
          duration: 1500,
          progress: function() {
            let now = this.percent;
            $('.animate').text(Math.ceil(now)+'%');
          }
        });
        executed = true;
      }
    }
  })
})