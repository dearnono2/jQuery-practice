$(function() {
  let tabAnchor = $('.tabs-nav li a');
  let tabPanel = $('.tabs-panel');

  // 링크를 클릭하면 할 일
  tabAnchor.click(function(e) {
    e.preventDefault();
    // 방법 1) 모두 빼고 그 요소만 추가하기
    tabAnchor.removeClass('active');
    $(this).addClass('active');
    // 방법 2) 선택한 요소는 active 추가. 선택한 요소의 형제자매들은 active 제거.
    // 방법2의 문제 => 추가는 되지만 제거는 안된다...(형제자매가 없을 경우)
    // $(this).addClass('active').siblings().removeClass('active');

    // show와 hide는 display 속성을 조정한다. (일일히 class명을 추가해서 display:none 등을 줄 필요 없음.)
    // fadeIn, fadeOut과의 차이점은 fade~는 opacity가 낮아지다가 display:none이 되는 효과를 준다.
    tabPanel.hide();

    let $target = $(this).attr('href');

    $($target).show();

    // 속성값 가져오기
  })
})