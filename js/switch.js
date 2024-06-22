document.addEventListener('DOMContentLoaded', () => {
  const mainToggle = document.getElementById('toggle1');
  const dependentTogglesContainer = document.querySelector('.notif__option-list');
  const dependentToggles = dependentTogglesContainer.querySelectorAll('.switch');

  function updateDependentToggles() {
      dependentToggles.forEach(toggle => {
          toggle.disabled = !mainToggle.checked;
          if (!mainToggle.checked) {
              toggle.checked = false;
          }
      });
  }


  updateDependentToggles();


  mainToggle.addEventListener('change', updateDependentToggles);
});
