$(document).ready(function(){
    // Функция для инициализации слайдера
    function initSlider() {
        $('.ad__img-block .slider').slick({
            autoplay: true,
            play: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            arrows: false,
            dots: true,
            pauseOnHover: true,
            autoplaySpeed: 1000
        });
    }

    initSlider();


});
