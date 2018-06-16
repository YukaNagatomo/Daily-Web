$(function () {
//    $(window).resize(function () {
//        location.reload();
//    })

    // オプションはいろいろあるよ　検索

    //    raindrops.js
    $('#link-bg1').raindrops({
        color: '#fff',
        canvasHeight: 250
    });

    //    jquery.ShuffleLetters.js
    $('.shuffle').shuffleLetters();

    //    bxslider.js
    $('.slider').bxSlider({

        auto: true,
        mode: 'fade',
        controls: false,
        pager: false
    });

    //    slick.js
    $('.slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true
    });

    //    modaal.js
    $('.modal').modaal({
        background: '#000',
        overlay_opacity: '0.3'
    });

    //    animate.css と jquery.animateCssPlus.js
    $('.fadein').animateCssPlus({
        scroll: true,
        class: 'fadeInUp'
    });

    //    Drawer
    $(document).ready(function () {
        $(".drawer").drawer();
    });

    //    もっと見るボタン
    $('.morebutton').prevAll().hide();
    $('.morebutton').click(function () {
        if ($(this).prevAll().is(':hidden')) {
            $(this).prevAll().fadeIn();
            $(this).text('CLOSE').addClass('btnclose');
        } else {
            $(this).prevAll().fadeOut();
            $(this).text('OPEN').removeClass('btnclose');
        }
    });

    //    iziModal
    $(".iziModal").iziModal({
        loop: true,
        width: 800,
        transitionIn: 'fadeInUp',
        transitionIn: 'fadeInOut',
    });

    //    スムーススクロール

    $('a[href^="#link-"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });

    //    topへ戻るボタン
    var pagetop = $('.pagetop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
