//   navbar interaksi
jQuery(document).ready(function () {

    "use strick"

    $('header').ripples({
        dropRadius: 10,
        pertubance: 0.01,
    })

});
// navbar 

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
});

// ketik automatis js 
var typed = new Typed(".type", {
    strings: ["Mudah Makan",
        "Mesan Makan Lewat HP",
        "Ga perlu Nunggu"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

//   swiper slider 
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});