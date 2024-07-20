$(document).ready(function() {
    $('.table-block__status-item').hover(
        function() {
            var tooltipId = $(this).data('tooltip');
            var $tooltip = $('#' + tooltipId);
            var $this = $(this);

            // Установка позиции тултипа
            updateTooltipPosition($tooltip, $this);
            $tooltip.addClass('active');
        },
        function() {
            var tooltipId = $(this).data('tooltip');
            $('#' + tooltipId).removeClass('active');
        }
    );

    // Обновление позиции тултипа при скролле контейнера
    $('.table-wrapper').on('scroll', function() {
        $('.tooltip.active').each(function() {
            var tooltipId = $(this).attr('id');
            var $target = $('[data-tooltip="' + tooltipId + '"]');
            var $tooltip = $(this);

            updateTooltipPosition($tooltip, $target);
        });
    });
    $('body').on('scroll', function() {
        $('.tooltip.active').each(function() {
            var tooltipId = $(this).attr('id');
            var $target = $('[data-tooltip="' + tooltipId + '"]');
            var $tooltip = $(this);

            updateTooltipPosition($tooltip, $target);
        });
    });

    // Функция для обновления позиции тултипа
    function updateTooltipPosition($tooltip, $target) {
        var offset = $target.position(); // Получаем позицию относительно родительского элемента
        var width = $target.outerWidth();
        var tooltipWidth = $tooltip.outerWidth();
        var tooltipHeight = $tooltip.outerHeight();

        $tooltip.css({
            top: offset.top - tooltipHeight - 5 + 'px',
            left: offset.left + (width - tooltipWidth) / 2 + 5 + 'px'
        });
    }
});
