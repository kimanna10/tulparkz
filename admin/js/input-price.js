$(document).ready(function() {
    $('.amount-input').on('input', function() {
        var value = $(this).val();
        var cleanValue = value.replace(/\D/g, '');
        var formattedValue = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        $(this).val(formattedValue);
    });
});