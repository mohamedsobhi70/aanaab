// header 
if ($(".jobs-btn")) {
    $(".aanaab-jobs-menu").on("mouseenter", function () {
        $(".aanaab-jobs-menu").addClass("active");
    }).on("mouseleave", function () {
        $(".aanaab-jobs-menu").removeClass("active");
    })
    $(".jobs-btn").on("mouseenter", function () {
        $(".aanaab-jobs-menu").addClass("active");
    }).on("mouseleave", function () {
        $(".aanaab-jobs-menu").removeClass("active");
    })
}
if ($(".mobile-menu-btn")) {
    $(".mobile-menu-btn").on("click", function () {
        $(".aannab-mobile-menu").toggleClass("active");
    })
    $(".close-mobile-menu").on("click", function () {
        $(".aannab-mobile-menu").removeClass("active");
    })
}

// ==========================
$(".aannab-mobile-menu").find("a").on("click", function () {
    $(".aannab-mobile-menu").removeClass("active");
})

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

let $carousel5 = $(".recruitment-slider").flickity({
    autoPlay: true,
    wrapAround: true,
    prevNextButtons: false,
    imagesLoaded: true,
    setGallerySize: true,
    cellAlign: 'center',
    fullscreen: true,
    pageDots: true,
    groupCells: true,
});


// filrer mobile aside 
if ($(".open-filters")) {
    let filterBtn = $(".open-filters"),
        closeFilters = $(".close-filters"),
        filtersection = $(".filters-section-container");
    filtersection.css({ "bottom": "-100%" })
    filterBtn.click(function () {
        filtersection.removeClass("top-full").removeClass("translate-y-full").css({ "bottom": "0" })
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

// dropdown lists 
if ($(".drop-down")) {
    $(".drop-down").on("click", function () {
        $(this).parent().find(".drop-down-items").slideToggle(300);
        if ($(this).parent().find(".drop-down-icon")) {
            $(this).parent().find(".drop-down-icon").toggleClass("open");
        }
    })
}

// tabs
$('.tab-item:first').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('.tab-item').click(function () {
    $('.tab-item').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    let activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});

// tagyfy 

if (document.querySelector('.select-1') || document.querySelector('.select-2') || document.querySelector('.select-3')) {
    let input1 = document.querySelector('.select-1'),
        input2 = document.querySelector('.select-2'),
        input3 = document.querySelector('.select-3'),
        tagify1 = new Tagify(input1, {
            whitelist: ['الجغرافيا', 'التاريخ', 'الرياضيات', "الفيزياء", "اللغه العربية", "الاحصاء"],
            maxTags: 15,
            dropdown: {
                maxItems: 20,           // <- mixumum allowed rendered suggestions
                classname: "tags-look", // <- custom classname for this dropdown, so it could be targeted
                enabled: 0,             // <- show suggestions on focus
                closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
            }
        }),
        tagify2 = new Tagify(input2, {
            whitelist: ['الجغرافيا', 'التاريخ', 'الرياضيات', "الفيزياء", "اللغه العربية", "الاحصاء"],
            maxTags: 15,
            dropdown: {
                maxItems: 20,           // <- mixumum allowed rendered suggestions
                classname: "tags-look", // <- custom classname for this dropdown, so it could be targeted
                enabled: 0,             // <- show suggestions on focus
                closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
            }
        }),
        tagify3 = new Tagify(input3, {
            whitelist: ['الجغرافيا', 'التاريخ', 'الرياضيات', "الفيزياء", "اللغه العربية", "الاحصاء"],
            maxTags: 15,
            dropdown: {
                maxItems: 20,           // <- mixumum allowed rendered suggestions
                classname: "tags-look", // <- custom classname for this dropdown, so it could be targeted
                enabled: 0,             // <- show suggestions on focus
                closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
            }
        })
}


$('.drag-section').scrollLeft('-300');

const slider = document.querySelector('.recruitment');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});
// accordions 
if ($(".accordion-item")) {
    $(".accordion-title").on("click", function () {
        let th = $(this);
        th.parent().find(".accordion-content").slideToggle(400);
        th.parent().toggleClass("border-[#856F6F]").toggleClass("border-[#D7D5D5]");
        th.find("svg").toggleClass("open");
    })
}