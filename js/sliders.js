$('.roundabout_machines').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<a class=\"button_slider_left\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> </a>",
    nextArrow: "<a class=\"button_slider_right\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.roundabout_brand').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: "<a class=\"brand_button_slider_left\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> </a>",
    nextArrow: "<a class=\"brand_button_slider_right\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});