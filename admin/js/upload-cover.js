$(document).ready(function() {
    var covers = []; // Массив для хранения обложек
    var stories = []; // Массив для хранения сторисов

    // Drag-and-drop functionality
    $('.upload-card__placeholder').on('dragover', function(event) {
        event.preventDefault();
        $(this).addClass('dragover');
    });

    $('.upload-card__placeholder').on('dragleave', function(event) {
        event.preventDefault();
        $(this).removeClass('dragover');
    });

    $('.upload-card__placeholder').on('drop', function(event) {
        event.preventDefault();
        $(this).removeClass('dragover');
        var files = event.originalEvent.dataTransfer.files;
        var input = $(this).siblings('.upload-card__input');
        input.prop('files', files);
        input.trigger('change');
    });

    // Trigger file input click when custom link is clicked
    $('.upload-img').on('click', function() {
        $(this).closest('.upload-card').find('.upload-card__input').click();
    });

    // Upload handling
    $('.upload-card__input').on('change', function(event) {
        var file = event.target.files[0];
        if (!file) return; 

        var uploadCard = $(this).closest('.upload-card');
        var uploadPlaceholder = uploadCard.find('.upload-card__placeholder');
        var uploadInfo = uploadCard.find('.upload-info');
        var progressBar = uploadCard.find('.upload-info__progress-bar');
        var progress = uploadCard.find('.upload-info__progress');
        var progressPercent = uploadCard.find('.upload-info__progress-percent');
        var uploadedImage = uploadCard.find('.upload-info__image');
        var fileName = uploadCard.find('.upload-info__file-name');

        // Determine if the file is a cover or a story
        if (uploadCard.hasClass('cover')) {
            covers.push(file); 
        } else if (uploadCard.hasClass('story')) {
            stories.push(file); 
        }

        // Display uploaded image and file name
        var reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.attr('src', e.target.result);
            fileName.text(file.name);
            uploadPlaceholder.hide();
            uploadInfo.show();
        };
        reader.readAsDataURL(file);

        // Simulate upload progress
        progressBar.show();

        // Set the duration based on the file size (this is just a simulation)
        var duration = Math.min(Math.max(file.size / 100000, 1), 5) * 1000;  // Between 1 and 5 seconds

        var startTime = Date.now();
        var interval = setInterval(function() {
            var elapsedTime = Date.now() - startTime;
            var percentComplete = Math.min((elapsedTime / duration) * 100, 100);
            progress.css('width', percentComplete + '%');
            progressPercent.text(Math.round(percentComplete) + '%');

            if (percentComplete === 100) {
                clearInterval(interval);
            }
        }, 100);

        // Show preview button if three files are uploaded in each category
        if (covers.length === 3) {
            $('.create .previewButton').show();
        }
        else{
            $('.create .previewButton').hide();
        }
        if(stories.length === 3){
            $('.create-slide .previewButton').show();
        }
        else{
            $('.create-slide .previewButton').hide();
        }

        console.log(covers.length);
        console.log(stories.length);
    });

    // Function to display uploaded images in the modal
    function displayInModal() {
        var modalPreview = $('#modal-preview');
        var previewContainer = modalPreview.find('#previewContainer');

        covers.forEach(function(file, index) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var previewItem = previewContainer.find('.modal-body__preview-item').eq(index);
                
                if (previewItem.length) {
                    previewItem.find('img').attr('src', e.target.result);
                }
            };
            reader.readAsDataURL(file); 
        });

        stories.forEach(function(file, index) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var previewItem = previewContainer.find('.modal-body__preview-item').eq(index);
                
                if (previewItem.length) {
                    previewItem.find('img').attr('src', e.target.result);
                }
            };
            reader.readAsDataURL(file); 
        });


    }



   
    // Example of triggering the modal preview function (you can connect this to a button or another event)
    $('#previewButton').on('click', function() {
        displayInModal();
        $('#modal-preview').css('display', 'flex'); 
    });

    $('#step2Btn').click(function() {
        covers=[];
        $('.create .previewButton').hide();
    });

    $('#step3Btn').click(function() {
        stories=[];
        $('.create-slide .previewButton').hide();
    });

    $('.modal-close-icon').click(function() {

        if(covers.length > 0 ){
            covers=[];
            $('.create .previewButton').hide();
           }
           if(stories.length  >0){
            stories=[];
        $('.create-slide .previewButton').hide();
           }
    });
    

    $(window).click(function(event) {
        if ($(event.target).is('.modal')) {
           if(covers.length > 0 ){
            covers=[];
            $('.create .previewButton').hide();
           }
           if(stories.length >0){
            stories=[];
        $('.create-slide .previewButton').hide();
           }
        }
    });




});
