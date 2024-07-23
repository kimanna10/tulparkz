function getModalContent(modalNumber) {
    switch (modalNumber) {
        case 'application':
            return {
                header: "Отправить заявку",
                body: "Вы уверены, что хотите отправить заявку? Вы больше не сможете внести изменения",
                success: "Заявка отправлена"
            };
        case 'accept':
            return {
                header: "Одобрить объявление",
                body: "Объявление отправится в каталог и информация по ней продублируется в CRM",
                success: "Объявление одобрено"
            };
        case 'archive':
            return {
                header: "Архивировать объявление",
                body: "Вы уверены, что хотите архивировать объявление?",
                success: "Объявление архивировано"
            };
        case 'edit':
            return {
                header: "Отправить объявление на модерацию",
                body: "Вы уверены, что хотите отправить объявление на модерацию?",
                success: "Объявление отправлено на модерацию"
            };

            case 'moderation':
                return {
                    header: "Отправить на модерацию",
                    body: "Вы уверены, что хотите отправить объявление на модерацию? Вы больше не сможете внести изменения",
                    success: "Объявление отправлено на модерацию"
                };

                case 'clear':
                    return {
                        header: "Очистить страницу",
                        body: "Вы уверены, что хотите очистить страницу? Все данные будут утеряны",
                        success: "Страница очищена"
                    };
        default:
            return {
                header: "Неизвестный запрос",
                body: "Неизвестный запрос",
                success: "Неизвестный запрос"
            };
    }
}
let $currentModal = null;
function openModal(modalId, modalNumber, headerText, bodyText) {
    if ($currentModal) {
        $currentModal.hide();
    }
    var $modal = $(modalId);
    $modal.data('modal', modalNumber); // Устанавливаем data-modal для модального окна
    $modal.find('.modal-header').text(headerText);
    $modal.find('.modal-body').text(bodyText);
    $modal.css('display', 'flex');
    $('body').addClass('modal-open');
    $currentModal = $modal;
}

function openModalSuccess(modalId, successText) {
    var $modal = $(modalId);
    $modal.find('.modal-success').text(successText);
    $modal.css('display', 'flex');
    $('body').addClass('modal-open');
}

function closeModal(modalId) {
    var $modal = $(modalId);
    $modal.hide();
    if ($modal.is($currentModal)) {
        $currentModal = null;
    }
    $('body').removeClass('modal-open');
    
}



function open($modal) {
    $modal.show();
}
function close($modal) {
    $modal.hide();
}
$(document).ready(function() {
    $('.openModal').click(function() {
        var modalNumber = $(this).data('modal');
        var content = getModalContent(modalNumber);
        openModal('#modal1', modalNumber, content.header, content.body); 
    });

    $('#yesBtn').click(function() {
        var modalNumber = $('#modal1').data('modal'); 
        var content = getModalContent(modalNumber);
        openModalSuccess('#modal2', content.success);
        closeModal('#modal1'); 
    });

    $('#noBtn').click(function() {
        closeModal('#modal1');
    });

    $('#create-adv').click(function() {
        const targetModal = $(this).data('target');
        const $modal = $(targetModal);
        openModal($modal);
    });
    $('.modal-call').click(function() {
        const targetModal = $(this).data('target');
        const $modal = $(targetModal);
        openModal($modal);
    });

    

    $(window).click(function(event) {
        if ($(event.target).is('.modal')) {
            closeModal('.modal');
        }
    });
});
