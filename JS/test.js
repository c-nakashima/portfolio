$(function () {
  $('.js-btn').on('click', function () { 
    $('.menu , .btn-line').toggleClass('open');
  })
});

//move to target position
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
    if($(window).width() < 600){
      $(function(){
        $('.menu , .btn-line').toggleClass('open');
      })
    }
    return false;
    });
  });

//onscroll change displayed background color
window.onscroll = function()
{
  function getScrollBottom() {
    var body = window.document.body;
    var html = window.document.documentElement;
    var scrollTop = body.scrollTop || html.scrollTop;
    return html.scrollHeight - html.clientHeight - scrollTop;
  }

  function changeColor() {  
    var scrollY = window.pageYOffset;
    var triggerAbout = document.getElementById('about');
    var triggerWorks = document.getElementById('works');
    var triggerContact = document.getElementById('contact');

    var trigger1top = triggerAbout.getBoundingClientRect().top;
    var trigger1bottom = triggerAbout.getBoundingClientRect().bottom;
    var trigger3top = triggerContact.getBoundingClientRect().top;
  
    if(scrollY > trigger1top && trigger1bottom > scrollY) {
      triggerAbout.classList.add('on-display');
      triggerWorks.classList.remove('on-display');
      triggerContact.classList.remove('on-display');
    } else if(trigger3top > scrollY > trigger1bottom && getScrollBottom()>20) {
      triggerWorks.classList.add('on-display');
      triggerAbout.classList.remove('on-display');
      triggerContact.classList.remove('on-display');
    }else if(20 > getScrollBottom() ){
      triggerContact.classList.add('on-display');
      triggerWorks.classList.remove('on-display');
      triggerAbout.classList.remove('on-display');
    }
  }
  window.addEventListener('scroll', changeColor);
  

}