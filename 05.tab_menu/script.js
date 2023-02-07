$(function() {
  let tabAnchor = $('.tabs-nav li a');
  let tabPanel = $('.tabs-panel');

  // 링크를 클릭하면 할 일
  tabAnchor.click(function(e) {
    e.preventDefault();

    $(this).find('a').addClass('active'); // 내가 클릭한 a태그
    $(this).siblings().find('a').removeClass('active'); // 내가 클릭한 것 외의 나머지들 안의 a태그를 제거
    
    tabPanel.hide();

    let $targetIdx = $(this).index();
    tabPanel.eq($targetIdx).show();

  })

  // .trigger 강제로 클릭 이벤트 발생시키기
  tabAnchor.eq(0).trigger('click');
})