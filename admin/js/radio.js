document.addEventListener('DOMContentLoaded', () => {
    const radioCustoms = document.querySelectorAll('.radio-item__custom');

    radioCustoms.forEach(radio => {
        radio.addEventListener('click', function() {
            const radioInput = this.previousElementSibling;
            radioInput.checked = true;
        });
    });

});

   


