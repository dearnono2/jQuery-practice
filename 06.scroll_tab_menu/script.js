// 1)
// $(document).ready(function() {
//   // code
// })

// 2)
// $(function() {
//   // code
// })

// 위의 두가지 모두 document에 ready가 되면 할 일 이라는 의미의 함수이다. (아래 2번은 간략하게 만든것.)
// 여러개 쓰는게 아니라 하나만 써서 그 안에 코드를 작성하면 된다. 

// 각 섹션이 현재 화면을 기준으로 상단에서 떨어진 거리
// 선택자.offset().top

$(function() {
  let $menu = $('#top_menu ul li');
  let $contents = $('#contents > div'); 

  /*
  $menu를 클릭하면 해당 요소에만 클래스명 on이 추가되도록 하기
  */
  $menu.click(function(e) {
    e.preventDefault();
    // $menu.removeClass('on');
    // $(this).addClass('on');
    // $(this).addClass('on').siblings().removeClass('on');

    // 클릭한 요소의 인덱스 번호 가져오기
    let idx = $(this).index();

    /*
    선택자.eq()
    -선택한 요소의 인덱스 번호에 해당하는 요소를 찾는다.
    -없으면 null을 반환한다.
    */
    let section = $contents.eq(idx);
    // 각 섹션의 거리값 구하기
    let sectionDistance = section.offset().top;

    // 선택자.scrollTop(); 요소에서 생긴 스크롤 양 확인하기

    // 메뉴를 클릭하면 스크롤 양이
    $('html, body').stop().animate({scrollTop:sectionDistance});
    // 스크롤 양을 sectionDistance에 나온 수치로, 메뉴를 클릭하면 html에 스크롤 양을 만들것임.
    // html과 body도 함께 잡아주는 것이 조금 더 정확하게 해준다.
    // 주의: body만 잡으면 동작하지 않는다. html만 쓰거나 html, body 둘 다 써야한다.
    })

    // 주의!!!!! 문제가 있다
    // 메뉴를 클릭하면 해당 섹션으로 이동하게 하고, 해당 섹션으로 이동해있을 때 메뉴의 폰트 색상이 변경되어 있도록 할 때
    // 문제는 그냥 마우스휠로 스크롤해서 해당 섹션에 내려가 있을 때, 메뉴의 클릭 이벤트가 발생하지 않아서 메뉴 폰트 색상이 변경되지 않는다는 것이다!

    // 그렇기 때문에 스크롤해서 해당 섹션에 가면 폰트 색상이 바뀔 수 있도록 해야한다.
    // 스크롤 양이 해당 섹션의 떨어져있는 높이값보다 크거나 같을 경우 변경.

    /**
      윈도우에 스크롤이 생기면 $contents들 마다 할 일. 
      각각의 화면 상단에서의 거리 sectionDistance보다 스크롤양이 많은지 적은지. 
      많다는 조건이 참이면 각 요소마다 순번 변수명 idx 저장. 
      그 순번에 해당하는 메뉴에만 클래스 on 추가
    */
    $(window).scroll(function() {
      $contents.each(function() {
        if($(this).offset().top <= $(window).scrollTop()) {
          let idx = $(this).index();
          $menu.removeClass('on');
          $menu.eq(idx).addClass('on');
        }
      });
    });
  })
