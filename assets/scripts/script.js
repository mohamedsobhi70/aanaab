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
        $("body").toggleClass("overflow-hidden")
    })
    $(".close-mobile-menu").on("click", function () {
        $(".aannab-mobile-menu").removeClass("active");
        $("body").toggleClass("overflow-hidden")
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


// filter mobile aside 
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
// notification close 
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
    $(".suggested-tag").each(function () {
        let th = $(this);
        th.on("click", function () {
            let it = $(this).find("span").text();
            tagify3.addTags([it])
            $(this).addClass("hidden");
        })
    })
}

$('.drag-section').scrollLeft('-300');


// video 
if (document.querySelector("#vedio")) {
    const demo = document.querySelector("#vedio");
    demo.addEventListener('scroll', function () {
        if (Window.scrollY * 0.0001 > 1 || Window.scrollY * 0.0001 < 0.2) { return; }
        else { demo.setAttribute('style', 'transform: scale(' + Window.scrollY * 0.0001 + ');'); }
    });
    let scrollContainer = document.getElementById("recruitment");
    if (window.innerWidth > 1024) {
        scrollContainer.addEventListener("wheel", (e) => {
            e.preventDefault();
            scrollContainer.scrollLeft -= e.deltaY / 2;
        })
    };
}

// scrolling slider  ==========
const slider = document.querySelector('.recruitment');
if (slider && window.innerWidth > 1024) {
    slider.addEventListener("wheel", (e) => {
        e.preventDefault();
        slider.scrollLeft -= e.deltaY;
    });
}


// accordions 
if ($(".accordion-item")) {
    $(".accordion-title").on("click", function () {
        let th = $(this);
        th.parent().find(".accordion-content").slideToggle(400);
        th.parent().toggleClass("border-[#856F6F]").toggleClass("border-[#D7D5D5]");
        th.find("svg").toggleClass("open");
    })
}


// filter jobs by search
let srchFilter = $(".filter-search-input");
if (srchFilter) {
    srchFilter.on("keyup", filt).on("blur", filt);
}

function filt() {
    let Jobs = $(".job-card ");
    let inptIner = srchFilter.val().toUpperCase();
    Jobs.each(function () {
        let th = $(this);
        if (th.find("h2").text().toUpperCase().indexOf(inptIner) > -1) {
            th.css("display", "flex");
            $(".not-found").addClass("hidden").removeClass("flex");
        } else {
            th.css("display", "none");
            $(".not-found").removeClass("hidden").addClass("flex");
        }
    })
}

// CHANGE THE STYLE OF THE LABEL AFTER THE CHECKBO IN FILTER SIDEBAR
if ($(".filters-section-container")) {
    $(".filters-section-container").find("input[type='checkbox']").each(function () {
        let th = $(this);
        if (th.is(":checked")) {
            th.parent().find(".filter-label").addClass("active")
        } else {
            th.parent().find(".filter-label").removeClass("active")
        }
        th.on("change", function () {
            if (th.is(":checked")) {
                th.parent().find(".filter-label").addClass("active")
            } else {
                th.parent().find(".filter-label").removeClass("active")
            }
        })
    })
}
// VALIDATION => INPUT FORM 

// if ($(".form-control")) {
//     let contr = $(".form-control");
//     contr.each(function () {
//         let th = $(this);
//         th.on("blur", function () {
//             if (th.val().trim() === "") {
//                 th.css("border-color", "#DC2626")
//             } else {
//                 th.css("border-color", "#10B981")
//             }
//         }).on("focus", function () {
//             th.css("border-color", "#5FC1B4")
//         });
//     })
// }

// DATE INPUT FORM 
if ($(".date-control")) {
    $(".date-control").on("focus", function () {
        $(this).next("label").css("display", "none")
    }).on("blur", function () {
        $(this).next("label").css("display", "block")
    })
}
