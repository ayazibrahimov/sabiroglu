$(document).ready(function(){
    $(".header-carousel").owlCarousel({
        items:1,
        loop:true,
        margin:10,
        // autoplay:true,
        autoplayTimeout:3000,
        // autoplayHoverPause:true,
        dots:true,
        // nav:true,
    });
  });
$(document).ready(function(){
    $(".partner-carousel").owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        autoplayHoverPause:true,
        dots:false,
        // nav:true,
        responsive:{
            1500:{
                items:5
            },
            991:{
                items:4
            },
            600:{
                items:3
            }
        }
    });
  });