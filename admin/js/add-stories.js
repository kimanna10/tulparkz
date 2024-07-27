function getModalSuccess(modalNumber) {
    switch (modalNumber) {
        case 'publish':
            return {
                success: "Успешно опубликовано!"
            };
        case 'queue':
            return {
                success: "Добавлено в очередь"
            };
        default:
            return {
                success: "Неизвестный выбор"
            };


    }
}
let $currentModal = null;

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
    reset($modal);
    $modal.css('display', 'flex');
}
// function close($modal) {
//     $modal.css('display' , 'none');
// }

function reset($modal){
    $modal.find('input[type="file"]').val('');
    $modal.find('input[type="text"]').val('');

    if($modal.hasClass('create')){
        $('.upload-info').hide();
        $('.upload-card__placeholder').show();
    }
    if($modal.hasClass('create-slide')){
        $('.upload-info').hide();
        $('.upload-card__placeholder').show();
    }
}
$(document).ready(function() {


    $('#add-exist').click(function() {
        var $modal = $('#modal-add-slide'); 
        open($modal);
    });

    $('#add-stories').click(function() {
        var $modal = $('#modal-create-stories'); 
        open($modal);
    });

    $('#step2Btn').click(function() {
        closeModal($(this).closest('.modal')); 
        var $modal = $('#modal-create-2'); 
        open($modal);
    });

    $('#addButton').click(function() {
        closeModal($(this).closest('.modal')); 
        var $modal = $('#modal-create-2'); 
        open($modal);
    });

    $('#step3Btn').click(function() {
        closeModal($(this).closest('.modal')); 
        var $modal = $('#modal-create-3'); 
        open($modal);
    });

    $('#publishBtn').click(function() {
        var selectedRadio = $('input[name="publish"]:checked').attr('id');
        var content = getModalSuccess(selectedRadio);

        openModalSuccess('#modalSuccess', content.success);
        closeModal($(this).closest('.modal')); 
    });

    $('.modal-close-icon').click(function() {
        closeModal($(this).closest('.modal')); 
    });
    

    $(window).click(function(event) {
        if ($(event.target).is('.modal')) {
            closeModal('.modal');
        }
    });
});
