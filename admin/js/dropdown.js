document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('.dropdown__toggle');
  const saveBtn = document.getElementById('saveBtn');
  const saveTime = document.getElementById('saveTime');


  dropdownToggles.forEach(function (dropdownToggle) {
    const dropdownMenu = dropdownToggle.nextElementSibling;
    dropdownToggle.addEventListener('click', function (event) {
      event.preventDefault();
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';

      const caretIcon = this.querySelector('.dropdown__caret-icon');
      if (caretIcon) {
        caretIcon.classList.toggle('rotate-180');
      }
    });

    const dropdownItems = dropdownMenu.querySelectorAll('.choose-item');
    dropdownItems.forEach(function (item) {
      item.addEventListener('click', function () {
        const inputStatus = item.querySelector('input[type="radio"]');

        if (inputStatus) {
          inputStatus.checked = true;

          const selected = dropdownToggle.querySelector('.dropdown__drop-text');

          dropdownMenu.style.display = 'none';

          const caretIcon = dropdownToggle.querySelector('.dropdown__caret-icon');
          if (caretIcon) {
            caretIcon.classList.remove('rotate-180');
          }
          switch (inputStatus.id) {
            case 'progress':
              selected.innerHTML = '<div class="choose-tag choose-tag--progress"><div class="choose-tag__text">В работе</div><div class="choose-tag__icon choose-tag__icon--progress icon-close"></div></div>';
              break;
            case 'done':
              selected.innerHTML = '<div class="choose-tag choose-tag--done"><div class="choose-tag__text">Завершенное</div><div class="choose-tag__icon choose-tag__icon--done icon-close"></div></div>';

              break;
            case 'archive':
              selected.innerHTML = '<div class="choose-tag choose-tag--archive"><div class="choose-tag__text">В архиве</div><div class="choose-tag__icon choose-tag__icon--archive icon-close"></div></div>';

              break;
            case 'new':
              selected.innerHTML = '<div class="choose-tag choose-tag--new"><div class="choose-tag__text">Новое</div><div class="choose-tag__icon choose-tag__icon--new icon-close"></div></div>';
              break;

            case 'accepted':
              selected.innerHTML = '<div class="choose-tag choose-tag--done"><div class="choose-tag__text">Одобрено</div><div class="choose-tag__icon choose-tag__icon--done icon-close"></div></div>';

              break;
            case 'denied':
              selected.innerHTML = '<div class="choose-tag choose-tag--archive"><div class="choose-tag__text">Отказано</div><div class="choose-tag__icon choose-tag__icon--archive icon-close"></div></div>';

              break;
            case 'sent':
              selected.innerHTML = '<div class="choose-tag choose-tag--progress"><div class="choose-tag__text">Отправлено</div><div class="choose-tag__icon choose-tag__icon--progress icon-close"></div></div>';
              break;



          }

          // Добавляем обработчик на крестик
          const closeIcon = selected.querySelector('.choose-tag__icon');
          if (closeIcon) {
            closeIcon.addEventListener('click', function (event) {
              event.stopPropagation();
              resetDropdown();
            });
          }

          function resetDropdown() {
            selected.innerHTML = '<div class="dropdown__status-text">Статус объявления</div>';
            const radioButtons = document.querySelectorAll('input[name="radios"]');
            radioButtons.forEach(radio => radio.checked = false);
            dropdownMenu.style.display = 'none';

            const caretIcon = dropdownToggle.querySelector('.dropdown__caret-icon');
            if (caretIcon) {
              caretIcon.classList.remove('rotate-180');
            }
          }

        }




      });
    });

    const dropdownLang = dropdownMenu.querySelectorAll('.choose-element');
    if (dropdownLang) {
      dropdownLang.forEach(function (item) {
        item.addEventListener('click', function () {
          const inputSt = item.querySelector('input[type="radio"]');
  
          if (inputSt && inputSt.checked) {
            const inputId = inputSt.id;
            const selectedLang = document.querySelector('label[for="' + inputId + '"]').textContent;
            
            const langElement = dropdownToggle.querySelector('.choose');
            langElement.textContent = selectedLang.trim();

            function toggleAdditionalBlock(inputId) {
              const addblock = document.querySelector('#date-time-block');
              switch (inputSt.id) {
                case 'queue':
                  addblock.style.display = 'flex';
                  break;
                case 'publish':
                  addblock.style.display = 'none';
                  break;
              }
          }
            inputSt.addEventListener('change', toggleAdditionalBlock(inputId));

            const dropdownMenu = item.closest('.dropdown').querySelector('.dropdown__menu');
            dropdownMenu.style.display = 'none';
            const caretIcon = dropdownToggle.querySelector('.dropdown__caret-icon');
            if (caretIcon) {
              caretIcon.classList.remove('rotate-180');
            }
          }
        });
      });
    }




    document.addEventListener('click', function (event) {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';

        const caretIcon = dropdownToggle.querySelector('.dropdown__caret-icon');
        if (caretIcon) {
          caretIcon.classList.remove('rotate-180');
        }
      }
    });

    if (saveBtn) {
      saveBtn.addEventListener('click', function () {
        dropdownMenu.style.display = 'none';

        const caretIcon = dropdownToggle.querySelector('.dropdown__caret-icon');
        if (caretIcon) {
          caretIcon.classList.remove('rotate-180');
        }
      });
    }
    if (saveTime) {
      saveTime.addEventListener('click', function () {
        dropdownMenu.style.display = 'none';

        const caretIcon = dropdownToggle.querySelector('.dropdown__caret-icon');
        if (caretIcon) {
          caretIcon.classList.remove('rotate-180');
        }
      });
    }





  });
});
