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
  let easing = 'easeInOutExpo';
  let interval = 3500;
  let timer;

  
  slides.each(function(i) {
    let newLeft = i * 100 + '%';
    $(this).css({left: newLeft});

    indicatorHtml += '<a href="">' + (i+1) + '</a>';
  });

  // a.text(b); a요소의 b의 내용을 글씨 형태로 추가
  // a.html(b); a요소의 b의 내용을 html 형태로 추가
  indicator.html(indicatorHtml);

  // 슬라이드 이동 함수
  function goToSlide(index) {
    slideGroup.animate({left:-100 * index + '%'}, duration, easing);
    currentIndex = index;
    
    // 처음인지, 마지막 검사. on
    updateNav(); 


    
  };
  
  function updateNav() {
    let navPrev = nav.find('.prev');
    let navNext = nav.find('.next');
    // 처음 currentIndex 0, 이전 버튼이 안보이도록
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

    indicator.find('a').removeClass('on');
    // .eq (숫자)
    indicator.find('a').eq(currentIndex).addClass('on');
  }

  // 인디케이터로 이동하기 (클릭하면 이동하는 부분은 아직 해결 못함.)
  indicator.find('a').click(function(e) {
    e.preventDefault();
    let idx = $(this).index();
    console.log(idx);
  });

  nav.find('a').click(function(e) {
    e.preventDefault();
    if($(this).hasClass('prev')) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(currentIndex + 1);
    }
  });

  updateNav();

  // 자동 슬라이드 함수
  function startTimer() {
    // 일정시간 마다 할일
    // setInterval(할일, 시간), clearInterval(이름)
    // 할일(함수) function(){실제로 할일}
    timer = setInterval(function() {
      // nextindex
      let nextIndex = (currentIndex + 1) % slideCount;
      goToSlide(nextIndex)
    }, interval)
  }
  startTimer();

  function stopTimer() {
    clearInterval(timer);
  }

  // 마우스 올리는 유무에 따라 타이머 작동 (올리면 작동 안함.)
  container.mouseenter(function() {
    stopTimer();
  })
  .mouseleave(function() {
    startTimer()
  })

  // nav.find('.prev').click(function(e) {
  //   e.preventDefault();
  //   let i = currentIndex - 1;
  //   goToSlide(idx);
  // })

  // nav.find('.next').click(function(e) {
  //   e.preventDefault();
  //   let i = currentIndex + 1;
  //   goToSlide(idx);
  // })

});

