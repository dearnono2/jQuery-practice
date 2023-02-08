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
    $(this).addClass('on').siblings().removeClass('on');

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
})
