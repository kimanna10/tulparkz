document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('myModal');
    const openModalBtns = document.querySelectorAll(' #openModal');
    const closeModalBtns = modal.querySelectorAll('#cancelBtn');
    const submitModalBtns = modal.querySelectorAll('#submitBtn');

    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function submitModal() {
        closeModal(); 
    }


    openModalBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            openModal();
        });
    });

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            closeModal();
        });
    });

    submitModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            submitModal();
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
