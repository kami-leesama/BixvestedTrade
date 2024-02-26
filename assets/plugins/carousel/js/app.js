(function($){
    "use strict";
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          dots:true,
          autoplay:true,
          autoplayTimeout:2000,
          autoplayHoverPause:true,
                responsive:{
                    0:{
                    items:1
                    },
                    600:{
                    items:2
                    },
                    1000:{
                    items:3
                    }
                }
        });
      });
}) (jQuery)

