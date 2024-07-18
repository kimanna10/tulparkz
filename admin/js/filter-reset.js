$(document).ready(function() {
    const clearButton = $('#filter-reset'); // Кнопка "Очистить"
    const tableRows = $('.table-block__body-row');
    const brandInput = $('.field-search-choose');
    const statusInput = $('#status-filter');
    const statusRadios = $('input[name="radios"]');
    const rangeMinInput = $('.range-min');
    const rangeMaxInput = $('.range-max');

    const priceMin = $('.price-min');
    const priceMax = $('.price-max');
    const range = $('.slider-range .progress'); 


    const searchInput = $('#search'); 

    function formatNumberWithSpaces(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
    

    // Функция для сброса всех фильтров
    function clearFilters() {
        brandInput.html(''); // Сброс выбранного бренда
        searchInput.prop('disabled', false); // Установка disabled в false
        searchInput.prop('placeholder', 'Модель авто'); // Установка placeholder

        statusRadios.prop('checked', false); // Сброс выбранного статуса
        statusInput.html('');
        statusInput.html('<div class="dropdown__status-text">Статус объявления</div>');

        rangeMinInput.val(0); // Сброс минимального значения цены
        rangeMaxInput.val(10000000); // Сброс максимального значения цены
        const min = 0;
        const max = formatNumberWithSpaces(10000000);
        priceMin.text(min);
        priceMax.text(max);
        updateRangeWidth();
        localStorage.clear();


     
    }

    // Обработчик события для кнопки "Очистить"
    clearButton.on('click', function() {
        clearFilters();
    });

    function updateRangeWidth() {
        // Получаем значения минимального и максимального диапазонов
        let minVal = parseInt(rangeMinInput.val());
        let maxVal = parseInt(rangeMaxInput.val());

        // Получаем максимальные значения из атрибутов
        let minAttr = parseInt(rangeMinInput.attr('min'));
        let maxAttr = parseInt(rangeMaxInput.attr('max'));

        // Рассчитываем ширину для левой и правой сторон ползунка
        let leftWidth = ((minVal - minAttr) / (maxAttr - minAttr)) * 100 + '%';
        let rightWidth = 100 - ((maxVal - minAttr) / (maxAttr - minAttr)) * 100 + '%';

        // Устанавливаем ширину ползунка
        range.css({
            'left': leftWidth,
            'right': rightWidth
        });
    }


});
