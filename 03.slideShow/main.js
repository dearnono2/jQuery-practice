$(function() {
  let container = $('.slideshow');
  let slideGroup = container.find('.slideshow_slides');
  let slides = slideGroup.find('a');
  let nav = container.find('slideshow_nav');
  let indicator = container.find('.indicator');
  let slideCount = slides.length;
  let indicatorHtml = '';
  let currentIndex = 0;
  let duration = 500;
  // 가속도
  let easing = 'easeInOutExpo';
  // 일정 시간마다 자동 슬라이드 시간
  let interval = 3500;
  // 마우스 올라가면 멈추기
  let timer;


  // slides마다 할 일
  slides.each(function(i) {
    let newLeft = i * 100 + '%';
    $(this).css({left: newLeft });

    // indicator 값 바꾸기
    // A.text(B) : A요소의 B의 내용을 글씨 형태로 추가
    // A.html.(B) : A요소의 B 내용을 html 형태로 추가
    indicatorHtml += '<a href="">' + (i+1) + '</a>';
  });
  indicator.html(indicatorHtml);
})