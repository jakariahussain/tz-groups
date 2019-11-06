(function ($) {
    $('.gallery_item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //(plugin name wow plugins)
    new WOW().init();

    //sticky menu
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $(".sticky").removeClass("sticky-header");
        } else {
            $(".sticky").addClass("sticky-header");
        }
    });

    //(owl-caroselplugins)
    $('.hero_area .owl-carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        navText: ["<img src='images/all/05.png'>", "<img src='images/all/05.png'>"],
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1000: {
                items: 1
            }
        }
    });
    //data-backgorund
     $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })
    // smoth scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)
        speed: 2000,
        offset: 100,
        easing: 'easeInOutCubic',
        customEasing: function (time) {
            return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
        },
    });
    // mobile-menu
       $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "768",
    });
})(jQuery);