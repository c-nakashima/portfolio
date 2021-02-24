// import anime from 'anime.min.js';
// const anime = require('animejs');

anime({
  targets: '.about',
  translateX: -1000,
  duration: 2000,
  easing: 'easeOutQuart',
});

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