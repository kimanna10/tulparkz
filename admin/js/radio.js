document.addEventListener('DOMContentLoaded', () => {
    const radioCustoms = document.querySelectorAll('.radio-item__custom');

    radioCustoms.forEach(radio => {
        radio.addEventListener('click', function () {
            const radioInput = this.previousElementSibling;
            radioInput.checked = true;
        });
    });



if (document.querySelector('.radio-group-1')) {
    document.querySelectorAll('.radio-group-1 .credit-term').forEach(input => {
        input.addEventListener('change', function () {
            document.querySelectorAll('.radio-group-1 .radio-block').forEach(block => {
                block.classList.remove('selected');
            });
            if (this.checked) {
                this.closest('.radio-block').classList.add('selected');
            }
        });
    });
}


// Обработчик для чекбоксов в первой группе
if (document.querySelector('.radio-group-2')) {
    document.querySelectorAll('.radio-group-2 .bank-term').forEach(input => {
        input.addEventListener('change', function () {
            // Определяем состояние текущего чекбокса
            const isChecked = this.checked;

            // Если чекбокс отмечен, добавляем класс 'selected', иначе убираем
            if (isChecked) {
                this.closest('.radio-block').classList.add('selected');
            } else {
                this.closest('.radio-block').classList.remove('selected');
            }
        });
    });
}




});






