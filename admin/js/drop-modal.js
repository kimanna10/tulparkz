$(document).ready(function() {
    $('.meeting').on('click', function() {
        var $parent = $(this).closest('.table-block__status-item');
        
        // Закрываем все другие открытые дропдауны
        $('.table-block__status-item').not($parent).removeClass('active');

        // Переходим к дропдауну текущего элемента
        $parent.toggleClass('active');
    });

    // Закрытие дропдауна при клике вне его области
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.table-block__status-item').length) {
            $('.table-block__status-item').removeClass('active');
        }
    });
});
