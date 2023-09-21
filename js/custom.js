(function ($) {
        $('.scrollTop').click(function(){
            $('html').animate({'scrollTop':'10'},2000);
            return false;
        });
        $(window).scroll(function(){
            let uporthekeScroll = $(window).scrollTop();
            if (uporthekeScroll > 30){
                $('.eco-primary-main-menu').addClass('fixed')
            }
            else{
                $('.eco-primary-main-menu').removeClass('fixed')
            }
            
        });
    $('.popup-new').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.Product-View').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('#stopwatch').countdown('2025/12/31', function (event) {
        $(this).html(event.strftime('<div> %d<span>:</span> <br> <p>Days</p> </div>' + '<div> %H<span>:</span> <br> <p>Hours</p> </div>' + '<div> %M<span>:</span><br> <p>Min</p></div>' + '<div>%S <br> <p>Sec</p></div>'));
    });
    $('.eco-icon-menu').click(function () {
        $('.eco-hero-catagory-area').slideToggle();
        $('.eco-hero-content-area').toggleClass('eco-hero-content-bg');
        $('.eco-hero-slider-area').toggleClass('owl-section');
    });

    $('.eco-hero-slider-area').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,


    });
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
    $('#wishlist').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('#timer').countdown('2023/12/31', function (event) {
        $(this).html(event.strftime('<div> %d<span>:</span> <br> <p>Days</p> </div>' + '<div> %H<span>:</span> <br> <p>Hours</p> </div>' + '<div> %M<span>:</span><br> <p>Min</p></div>' + '<div>%S <br> <p>Sec</p></div>'));
    });
   
})(jQuery);