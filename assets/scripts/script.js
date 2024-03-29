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
    $(".accordion-title:not(.edit-btn):not(.save-btn)").on("click", function () {
        let th = $(this);
        th.parent().toggleClass("active");
        th.parent().find(".accordion-content").slideToggle(400);
        th.parent().toggleClass("border-[#856F6F]").toggleClass("border-[#D7D5D5]");
        th.find("svg.arrow").toggleClass("open");
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

if ($(".form-input")) {
    $(".form-input").on("focus", function () {
        $(this).addClass("validation");
        validate($(this));
    })
}
if ($(".form-textarea")) {
    $(".form-textarea").on("focus", function () {
        $(this).addClass("validation")
    })
}

if ($(".form-input")) {
    $(".form-input").on("keyup", function () {
        validate($(this));
    })
}
function validate(el) {
    if (el.is(":invalid")) {
        el.siblings(".validation-img").html(`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8876 9.85045C12.8876 9.59933 12.7871 9.34821 12.6063 9.16741L9.65318 6.21429L12.6063 3.26116C12.7871 3.08036 12.8876 2.82924 12.8876 2.57812C12.8876 2.32701 12.7871 2.07589 12.6063 1.89509L11.2402 0.529017C11.0594 0.348214 10.8083 0.247767 10.5572 0.247767C10.3061 0.247767 10.055 0.348214 9.87416 0.529017L6.92104 3.48214L3.96791 0.529017C3.78711 0.348214 3.53599 0.247767 3.28488 0.247767C3.03376 0.247767 2.78265 0.348214 2.60184 0.529017L1.23577 1.89509C1.05497 2.07589 0.95452 2.32701 0.95452 2.57812C0.95452 2.82924 1.05497 3.08036 1.23577 3.26116L4.1889 6.21429L1.23577 9.16741C1.05497 9.34821 0.95452 9.59933 0.95452 9.85045C0.95452 10.1016 1.05497 10.3527 1.23577 10.5335L2.60184 11.8996C2.78265 12.0804 3.03376 12.1808 3.28488 12.1808C3.53599 12.1808 3.78711 12.0804 3.96791 11.8996L6.92104 8.94643L9.87416 11.8996C10.055 12.0804 10.3061 12.1808 10.5572 12.1808C10.8083 12.1808 11.0594 12.0804 11.2402 11.8996L12.6063 10.5335C12.7871 10.3527 12.8876 10.1016 12.8876 9.85045Z" fill="#DC2626"/>
        </svg>
        `)
    }
    else {
        el.siblings(".validation-img").html(`<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.9196 2.33928C13.9196 2.11607 13.8304 1.89286 13.6696 1.73214L12.4554 0.517857C12.2946 0.357142 12.0714 0.267857 11.8482 0.267857C11.625 0.267857 11.4018 0.357142 11.2411 0.517857L5.38393 6.38393L2.75893 3.75C2.59821 3.58929 2.375 3.5 2.15179 3.5C1.92857 3.5 1.70536 3.58929 1.54464 3.75L0.330357 4.96429C0.169643 5.125 0.0803572 5.34821 0.0803572 5.57143C0.0803572 5.79464 0.169643 6.01786 0.330357 6.17857L3.5625 9.41071L4.77679 10.625C4.9375 10.7857 5.16071 10.875 5.38393 10.875C5.60714 10.875 5.83036 10.7857 5.99107 10.625L7.20536 9.41071L13.6696 2.94643C13.8304 2.78571 13.9196 2.5625 13.9196 2.33928Z" fill="#10B981"/>
        </svg>`)
    }
}