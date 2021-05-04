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
//onscroll
window.onscroll = function()
{
  let getTargetOffset = function(target){
    const targetOffset = target.getBoundingClientRect();
    return targetOffset.top;
  }
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let bottom = scrollTop + document.documentElement.clientHeight;
  // let showContent = function(target, heading, fadeInContent){
  //   let top = getTargetOffset(target);
  //   if( top < bottom){
  //     //fade in
  //     $(heading).stop().addClass("-showing");
  //     $(fadeInContent).on("inview", function (isInView) {
  //       if (isInView) {
  //         $(this).stop().addClass("-showing");
  //       }
  //     });
  //   }
  // }

  // showContent(about,".heading-top",".service",".about");
  // showContent(works,".heading-below",".work",".works");
  // showContent(contact,".heading-below",".contact",".contact");

  let top = getTargetOffset(works);
  if( top < bottom){
    console.log('hoge')
    //fade in
    $(".container").stop().addClass("-showing");
    $(".work-description").stop().addClass("-showing");
  }

  
}