$(document).ready(function() {
    let $currentStatusItem = null;

    // Открытие дропа
    function openDropdown($statusItem) {
        const offset = $statusItem.offset();
        $('#dropdown-content').css({
            top: offset.top + $statusItem.outerHeight(),
            left: offset.left,
            display: 'block'
        }).show();
        $currentStatusItem = $statusItem;

        // Установка состояния выбранного пункта
        const currentText = $statusItem.find('.meeting').text();
        $('#dropdown-content input[name="radios"]').each(function() {
            if ($(this).siblings('label').text() === currentText) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
    }

    // Закрытие дропа
    function closeDropdown() {
        $('#dropdown-content').hide();
    }

    // Открытие дропа при клике на элемент статуса
    $('.table-block__status-item').on('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        openDropdown($(this));
    });

    // Обработка выбора и сохранения
    $('.save-button').on('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        const selectedText = $('#dropdown-content input[name="radios"]:checked').siblings('label').text();
        if ($currentStatusItem) {
            $currentStatusItem.find('.meeting').text(selectedText);
        }
        closeDropdown();
    });

    // Закрытие дропа при клике вне его области
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.table-block__status-item, #dropdown-content').length) {
            closeDropdown();
        }
    });
});