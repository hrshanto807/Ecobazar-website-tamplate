(function ($) {
    $('.popup-new').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.eco-primary-menu').click(function () {
        $('.eco-hero-catagory-area').slideToggle();

    });

    $('.eco-hero-slider-area').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,


    })
    $('.eco-fetured-single-area-active-icon').magnificPopup({
        items: {
            src: 'home-img/fetures/4.png'
        },
        type: 'image',

    });

    $('.on-youtoube-vedio').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.eco-testimonial-slider-area').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 3,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,

    });
})(jQuery);