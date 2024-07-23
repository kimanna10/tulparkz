

$(document).ready(function() {
     let $currentStatusItem = null;


    // Функция для обновления позиции дропдауна
    function updateDropdownPosition() {
        if ($currentStatusItem) {
            const offset = $currentStatusItem.offset();
            const statusItemWidth = $currentStatusItem.outerWidth();
            const dropdownContent = $('#tooltip-drop');
            const dropdownWidth= dropdownContent.outerWidth();
            const dropdownHeight= dropdownContent.outerHeight();

            // Проверка, достаточно ли места для открытия дропдауна 
            if (offset.left + statusItemWidth + dropdownWidth > $(window).width()) {
                // Открыть слева
                dropdownContent.css({
                    top: offset.top - (dropdownHeight / 2) + 20,
                    left: offset.left - dropdownWidth - 10,
                    display: 'block',
                    marginRight: '10px'
                });
            } else {
                // Открыть справа
                dropdownContent.css({
                    top: offset.top - (dropdownHeight / 2) + 20,
                    left: offset.left + statusItemWidth,
                    display: 'block',
                    marginLeft: '10px'
                });
            }
        }
    }

    // Открытие дропдауна
    function openDropdown($statusItem) {
        $currentStatusItem = $statusItem;
        updateDropdownPosition();
    }

    // Закрытие дропдауна
    function closeDropdown() {
        $('#tooltip-drop').hide();
    }

    // Открытие дропдауна при клике на элемент статуса
    $('.point-check').on('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        openDropdown($(this));
    });

    // Обработка выбора и сохранения
    $('.edit-button').on('click', function(event) {
        event.stopPropagation(); 
        closeDropdown();
    });

    // Закрытие дропдауна при клике вне его области
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.point-check, #tooltip-drop').length) {
            closeDropdown();
        }
    });

    // Обновление позиции дропдауна при прокрутке страницы
    // $('.table-wrapper').on('scroll', function() {
    //     
    //     updateDropdownPosition();
    // });
     // Обновление позиции дропдауна при прокрутке страницы
     $('body').on('scroll', function() {
        updateDropdownPosition();
    });
});

