

jQuery(document).ready(function(){

  "use strict"
  $(".slider").ripples({
    dropRadius: 13,
    perturbance: 0.01
  });

  var typed = new Typed('.text', {
    strings: ["<strong>play like you're in</strong> <strong class='primary'>first...</strong>","<strong>Train like you're in</strong> <strong class='primary'>second...</strong>"],
    typeSpeed:20,
    backSpeed:10,
    backDelay: 500,
    loop: true
  });

  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top>=60){
      $("nav").addClass('secondary');
    }
    else{
      if($("nav").hasClass('secondary')){
        $("nav").removeClass('secondary');
      }
    }
  });

  $('.work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#team-members").owlCarousel({
    items: 4,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    dots: true,
    responsive:{
      0:{
        items: 1
      },
      480:{
        items: 2
      },
      768:{
        items: 3
      },
      900:{
        items: 4
      },
      1100:{
        items: 5
      }
    }
  });

});
