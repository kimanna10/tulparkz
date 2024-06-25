document.addEventListener('DOMContentLoaded', function () {

     function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    function enableScroll() {
        document.body.style.overflow = '';
    }

    const modal = document.getElementById('myModal');

    if (modal) {
        const openModalBtns = document.querySelectorAll(' #openModal');
        const closeModalBtns = modal.querySelectorAll('#cancelBtn');
        const submitModalBtns = modal.querySelectorAll('#submitBtn');
        function openModal() {
            modal.style.display = 'block';
            disableScroll();
        }

        function closeModal() {
            modal.style.display = 'none';
            enableScroll();
        }

        function submitModal() {
            closeModal();
        }


        openModalBtns.forEach(btn => {
            btn.addEventListener('click', function (event) {
                event.preventDefault();
                openModal();
            });
        });

        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                closeModal();
            });
        });

        submitModalBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                submitModal();
            });
        });

        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });

    }


    const modalMark = document.getElementById('modal-mark');

    if (modalMark) {

        const openModalMark = document.querySelector('#show-mark');
        const closeModalMark = modalMark.querySelector('#close-mark');

        function openModal() {
            modalMark.style.display = 'flex';
            disableScroll();
        }

        function closeModal() {
            modalMark.style.display = 'none';
            enableScroll();
        }

        function submitModal() {
            closeModal();
        }


        openModalMark.addEventListener('click', function () {
            openModal();
        });

        closeModalMark.addEventListener('click', function () {
            closeModal();
        });


        window.addEventListener('click', function (event) {
            if (event.target === modalMark) {
                closeModal();
            }
        });

    }



    const modalModel = document.getElementById('modal-model');

    if (modalModel) {

        const openModalModel = document.querySelector('#show-model');
        const closeModalModel = modalModel.querySelector('#close-model');

        function openModel() {
            modalModel.style.display = 'flex';
            disableScroll();
        }

        function closeModel() {
            modalModel.style.display = 'none';
            enableScroll();
        }

        function submitModal() {
            closeModel();
        }


        openModalModel.addEventListener('click', function () {
            openModel();
        });

        closeModalModel.addEventListener('click', function () {
            closeModel();
        });


        window.addEventListener('click', function (event) {
            if (event.target === modalModel) {
                closeModel();
            }
        });

    }






});
