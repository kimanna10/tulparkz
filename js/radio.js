document.addEventListener('DOMContentLoaded', () => {
    const radioCustoms = document.querySelectorAll('.radio-custom');

    radioCustoms.forEach(radio => {
        radio.addEventListener('click', () => {
            const radioInput = radio.previousElementSibling;
            radioInput.checked = true;
        });
    });


  
});
if (document.querySelector('.city__list')) {
   
    document.querySelectorAll('.city__radio-input').forEach(input => {
        input.addEventListener('change', function() {
            document.querySelectorAll('.city__item').forEach(block => {
                block.classList.remove('selected');
            });
            if (this.checked) {
                this.closest('.city__item').classList.add('selected');
            }
        });
    });
} 

if (document.querySelector('.language__list')) {
   
    document.querySelectorAll('.language__radio-input').forEach(input => {
        input.addEventListener('change', function() {
            document.querySelectorAll('.language__item').forEach(block => {
                block.classList.remove('selected');
            });
            if (this.checked) {
                this.closest('.language__item').classList.add('selected');
            }
        });
    });
} 




if (document.querySelector('.credit-term')) {
   
document.querySelectorAll('.credit-term').forEach(input => {
    input.addEventListener('change', function() {
        document.querySelectorAll('.radio-block').forEach(block => {
            block.classList.remove('selected');
        });
        if (this.checked) {
            this.closest('.radio-block').classList.add('selected');
        }
    });
});
} 