document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => {
        const el = document.querySelector('.follow-cursor')

        window.addEventListener('mousemove', e => {
            const target = e.target
            if (!target) return

            if (target.closest('a')) {
                el.classList.add('follow-cursor_active')
            } else {
                el.classList.remove('follow-cursor_active')
            }

            el.style.left = e.pageX + 'px'
            el.style.top = e.pageY + 'px'
        })
    }

    followCursor()

});


new WOW().init();


$(document).ready(function() {
    $("#navigation").click(function() {
        $("header").toggleClass("active");
        $("body").toggleClass("ov-hidden");
        $(this).toggleClass("active");
        return false;
    });
});
$(document).ready(function() {
    $("#navigation-box ul li a").click(function() {
        $("header").removeClass("active");
        $("body").removeClass("ov-hidden");
        $("#navigation").removeClass("active");
    });
});

(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);

$('.roadmap-slider').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    autoHeight: true,
    autoWidth: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        981: {
            items: 3
        }
    }
});




$('.community-slider').owlCarousel({
    nav: false,
    loop: true,
    autoplay: true,
    autoWidth: true,
    smartSpeed: 7500,
    autoplayTimeout: 2000,
    slideTransition: 'linear'
});



$('.slider-nft-item').owlCarousel({
    loop: false,
    nav: false,
    items: 5,
    responsive: {
        0: {
            items: 1
        },
        600: {
            margin: 10
        },
        981: {
            items: 5,
            margin: 20
        }
    }
});



$('.slider-team').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    autoWidth: true,
    items: 2
});

$('.corner-box .cornet-box-inside').owlCarousel({
    loop: true,
    margin: 40,
    animateOut: 'fadeOut',
    nav: true,
    items: 1
});



var owl = $('.slider-news,.slider-top-sales');
owl.owlCarousel({
    loop: false,
    items: 1,
    margin: 10,
    nav: true,
    onInitialized: function(e) {
        $('.counter-1').text('1/' + this.items().length)
        console.log();
    }
});
owl.on('changed.owl.carousel', function(e) {
    $('.counter-1').text(++e.page.index + '/' + e.item.count)
});

var owl = $('.slider-accordion');
owl.owlCarousel({
    loop: false,
    items: 1,
    margin: 30,
    nav: true,
    onInitialized: function(e) {
        $('.counter-2').text('1/' + this.items().length)
        console.log();
    }
});
owl.on('changed.owl.carousel', function(e) {
    $('.counter-2').text(++e.page.index + '/' + e.item.count)
});

var owl = $('.slider-breeds');
owl.owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dotsEach: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        981: {
            items: 3
        }
    },
    onInitialized: function(e) {
        $('.counter-3').text('1/' + this.items().length)
        console.log();
    }
});
owl.on('changed.owl.carousel', function(e) {
    $('.counter-3').text(++e.page.index + '/' + e.item.count)
});




var owl = $('.slider-sets');
owl.owlCarousel({
    loop: false,
    nav: true,
    dotsEach: true,
    responsive: {
        0: {
            margin: 10
        },
        981: {
            items: 3,
            margin: 20

        }
    },
    onInitialized: function(e) {
        $('.counter-3').text('1/' + this.items().length)
        console.log();
    }
});
owl.on('changed.owl.carousel', function(e) {
    $('.counter-3').text(++e.page.index + '/' + e.item.count)
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
};


if ($(window).width() > 700) {
    var rellax = new Rellax('.parallax', {
        speed: -2,
        center: true
    });
};

$('.btn,.collection-item,.header-start-page-text a').bind('touchstart', function() {});

$(document).ready(function() {
    $(".collection-item").click(function() {
        $(this).toggleClass("click");
        return false;
    });
});