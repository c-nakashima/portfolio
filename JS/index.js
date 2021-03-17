
//▼ text_conv is not definedとなってしまい動作しませんでした
// document.addEventListener('DOMContentLoaded', function(){
//   let trigger = new ScrollTrigger.default();
//   trigger.add('.about', {
//     toggle: {
//       callback: {
//         in: () => {
//           text_conv();
//           // anime.jsのコード
//           anime({
//             targets: '.about',
//             translateX: -1000,
//             duration: 2000,
//             easing: 'easeOutQuart',
//           });
//           // anime.js ここまで
//         },
//         out: () => {
//         }
//       }
//     }
//   });
// });


//onload
window.onload = function(){
  $(".heading-top").stop().addClass("is-show");
  anime({
    targets: '.about',
    translateX: -1000,
    duration: 2000,
    easing: 'easeOutQuart',
  });
}

//onscroll
window.onscroll = function()
{
  let getTargetOffset = function(target){
    const targetOffset = target.getBoundingClientRect();
    return targetOffset.top;
  }
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let bottom = scrollTop + document.documentElement.clientHeight;
  let showContent = function(target, heading, fadeInContent, slideInContent,translateX){
    let top = getTargetOffset(target);
    if( top < bottom){
      //fade in
      $(heading).stop().addClass("is-show");
      $(fadeInContent).on("inview", function (isInView) {
        if (isInView) {
          $(this).stop().addClass("is-show");
        }
      });
      //slide in
      anime({
        targets: slideInContent,
        translateX: translateX,
        duration: 2000,
        easing: 'easeOutQuart',
      });
    }
  }

  showContent(about,".heading-top",".service",".about",-1000);
  showContent(works,".heading-below",".work",".works",1000);
  showContent(contact,".heading-below",".contact",".contact",-1000);
}

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
  return false;
  });
});

