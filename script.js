(function($){
    $(function(){

        /*Scroll to sections*/
        $(".jq--scroll-skills").click(function(){
            $("html, body").animate({scrollTop: $(".jq--skills").offset().top}, 1000);
        });

        $(".jq--scroll-portfolio").click(function(){
            $("html, body").animate({scrollTop: $(".jq--portfolio").offset().top}, 1200);
        });

        $(".jq--scroll-customer-reviews").click(function(){
            $("html, body").animate({scrollTop: $(".jq--customer-reviews").offset().top}, 1400);
        });

        $(".jq--scroll-about-me").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-me").offset().top}, 1600);
        });

        $(".jq--scroll-contacts").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contacts").offset().top}, 1800);
        });

        /* Mobile navigation*/
        $(".jq--nav-icon").click(function(){
            $(".nav-background").fadeToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
        });


        /* Change hamburger to cross vice versa*/

        $(".jq--image-hamburger").click(function(){
            if($(".jq--image-hamburger").attr("src") == "images/hamburgerMenu.png")
            {
                $( $(".jq--image-hamburger").attr("src","images/crossMenu.png"))    
            }
            else
            {
                $( $(".jq--image-hamburger").attr("src","images/hamburgerMenu.png"))    
            }
        });

    });
})(jQuery);