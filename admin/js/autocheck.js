$(document).ready(function() {
    // Функция для проверки состояния чекбоксов
    function checkCheckboxes() {
        if ($('.checkbox-group__check:checked').length > 0) {
            $('#clearAutocheck, #saveAutocheck').prop('disabled', false);
        } else {
            $('#clearAutocheck, #saveAutocheck').prop('disabled', true);
        }
    }

    // Обработчик событий для чекбоксов
    $('.point-autocheck .checkbox-group__check').on('change', function() {
        checkCheckboxes();
    });
    
    // Проверяем состояние чекбоксов при загрузке страницы
    checkCheckboxes();
});
