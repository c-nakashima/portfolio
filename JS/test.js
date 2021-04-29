$(function () {
  $('.js-btn').on('click', function () { 
    $('.menu , .btn-line').toggleClass('open');
  })
});

//move to target position
const windowWidth = $(window).width();
$(function(){
  $('.scroll-btn').click(function() {
    let scrollBtn= $(this).attr("id");
    let target;
    switch (scrollBtn){
      case 'aboutBtn':
        target = $('#about');
        break;
      case 'worksBtn':
        target = $('#works');
        break;
      case 'contactBtn':
        target = $('#contact');
        break;
      case 'arrowBtn':
        target = $('html');
        break;
    }
    let position = target.offset().top;
    $('body,html').animate({scrollTop:position}, 800, 'swing');
    if(windowWidth < 600){
      $(function(){
        $('.menu , .btn-line').toggleClass('open');
      })
    }
    return false;
    });
  });