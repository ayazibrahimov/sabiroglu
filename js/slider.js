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
            0:{
                items:2
            },
            480:{
                items:3
            },
             768:{
                items:4
            },
              1500:{
                items:5
            }

        }
    });
  });