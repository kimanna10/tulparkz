

$(document).ready(function() {

    if ($('.meeting-item').length > 0) {
        let $currentStatusItem = null;

    // Функция для обновления позиции дропдауна
    function updateDropdownPosition() {
        if ($currentStatusItem) {
            const offset = $currentStatusItem.offset();
            const statusItemHeight = $currentStatusItem.outerHeight();
            const dropdownContent = $('.dropdown-meeting');
            const dropdownHeight = dropdownContent.outerHeight();

            // Проверка, достаточно ли места для открытия дропдауна снизу
            if (offset.top + statusItemHeight + dropdownHeight > $(window).height() + $(window).scrollTop()) {
                // Открыть сверху
                dropdownContent.css({
                    top: offset.top - dropdownHeight - 10,
                    left: offset.left
                });
                dropdownContent.addClass('active');
            } else {
                // Открыть снизу
                dropdownContent.css({
                    top: offset.top + statusItemHeight,
                    left: offset.left
                });
                dropdownContent.addClass('active');
            }
        }
    }

    // Открытие дропдауна
    function openDropdown($statusItem) {
        $currentStatusItem = $statusItem;
        updateDropdownPosition();

        // Установка состояния выбранного пункта
        const currentText = $statusItem.find('.meeting').text();
        $('.dropdown-meeting input[name="meeting"]').each(function() {
            if ($(this).siblings('label').text() === currentText) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
    }

    // Закрытие дропдауна
    function closeDropdown() {
        $('.dropdown-meeting').removeClass('active');
    }

    // Открытие дропдауна при клике на элемент статуса
    $('.meeting-item').on('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        openDropdown($(this));
    });

    // Обработка выбора и сохранения
    $('.save-button').on('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        const selectedRadio = $('.dropdown-meeting input[name="meeting"]:checked');
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
        if (!$(event.target).closest('.meeting-item, .dropdown-meeting').length) {
            closeDropdown();
        }
    });

    // Обновление позиции дропдауна при прокрутке страницы
    $('.table-wrapper').on('scroll', function() {
        $('.dropdown-meeting.active').each(function() {
            updateDropdownPosition();
        });
    });

         // Обновление позиции дропдауна при прокрутке страницы
     $('body').on('scroll', function() {
        $('.dropdown-meeting.active').each(function() {
            updateDropdownPosition();
        });
    });
    }
    

    if($('.stock-choose').length > 0){
        let $currentStatusItem = null;

        // Функция для обновления позиции дропдауна
        function updateDropdownPosition() {
            if ($currentStatusItem) {
                const offset = $currentStatusItem.offset();
                const statusItemHeight = $currentStatusItem.outerHeight();
                const dropdownContent = $('#dropdown-stock');
                const dropdownHeight = dropdownContent.outerHeight();

                    dropdownContent.css({
                        bottom: $(window).height() - offset.top,
                        left: offset.left
                    });
                    dropdownContent.addClass('active');
            }
        }
    
        // Открытие дропдауна
        function openDropdown($statusItem) {
            $currentStatusItem = $statusItem;
            updateDropdownPosition();
    
        }
    
        // Закрытие дропдауна
        function closeDropdown() {
            $('#dropdown-stock').removeClass('active');
        }

        // Открытие дропдауна при клике на элемент статуса
        $('.stock-choose').on('click', function(event) {
            event.stopPropagation(); // Предотвращаем всплытие события
            openDropdown($(this));
        });
        $('#stock-close').on('click', function(event) {
            event.stopPropagation(); 
            closeDropdown();
        });
    
        // Закрытие дропдауна при клике вне его области
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.stock-choose, #dropdown-stock').length) {
                closeDropdown();
            }
        });

        $('.stock-block__item .dropdown__toggle').on('click', function() {
            const dropdownId = $(this).data('dropdown-id');
            const $menu = $(`#dropdownMenu${dropdownId}`);
    
            // Сначала убираем класс со всех элементов
            $('.dropdown__toggle').removeClass('rounded-corners');
    
            // Добавляем класс к текущему элементу, если меню ещё не видно
            if (!$menu.hasClass('show')) {
                $(this).addClass('rounded-corners');
            }
    
            // Переключаем видимость текущего меню
            $menu.toggleClass('show');
    
            // Закрываем все остальные меню
            $('.dropdown__menu').not($menu).removeClass('show');
        });
    
             // Обновление позиции дропдауна при прокрутке страницы
         $('body').on('scroll', function() {
            $('.dropdown-stock.active').each(function() {
                updateDropdownPosition();
            });
        });
    }
    
});

