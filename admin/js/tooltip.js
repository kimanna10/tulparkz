$(document).ready(function() {
    $('.table-block__status-item').hover(
        function(event) {
            var tooltipId = $(this).data('tooltip');
            var $tooltip = $('#' + tooltipId);
            var offset = $(this).offset();
            var width = $(this).outerWidth();

            $tooltip.css({
                top: offset.top - 10 + 'px',
                left: offset.left + (width - 50) + 'px'
            }).addClass('active');
        },
        function() {
            var tooltipId = $(this).data('tooltip');
            $('#' + tooltipId).removeClass('active');
        }
    );
});
