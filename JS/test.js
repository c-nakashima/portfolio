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

//onscroll
window.onscroll = function()
{
  let getTargetOffset = function(target){
    const targetOffset = target.getBoundingClientRect();
    return targetOffset.top;
  }
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let bottom = scrollTop + document.documentElement.clientHeight;

  function fadeSection(target,section,backgroundColor,innerElem,){
    const top = getTargetOffset(target);
    if( top < bottom){
      $('#' + section + '> .container').animate({
        'backgroundColor': `${backgroundColor}`
      },2600);
    }
  }
  // function fadeAbout(target,section,backgroundColor,innerElem,){
  //   const top = getTargetOffset(target);
  //   if(top < bottom){
  //     $('#' + section + '> .container').animate({
  //       'backgroundColor': `${backgroundColor}`
  //     },2600);
  //   }
  // }
  // function fadeWorks(target,section,backgroundColor,innerElem,){
  //   const top = getTargetOffset(target);
  //   if( top < bottom){
  //     $('#' + section + '> .container').animate({
  //       'backgroundColor': `${backgroundColor}`
  //     },2600);
  //   }
  // }


  fadeSection(about,'about','#FFFFEE');
  fadeSection(works,'works','#FFFFEE');
  fadeSection(contact,'contact','#FFFFEE');
  // fadeAbout(about,'about','#FFFFEE');
  // fadeWorks(works,'works','#FFFFEE');

  //works 960px~
  //contact 2355px~
}