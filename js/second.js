$(function () {

//    $(window).resize(function () {
//        location.reload();
//    })

    //    fullpage.js
    $('#fullpage').fullpage({
        navigation: true,
        resize: true
    });
    $(window).on('load resize', function () {
        responsive();
    });

    $(document).ready(function responsive() {
        var w = $(window).width();
        if (w <= 768) {
            $.fn.fullpage.setResponsive(true);
        } else {
            $.fn.fullpage.setResponsive(false);
        }
    });

    //    bxslider.js
    $('.slider').bxSlider({
        auto: true,
        mode: 'fade',
        controls: false,
        pager: false
    });

    //    inview
    $('.slide1').on('inview', function () {
        //    jquery.ShuffleLetters.js
        $('.shuffle').shuffleLetters();
    });

});
