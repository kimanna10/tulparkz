$(document).ready(function() {
    var originalContent;

    $('.editable__text').on('focus', function() {
        originalContent = $(this).html(); // Сохраняем исходный текст при фокусе
    });

    $('.editable__text').on('focusout', function() {
        var $editableText = $(this);
        var newContent = $editableText.html();

        if (newContent.trim() === '' || newContent === originalContent) {
            // Не изменяем текст, если ничего не введено или текст не изменился
            $editableText.html(originalContent);
        }
    });

    $('.editable__text').on('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // предотвращаем добавление новой строки
            $(this).blur(); // Убираем фокус с элемента
        }
    });
    // Обработка кликов вне элемента
    $(document).on('mousedown', function(event) {
        // Используем `mousedown` вместо `click` для предотвращения задержек
        if (!$(event.target).closest('.editable').length) {
            setTimeout(function() {
                $('.editable__text').each(function() {
                    if ($(this).is(':focus')) {
                        $(this).blur();
                    }
                });
            }, 0); // Маленькая задержка для обеспечения корректного выполнения `blur`
        }
    });
});
