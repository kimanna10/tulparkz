$(document).ready(function () {
    $('.addPhotoBtn').click(function () {

            // Новый HTML для кнопки
            const newButtonHtml = `
            <button href="#" class="link link__delete">
                <div class="link__icon-delete icon-trash-full"></div>
            </button>
        `;     

        $('.car-img-block__section .link__delete').each(function() {
            $(this).html('<div class="link__icon-delete icon-trash-full"></div>');
        });
        const newImages = [
            'assets/img/car-img/car2.png',
            'assets/img/car-img/car3.png',
            'assets/img/car-img/car4.png',
            'assets/img/car-img/car1.png',
            'assets/img/car-img/car5.png',
            'assets/img/car-img/car6.png',
            'assets/img/car-img/car7.png',
            'assets/img/car-img/car8.png',
            'assets/img/car-img/car9.png'
        ];

        // Заменить изображения в карусели
        $('.car-img-block__top-img').attr('src', 'assets/img/car-img/car1.png');
        $('.car-img-block__top').find('.car-img-block__top-img').after(newButtonHtml);
        

        $('.car-img-block__body .car-img-block__item-img').each(function(index) {
            if (index < newImages.length) {
                $(this).attr('src', newImages[index]);
            }
        });


        // Пример действия: вывести текст кнопки в консоль
        $('button.openModal[data-modal="moderation"]').attr('disabled', false);

    });
});
