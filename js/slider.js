$(document).ready(function () {
    // Функция для инициализации слайдера в профиле и на главной странице
    function initSlider() {
        $('.ad__img-block .slider').slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            arrows: false,
            dots: true,
            pauseOnHover: true,
            autoplaySpeed: 1000
        });

  

        $('.banner-slider .slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable: true,
            arrows: false,
            dots: false,
            pauseOnHover: true,
            autoplay: true,
            autoplaySpeed: 5000,
            centerMode: true,
            centerPadding: '8%',
            responsive: [
                {
                    breakpoint: 1920, // Ширина экрана менее 1200px
                    settings: {
                        slidesToShow: 3 ,
                        centerPadding: '10%'
                    }
                },
                {
                    breakpoint: 1670, // Ширина экрана менее 1200px
                    settings: {
                        slidesToShow: 3 ,
                        centerPadding: '6%'
                    }
                },
                {
                    breakpoint: 1440, // Ширина экрана менее 1200px
                    settings: {
                        slidesToShow: 2 ,
                        centerPadding: '15%'
                    }
                },
                {
                    breakpoint: 1200, // Ширина экрана менее 1200px
                    settings: {
                        slidesToShow: 2 ,
                        centerPadding: '8%'
                    }
                },
                {
                    breakpoint: 992, // Ширина экрана менее 992px
                    settings: {
                        slidesToShow: 1, // Показывать 2.5 слайда
                        centerPadding: '20%', // Отступы по бокам в процентном соотношении
                    }
                },
                {
                    breakpoint: 768, // Ширина экрана менее 768px
                    settings: {
                        slidesToShow: 1.5, // Показывать 1.5 слайда
                        centerPadding: '10%', // Отступы по бокам в процентном соотношении
                    }
                }
            ]

        });
    }

    initSlider();


});
