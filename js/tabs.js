document.addEventListener('DOMContentLoaded', function() {
// Основные вкладки
const tabs = document.querySelectorAll('.tab-input');
const tabContents = document.querySelectorAll('.tab-content');

// Добавляем обработчик событий на изменение состояния основной вкладки
tabs.forEach(tab => {
  tab.addEventListener('change', function() {
    // Скрываем все содержимое вкладок
    tabContents.forEach(content => {
      content.classList.remove('active');
    });

    // Находим и показываем активное содержимое вкладки
    const selectedTabId = this.id.replace('tab', 'content');
    const selectedTabContent = document.getElementById(selectedTabId);
    selectedTabContent.classList.add('active');
  });
});

// Внутренние вкладки в content2
const innerTabs = document.querySelectorAll('.tab-auto-input');
const innerTabContents = document.querySelectorAll('#content2 .tab-auto-content');

innerTabs.forEach(tabAuto => {
  tabAuto.addEventListener('change', function() {
        innerTabContents.forEach(contentAuto => {
          contentAuto.classList.remove('active');
        });

        const selectedTabId = this.id.replace('tab-auto', 'content-auto');
        const selectedTabContent = document.getElementById(selectedTabId);
        selectedTabContent.classList.add('active');
    });
});




  const headerTitle = document.querySelector('.header__title');
  
  if (headerTitle) {

      function updateTabContent(content) {
          if (headerTitle) {
            headerTitle.innerHTML = `<p>${content}</p>`;
          }
      }


      const tabInputs = document.querySelectorAll('.tab-input');
      tabInputs.forEach(input => {
          input.addEventListener('change', function() {
              if (input.checked) {
                  let content = '';
                  switch (input.id) {
                      case 'tab1':
                          content = 'Личный профиль';
                          break;
                      case 'tab2':
                          content = 'Мой гараж';
                          break;
                      case 'tab3':
                          content = 'Мои объявления';
                          break;
                      case 'tab4':
                          content = 'Мой город';
                          break;
                      case 'tab5':
                          content = 'Язык сайта';
                          break;
                      case 'tab6':
                          content = 'Уведомления';
                          break;
                      case 'tab7':
                          content = 'Помощь';
                          break;
                      default:
                          content = 'Здесь будет изменяться текст в зависимости от выбранного таба';
                  }
                  updateTabContent(content);
              }
          });
      });
  }
});


