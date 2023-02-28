

let $carousel = $(".testimonials ").flickity({
    autoPlay: true,
    cellAlign: "center",
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    imagesLoaded: true,
    setGallerySize: true,
    fullscreen: true,
});
$(".testimonials .carousel-cell.is-selected").css("border", "1px solid #8447FF");
$(".testimonials .carousel-cell.is-selected .content ").css({ "color": "#333745" });
$(".testimonials .carousel-cell:not(.is-selected) .content ").css({ "color": "#6B7280" });

let prevArrow = $('.aanaab-slide-prev'),
    nextArrow = $('.aanaab-slide-next');
// next button
prevArrow.on('click', function () {
    $carousel.flickity('previous');
});
//  next button
nextArrow.on('click', function () {
    $carousel.flickity('next');
});

$carousel.on('change.flickity', () => {
    $(".testimonials .carousel-cell.is-selected").css({ "border": "1px solid #8447FF", "box-shadow": "0px 45px 80px rgba(0, 0, 0, 0.07), 0px 10.0513px 17.869px rgba(0, 0, 0, 0.0417275), 0px 2.99255px 5.32008px rgba(0, 0, 0, 0.0282725)" });
    $(".testimonials .carousel-cell.is-selected .content ").css({ "color": "#333745" });
    $(".testimonials .carousel-cell:not(.is-selected) .content ").css({ "color": "#6B7280" });
    $(".testimonials .carousel-cell:not(.is-selected)").css({ "border": "1px solid #D1D5DB", "box-shadow": "none" });
});


let $carousel2 = $(".explore-jobs").flickity({
    autoPlay: true,
    wrapAround: true,
    prevNextButtons: false,
    imagesLoaded: true,
    setGallerySize: true,
    fullscreen: true,
    pageDots: true,groupCells: true,
});
let $carousel3 = $(".explore-jobs-2").flickity({
    autoPlay: true,
    wrapAround: true,
    prevNextButtons: false,
    imagesLoaded: true,
    setGallerySize: true,
    fullscreen: true,
    pageDots: true,groupCells: true,
});
