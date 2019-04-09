
debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


$(function () {
    var service = $("#services").offset().top;
    var about = $("#about").offset().top;
    var contato = $("#contact").offset().top;



    $("li a").click(function () {
        var $section = $(this).attr("titulo");
        $("html , body").animate({

            scrollTop: $("#" + $section).offset().top - 65
        });
    });

    function animeScroll() {
        var scrollpage = $(document).scrollTop();
        if (scrollpage > 20) {
            $(".menu-sticky").addClass("menu-scroll");


            if ((scrollpage >= 0) && (scrollpage < service - 67)) {
                $("ul li:nth-child(1)").addClass("section-selected");
            } else {
                $("ul li:nth-child(1)").removeClass("section-selected");
            }

            if ((scrollpage >= service - 67) && (scrollpage < about - 70)) {
                $("ul li:nth-child(2)").addClass("section-selected");
                $(".topicos .card:nth-child(1)").addClass("card-1");
                $(".topicos .card:nth-child(2)").addClass("card-2");
                $(".topicos .card:nth-child(3)").addClass("card-3");
                $(".topicos .card:nth-child(4)").addClass("card-4");
            } else {
                $("ul li:nth-child(2)").removeClass("section-selected");
            }


            if ((scrollpage >= about - 67) && (scrollpage < contato - 70)) {
                $("ul li:nth-child(3)").addClass("section-selected");
            } else {
                $("ul li:nth-child(3)").removeClass("section-selected");
            }

            if (scrollpage >= contato - 67) {
                $("ul li:nth-child(4)").addClass("section-selected");
            } else {
                $("ul li:nth-child(4)").removeClass("section-selected");
            }



        } else {
            $(".menu-sticky").removeClass("menu-scroll");
        }
    }

    animeScroll();

    $(document).scroll(function () {
        animeScroll();
    });
})();





