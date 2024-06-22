function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(inputId + '-toggle-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('icon-hide');
        toggleIcon.classList.add('icon-show');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('icon-show');
        toggleIcon.classList.add('icon-hide');
    }
}