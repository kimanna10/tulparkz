document.addEventListener('DOMContentLoaded', function () {
    const searchContainers = document.querySelectorAll('.input-drop__search');
    const dropdownArrow = document.querySelector(".input-drop__icon-dropdown");


    // Показать dropdown при нажатии на стрелку
    dropdownArrow.addEventListener("click", function() {
        const dropdownMenu = document.querySelector(".dropdownSearch");
        const searchInput = document.querySelector('.field-search');
        const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
        
        
        if (searchInput.value.trim() === '') {
            dropdownItems.forEach(function (item) {
                item.style.display = 'flex'; // Показать все элементы
                item.classList.remove('border-b'); 
            });
        }
        const isDropdownVisible = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        this.classList.toggle('rotate-180', dropdownMenu.style.display === 'block');
        searchInput.disabled = !isDropdownVisible;
    });

    searchContainers.forEach(function (container) {
        const searchInput = container.querySelector('.field-search');
        const dropdownMenu = container.querySelector('.dropdownSearch');
        const dropdownItems = container.querySelectorAll('.dropdown-item');
        const contentDiv = container.querySelector('.field-search-choose');

        searchInput.addEventListener('input', function () {
            const query = searchInput.value.trim().toLowerCase();
            if (query !== '') {
                filterDropdownItems(query, dropdownItems, dropdownMenu);
            } else {
                dropdownMenu.style.display = 'none';
                dropdownArrow.classList.remove('rotate-180');
            }
        });

        dropdownItems.forEach(function (item) {
            item.addEventListener('click', function () {
                contentDiv.innerHTML = '<div class="choose-tag choose-tag--progress"><div class="choose-tag__text" id="search-brand">'+this.textContent.trim()+'</div><div class="choose-tag__icon choose-tag__icon--progress icon-close" id="search-reset"></div></div>';
                dropdownMenu.style.display = 'none';
                searchInput.value = "";
                searchInput.disabled = true; 
                searchInput.placeholder = ''; // Очистить значение поля ввода
                dropdownArrow.classList.remove('rotate-180');
            });
        });
        // Делегирование событий для динамически добавленного элемента #search-reset
        contentDiv.addEventListener('click', function (event) {
            if (event.target && event.target.id === 'search-reset') {
                event.stopPropagation();
                searchInput.disabled = false;
                searchInput.placeholder = 'Модель авто';
                contentDiv.innerHTML = "";
            }
        });

        document.addEventListener('click', function (event) {
            if (!container.contains(event.target) && !dropdownArrow.contains(event.target)) {
                dropdownMenu.style.display = 'none';
                dropdownArrow.classList.remove('rotate-180');
            }
        });
    });


    
    
});
