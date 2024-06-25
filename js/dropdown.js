document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('#dropdownToggle');
  

  dropdownToggles.forEach(function (dropdownToggle) {
    const dropdownMenu = dropdownToggle.nextElementSibling;

    dropdownToggle.addEventListener('click', function (event) {
      event.preventDefault();
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';

      const yearIcon = this.querySelector('.content__caret-icon');
      if (yearIcon) {
        yearIcon.classList.toggle('rotate-180');
      }
    });

    const dropdownItems = dropdownMenu.querySelectorAll('.choose-item');
    dropdownItems.forEach(function (item) {
      item.addEventListener('click', function () {
        const selectedYear = this.textContent.trim();
        const filterYearDiv = dropdownToggle.querySelector('.filter-year');
        filterYearDiv.textContent = selectedYear;
        dropdownMenu.style.display = 'none';

        const yearIcon = dropdownToggle.querySelector('.content__caret-icon');
        if (yearIcon) {
          yearIcon.classList.remove('rotate-180');
        }
      });
    });


    const dropdownGen = document.querySelectorAll('.content__gen-dropdown-item');
    const filterGen = document.querySelector('.filter-gen');

    dropdownGen.forEach(item => {
        item.addEventListener('click', function () {
            const genInfoTop = this.querySelector('.content__gen-info-top').cloneNode(true);
            filterGen.innerHTML = '';
            filterGen.appendChild(genInfoTop);
            dropdownMenu.style.display = 'none';
        });
    });

    document.addEventListener('click', function (event) {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';

        const yearIcon = dropdownToggle.querySelector('.content__caret-icon');
        if (yearIcon) {
          yearIcon.classList.remove('rotate-180');
        }
      }
    });



  });
});
