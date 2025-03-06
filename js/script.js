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