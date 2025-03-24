$(document).ready(function(){ 
    $('#top_box').hide();
 // Header scroll class
 $(window).scroll(function() {
   if ($(this).scrollTop() >2700) {
     $('#top_box').fadeOut(0);
     $('#other_top_box').fadeIn(0);
   } else {
      $('#other_top_box').fadeOut(0);
     $('#top_box').fadeIn(0);
   }
 })

});

// swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  autoplay: true,
  centeredSlides: true,
  loop: true,

  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
  },
  pagination: {
      el: ".swiper-pagination",
  },
});

// counter
jQuery(document).ready(function ($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});

AOS.init();

$('.scroll_move1').click(function(){
  $("body,html").animate({
      scrollTop:0
      // 넘어갈 섹션 크기
  },500)
  
 
});

$('.scroll_move2').click(function(){
  $("body,html").animate({
      scrollTop:800
      // 넘어갈 섹션 크기
  },500)
});
$('.scroll_move3').click(function(){
  $("body,html").animate({
      scrollTop:1600
      // 넘어갈 섹션 크기
  },500)
});
$('.scroll_move4').click(function(){
  $("body,html").animate({
      scrollTop:2480
      // 넘어갈 섹션 크기
  },500)
  

});
$('.scroll_move5').click(function(){
  $("body,html").animate({
      scrollTop:3300
      // 넘어갈 섹션 크기
  },500)
});
$('.scroll_move6').click(function(){
  $("body,html").animate({
      scrollTop:4200
  },500)

});




$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop >= 0 && scrollTop < 800) {
      $(".scroll_move1").addClass("on");
  } else {
      $(".scroll_move1").removeClass("on");
      
  }
});

$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop >= 800 && scrollTop <1400) {
    $(".scroll_move2").addClass("on");
  } else {
      $(".scroll_move2").removeClass("on");
  }
});
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop >= 1400 && scrollTop <2200) {
$(".scroll_move3").addClass("on");
  } else {
      $(".scroll_move3").removeClass("on");
  }
});
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop >= 2200 && scrollTop <= 3000) {
$(".scroll_move4").addClass("on");
  } else {
      $(".scroll_move4").removeClass("on");
  }
});
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop >= 3000 && scrollTop < 3800) {
$(".scroll_move5").addClass("on");
  } else {
      $(".scroll_move5").removeClass("on");

      
  }
});
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();
  if (scrollTop >= 3800 && scrollTop < 5000) {
$(".scroll_move6").addClass("on");

  } else {
      $(".scroll_move6").removeClass("on");
     
    
  }
});
