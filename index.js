// import anime from 'anime.min.js';

// anime({
//   targets: '#elem',
//   translateX: 250,
//   rotate: '1turn',
//   backgroundColor: '#384878',
//   duration: 800
// });

$(function(){
  $(".service").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
