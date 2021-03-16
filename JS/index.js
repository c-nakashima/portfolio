document.addEventListener('DOMContentLoaded', function(){
  let trigger = new ScrollTrigger.default();
  trigger.add('.about', {
    toggle: {
      callback: {
        in: () => {
          text_conv();
          // anime.jsのコード
          anime({
            targets: '.about',
            translateX: -1000,
            duration: 2000,
            easing: 'easeOutQuart',
          });
          // anime.js ここまで
        },
        out: () => {
        }
      }
    }
  });
});

//slidein
// anime({
//   targets: '.about',
//   translateX: -1000,
//   duration: 2000,
//   easing: 'easeOutQuart',
// });

anime({
  targets: '.works',
  translateX: 1000,
  duration: 2000,
  easing: 'easeOutQuart',
});

anime({
  targets: '.contact',
  translateX: -1000,
  duration: 2000,
  easing: 'easeOutQuart',
});

//fade in
$(function(){
  $(".service").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

$(function(){
  $(".work").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

$(function(){
  $(".work-img").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

$(function(){
  $(".work-description").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

$(function(){
  $("h2").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
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
return false;
});
});

