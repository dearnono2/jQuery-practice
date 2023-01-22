$(function() {
  $('#typo .inner').click(function() {
    // 선택자.animate({속성:값, 속성:값}, 시간, 이징, 다른할일);
    // 제이쿼리에서 지원하는 이징은 기본적으로 linear(등속), swing 이 두가지가 있다.
    // 다른걸 넣고싶으면 라이브러리를 더 추가하면 된다.
    // https://api.jqueryui.com/easings/ 이곳을 참고


    // $(this).animate({opacity:0, fontSize:'0px'}, 1500, 'swing');

    // 아래의 easeInOutElastic 이징을 사용하고 싶으면, html에서 반드시 jQuery ui custom 라이브러리를 연결해야 한다.
    $(this).animate({opacity:0, fontSize:'0px'}, 1500, 'easeInOutElastic');

  })
  $('#typo .inner').mouseover(function() {
    // $(this).animate({backgroundColor: 'blue'}, 1000)
    // .mouseout(function() {
    //   $(this).animate({backgroundColor: 'green'}, 1000)
    // })

    // animate 앞에는 stop(true)를 붙여서 이벤트가 계속 반복되는 문제를 해결할 수 있다.
    $(this).stop(true).animate({backgroundColor: 'blue'}, 1000)
    .mouseout(function() {
      $(this).stop(true).animate({backgroundColor: 'green'}, 1000)
    })

  })
})

