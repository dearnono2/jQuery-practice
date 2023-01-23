$(function() {
  let $duration = 300,
      $image = $('#images p');

  /**
    공백 o = find
    공백 x = filter
    #images p span { } => $image.find('span')
    #images p.strong { } => $image.filter('strong')
    선택자.animate({속성:값, 속성:값}, 시간, 이징, 다른할 일);
  */

    // 첫번째 이미지 효과
  $image.mouseover(function() {
    // stop()은 true가 디폴트 값이기 때문에 굳이 stop(true)로 해줄 필요 없다.
    $(this).find('span, strong').stop().animate({opacity: 1}, $duration);
  })
  .mouseout(function() {
    $(this).find('span, strong').stop().animate({opacity: 0}, $duration);
  })

  // 두번쨰 이미지 효과
  $image.filter(':nth-child(2)').mouseover(function() {
    $(this).find('span').stop().animate({opacity: 1}, $duration);
    $(this).find('strong').stop().animate({opacity: 1, left: '0%'}, $duration)
  })
  .mouseout(function() {
    $(this).find('span').stop().animate({opacity: 0}, $duration);
    $(this).find('strong').stop().animate({opacity: 0, left: '-200%'}, $duration)
  })

  // 세번쨰 이미지 효과
  $image.filter(':nth-child(3)').mouseover(function() {
    $(this).find('span').stop().animate({opacity: 1}, $duration);
    $(this).find('strong').stop().animate({opacity: 1, bottom: 0}, $duration);
    $(this).find('img').stop().animate({top: '-40px'}, $duration);
  })
  .mouseout(function() {
    $(this).find('span').stop().animate({opacity: 0}, $duration);
    $(this).find('strong').stop().animate({opacity: 1, bottom: '-80px'}, $duration);
    $(this).find('img').stop().animate({top: 0}, $duration);
  })
});