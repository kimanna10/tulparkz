document.addEventListener('DOMContentLoaded', function () {
    const modifMenu = document.querySelector('.modif-block');
    const dropdownModif = document.querySelector('.other-modif');
    const otherModifItem = modifMenu.querySelector('.other-modif');

    setupChooseClassToggle('.content__year-dropdown-item');
    setupChooseClassToggle('.content__gen-dropdown-item');
    setupChooseClassToggle('.content__carcase-dropdown-item');
    setupChooseClassToggle('.content__helm-dropdown-item');
    setupChooseClassToggle('.content__engine-dropdown-item');

    setupChooseClassToggleBordered('.content__drive-dropdown-item');

    setupChooseClassToggle('.content__trans-dropdown-item');
    setupChooseClassToggle('.content__modification-dropdown-item');
    setupChooseClassToggleColor('.content__color-dropdown-item');


    function setupChooseClassToggle(itemSelector) {
        const items = document.querySelectorAll(itemSelector);
        items.forEach(function (item) {
            item.addEventListener('click', function () {
                items.forEach(function (el) {
                    el.classList.remove('choose');
                });
                this.classList.add('choose');

        if (this === otherModifItem) {
            modificationInputs.forEach(function(input) {
                input.disabled = false;
                input.value = ''; 
            });
        } else {
            modificationInputs.forEach(function(input) {
                input.disabled = true;
                input.value = '';
            });
        }


            });
        });
    }
    function setupChooseClassToggleBordered(itemSelector) {
        const items = document.querySelectorAll(itemSelector);
        items.forEach(function (item) {
            item.addEventListener('click', function () {
                items.forEach(function (el) {
                    el.classList.remove('choose-bordered');
                });
                this.classList.add('choose-bordered');
            });
        });
    }

    function setupChooseClassToggleColor(itemSelector) {
        const items = document.querySelectorAll(itemSelector);
        items.forEach(function (item) {
            item.addEventListener('click', function () {
                items.forEach(function (el) {
                    el.classList.remove('choose-color');
                });
                this.classList.add('choose-color');
            });
        });
    }





    const toggleState = document.querySelector('.toggle-state');
    const switchInput = document.getElementById('gas');

    updateToggleState(switchInput.checked);
    switchInput.addEventListener('change', function () {
        updateToggleState(this.checked);
    });
    function updateToggleState(isChecked) {
        toggleState.textContent = isChecked ? 'Да' : 'Нет';
    }


    const switchColor = document.getElementById('color');
    const colorMenu = document.querySelector('.color-block');

    const filterColor= colorMenu.querySelector('.filter-color');
    updateToggleColor(switchColor.checked);
    switchColor.addEventListener('change', function () {
        updateToggleColor(this.checked);
    });
    function updateToggleColor(isChecked) {
        filterColor.textContent = isChecked ? ' металик' : '';
    }


 
    const filterModifDiv = modifMenu.querySelector('.filter-year');
    const modificationInputs = modifMenu.querySelectorAll('.content__modification-other input');
    dropdownModif.addEventListener('click', function () {
        const selectedModification = this.querySelector('.content__modification-text').textContent.trim();
        
        filterModifDiv.textContent = selectedModification;

    });



    // Находим все чекбоксы
const checkboxes = document.querySelectorAll('.checkbox-group__check');

// Находим элемент, куда будем выводить количество выбранных чекбоксов
const selectedCountElem = document.querySelector('.filter-option');

// Функция для обновления количества выбранных чекбоксов
function updateSelectedCount() {
    let selectedCount = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedCount++;
        }
    });

    selectedCountElem.textContent = selectedCount;
}

// Вызываем функцию для обновления количества при загрузке страницы
updateSelectedCount();

// Добавляем обработчик события на изменение состояния чекбоксов
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedCount);
});




});






