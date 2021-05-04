$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        nextArrow: $('.right'),
        prevArrow: $('.left'),
        infinite: true,
        speed: 500,
    });
});