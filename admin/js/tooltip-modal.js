

$(document).ready(function() {
     let $currentStatusItem = null;


    // Функция для обновления позиции дропдауна
    function updateDropdownPosition() {
        if ($currentStatusItem) {
            const offset = $currentStatusItem.offset();
            const statusItemWidth = $currentStatusItem.outerWidth();
            const dropdownContent = $($currentStatusItem.data('dropdown'));
            const dropdownWidth= dropdownContent.outerWidth();
            const dropdownHeight= dropdownContent.outerHeight();

            // Проверка, достаточно ли места для открытия дропдауна 
            if (offset.left + statusItemWidth + dropdownWidth > $(window).width()) {
                // Открыть слева
                dropdownContent.css({
                    top: offset.top,
                    left: offset.left - dropdownWidth - 10,
                    display: 'block',
                    marginRight: '10px'
                });
            } else {
                // Открыть справа
                dropdownContent.css({
                    top: offset.top,
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
        $('.dropdown-content').hide();
    }

    // Открытие дропдауна при клике на элемент статуса
    $('.point-check').on('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        closeDropdown();
        openDropdown($(this));
    });

    // Обработка выбора и сохранения
    $('.edit-button').on('click', function(event) {
        event.stopPropagation(); 
        closeDropdown();
    });

    $('#autocheck-close').on('click', function(event) {
        event.stopPropagation(); 
        closeDropdown();
    });

    // Закрытие дропдауна при клике вне его области
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.point-check, .dropdown-content').length) {
            closeDropdown();
        }
    });

    $('.point-autocheck__item .dropdown__toggle').on('click', function() {
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
        updateDropdownPosition();
    });
});

