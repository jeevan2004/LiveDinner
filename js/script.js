// $(document).ready(function ($) {
//     if ($('#trustgallery').length) {
//         $("#trustgallery").lightGallery();
//     }
// });

$('#trustgallery').lightGallery({
    selector: '.item',
    width: '700px',
    height: '470px',
    mode: 'lg-fade',
    counter: true,
    download: true,
    startClass: '',
    enableSwipe: true,
    enableDrag: true,
    speed: 500
});

$("document").ready(function ($) {

    $(".hero-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        loop: true,
        fade: true,
        speed: 1500,
        // // responsive: [{
        // //         breakpoint: 992,
        // //         settings: {
        // //             slidesToShow: 2,
        // //             slidesToScroll: 2,
        // //             infinite: true,
        // //             dots: true
        // //         }
        // //     },
        // //     {
        // //         breakpoint: 576,
        // //         settings: {
        // //             slidesToShow: 1,
        // //             slidesToScroll: 1,
        // //             infinite: true,
        // //             dots: false
        // //         }
        // //     }


        // ]
    });
});


// $('#trustgallery').lightGallery({
//     width: '700px',
//     height: '470px',
//     mode: 'lg-fade',
//     addClass: 'fixed-size',
//     counter: false,
//     download: false,
//     startClass: '',
//     enableSwipe: false,
//     enableDrag: false,
//     speed: 500
// });


$("document").ready(function ($) {

    $(".customer-reviews-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        loop: true,
        speed: 1000,
        // // responsive: [{
        // //         breakpoint: 992,
        // //         settings: {
        // //             slidesToShow: 2,
        // //             slidesToScroll: 2,
        // //             infinite: true,
        // //             dots: true
        // //         }
        // //     },
        // //     {
        // //         breakpoint: 576,
        // //         settings: {
        // //             slidesToShow: 1,
        // //             slidesToScroll: 1,
        // //             infinite: true,
        // //             dots: false
        // //         }
        // //     }


        // ]
    });
});


$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});