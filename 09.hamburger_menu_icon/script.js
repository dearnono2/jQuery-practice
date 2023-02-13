$('.hamburger-button').click(function(ev) {
  ev.preventDefault();
  $(this).toggleClass('active');
});