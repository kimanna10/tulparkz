document.addEventListener('DOMContentLoaded', function() {
    const codeInputBoxes = document.querySelectorAll('.code-input__box');

    codeInputBoxes.forEach((box, index) => {
        box.addEventListener('input', (event) => {
            if (event.target.value.length === 1) {
                // Move to the next input box if it exists
                if (index < codeInputBoxes.length - 1) {
                    codeInputBoxes[index + 1].focus();
                }
            }
        });

        box.addEventListener('keydown', (event) => {
            // Move to the previous input box on Backspace if the current input is empty
            if (event.key === 'Backspace' && event.target.value.length === 0) {
                if (index > 0) {
                    codeInputBoxes[index - 1].focus();
                }
            }
        });

        box.addEventListener('paste', (event) => {
            const paste = (event.clipboardData || window.clipboardData).getData('text');
            const pasteChars = paste.split('');
            
            // Fill the inputs with the pasted data
            pasteChars.forEach((char, pasteIndex) => {
                if (index + pasteIndex < codeInputBoxes.length) {
                    codeInputBoxes[index + pasteIndex].value = char;
                }
            });

            // Move focus to the next input box after the last pasted character
            if (index + pasteChars.length < codeInputBoxes.length) {
                codeInputBoxes[index + pasteChars.length].focus();
            }

            event.preventDefault();
        });
    });
});