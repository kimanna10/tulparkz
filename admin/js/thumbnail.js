
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('galleryModal');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    const closeButton = document.querySelector('.close');

    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });
});

