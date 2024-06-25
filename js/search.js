document.addEventListener('DOMContentLoaded', function () {
    const searchContainers = document.querySelectorAll('.content__search');

    searchContainers.forEach(function (container) {
        const searchInput = container.querySelector('.field-search');
        const closeIcon = container.querySelector('.content__icon-close');
        const dropdownMenu = container.querySelector('.dropdownSearch');
        const dropdownItems = container.querySelectorAll('.content__search-dropdown-item');

        searchInput.addEventListener('input', function () {
            const query = searchInput.value.trim().toLowerCase();
            if (query !== '') {
                dropdownMenu.style.display = 'block';
                closeIcon.style.display = 'inline';
                filterDropdownItems(query, dropdownItems, dropdownMenu);
            } else {
                dropdownMenu.style.display = 'none';
                closeIcon.style.display = 'none';
            }
        });

        closeIcon.addEventListener('click', function () {
            searchInput.value = '';
            dropdownMenu.style.display = 'none';
            closeIcon.style.display = 'none';
        });

        dropdownItems.forEach(function (item) {
            item.addEventListener('click', function () {
                searchInput.value = this.textContent.trim();
                dropdownMenu.style.display = 'none';
                closeIcon.style.display = 'inline';
            });
        });

        document.addEventListener('click', function (event) {
            if (!container.contains(event.target)) {
                dropdownMenu.style.display = 'none';
            }
        });
    });

    function filterDropdownItems(query, dropdownItems, dropdownMenu) {
        const normalizedQuery = query.trim().toLowerCase();
        let anyVisibleItem = false;

        dropdownItems.forEach(function (item) {
            const itemText = item.textContent.trim().toLowerCase();
            if (itemText.includes(normalizedQuery)) {
                item.style.display = 'flex';
                anyVisibleItem = true;
            } else {
                item.style.display = 'none';
            }
        });

        dropdownMenu.style.display = anyVisibleItem ? 'block' : 'none';
    }
});