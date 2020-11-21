$(function () {
     // Menufix
     var navoff = $("header").offset().top;
     $(window).scroll(function () {
         var scrolling = $(this).scrollTop();
 
         if (scrolling > navoff) {
             $("header").addClass("menu_fix");
         } else {
             $("header").removeClass("menu_fix");
         }
     });
 

    // Slide
    $('.team_slider').slick({
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 2
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 1
                }
        },

            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 1
                }
        }
        ]
    });

    // couter js
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // working_slider Slider
    $('.working_slider').slick({
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
		},
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
		}
		]
    });

    // testmonial-active
    $('.testmonial-active').owlCarousel({
        margin: 15,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Scroll To Top  
    $(".bto").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 130) {
            $(".bto").fadeIn();
        } else {
            $(".bto").fadeOut();
        }
    });
    // Wow Js
    new WOW().init();

    //Wow Js
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();


});