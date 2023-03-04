// start testimonial carousel 

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

// end testimonial carousel 
// ==================================================

let $carousel2 = $(".explore-jobs").flickity({
    autoPlay: true,
    wrapAround: true,
    prevNextButtons: false,
    imagesLoaded: true,
    setGallerySize: true,
    fullscreen: true,
    pageDots: true, groupCells: true,
});


let $carousel3 = $(".explore-jobs-2").flickity({
    autoPlay: true,
    wrapAround: true,
    prevNextButtons: false,
    imagesLoaded: true,
    setGallerySize: true,
    fullscreen: true,
    pageDots: true, groupCells: true,
});


let $carousel4 = $(".dashboared").flickity({
    autoPlay: true,
    wrapAround: true,
    prevNextButtons: false,
    imagesLoaded: true,
    setGallerySize: true,
    cellAlign: 'right',
    fullscreen: true,
    pageDots: true, groupCells: true,
});


// filrer mobile aside 
if ($(".open-filters")) {
    let filterBtn = $(".open-filters"),
        closeFilters = $(".close-filters"),
        filtersection = $(".filters-section-container");
    filtersection.css({ "top": "100%" })
    filterBtn.click(function () {
        filtersection.removeClass("top-full").removeClass("translate-y-full").css({ "top": "0" })
    });
    closeFilters.click(function () {
        filtersection.addClass("translate-y-full")

    })
}
// =============================================
// notification clse 
if ($(".closebtn")) {
    $(".closebtn").click(function () {
        $(this).parent().css("display", "none")
    })
}

// =================================================



if (document.getElementById("personal-img")) {
    var loadFile = function (event) {
        var image = document.getElementById("personal-img");
        image.src = URL.createObjectURL(event.target.files[0]);
    };
}
