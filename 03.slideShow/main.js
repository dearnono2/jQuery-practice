$(function() {
  let container = $('.slideshow');
  let slideGroup = container.find('.slideshow_slides');
  let slides = slideGroup.find('a');
  let nav = container.find('.slideshow_nav');
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

  // 슬라이드 이동 함수
  function goToSlide(index) {
    slideGroup.animate({left: -100 * index + '%'}, duration, easing);
    currentIndex = index;

    // 첫 슬라이드인지 마지막 슬라이드인지 검사해주는 함수
    updateNav();
  };

  function updateNav() {
    let navPrev = nav.find('.prev');
    let navNext = nav.find('.next');
    if(currentIndex == 0) {
      navPrev.addClass('disabled');
    } else {
      navPrev.removeClass('disabled');
    }

    if(currentIndex == slideCount - 1) {
      navNext.addClass('disabled');
    } else {
      navNext.removeClass('disabled');
    }
  }


  // 인디케이터로 이동하기
  indicator.find('a').click(function(e) {
    e.preventDefault();
    let idx = $(this).index();
    goToSlide(idx);
    console.log(currentIndex);
  });

  // 좌우 버튼을 클릭하면 이동하기
  nav.find('a').click(function(e) {
    e.preventDefault();
    if($(this).hasClass('prev')) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(currentIndex + 1);
    }
  });

  // 맨 처음에 함수가 실행되어 prev버튼이 disabled 처리되게 하기 위해 currentIndex값이 0인것을 인식시켜줌. 
  updateNav();

})