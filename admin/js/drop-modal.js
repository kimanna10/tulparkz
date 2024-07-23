

$(document).ready(function() {
    let $currentStatusItem = null;

    // Функция для обновления позиции дропдауна
    function updateDropdownPosition() {
        if ($currentStatusItem) {
            const offset = $currentStatusItem.offset();
            const statusItemHeight = $currentStatusItem.outerHeight();
            const dropdownContent = $('#dropdown-content');
            const dropdownHeight = dropdownContent.outerHeight();

            // Проверка, достаточно ли места для открытия дропдауна снизу
            if (offset.top + statusItemHeight + dropdownHeight > $(window).height() + $(window).scrollTop()) {
                // Открыть сверху
                dropdownContent.css({
                    top: offset.top - dropdownHeight - 10,
                    left: offset.left,
                    display: 'block'
                });
            } else {
                // Открыть снизу
                dropdownContent.css({
                    top: offset.top + statusItemHeight,
                    left: offset.left,
                    display: 'block'
                });
            }
        }
    }

    // Открытие дропдауна
    function openDropdown($statusItem) {
        $currentStatusItem = $statusItem;
        updateDropdownPosition();

        // Установка состояния выбранного пункта
        const currentText = $statusItem.find('.meeting').text();
        $('#dropdown-content input[name="meeting"]').each(function() {
            if ($(this).siblings('label').text() === currentText) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
    }

    // Закрытие дропдауна
    function closeDropdown() {
        $('#dropdown-content').hide();
    }

    // Открытие дропдауна при клике на элемент статуса
    $('.meeting-item').on('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        openDropdown($(this));
    });

    // Обработка выбора и сохранения
    $('.save-button').on('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        const selectedRadio = $('#dropdown-content input[name="meeting"]:checked');
        if ($currentStatusItem) {
            const selected = $currentStatusItem.find('.meeting');
            switch(selectedRadio.attr('id')) {
                case 'none':
                    selected.attr('class', 'meeting meeting__none').text('Не назначено');
                    break;
                case 'offline':
                    selected.attr('class', 'meeting meeting__offline').text('Оффлайн показ');
                    break;
                case 'test-drive':
                    selected.attr('class', 'meeting meeting__test-drive').text('Тест-драйв');
                    break;
            }
        }
        closeDropdown();
    });

    // Закрытие дропдауна при клике вне его области
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.meeting-item, #dropdown-content').length) {
            closeDropdown();
        }
    });

    // Обновление позиции дропдауна при прокрутке страницы
    $('.table-wrapper').on('scroll', function() {
        updateDropdownPosition();
    });
     // Обновление позиции дропдауна при прокрутке страницы
     $('body').on('scroll', function() {
        updateDropdownPosition();
    });
});

