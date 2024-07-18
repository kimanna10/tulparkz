
document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("custom-calendar");

    const currentMonthDisplay = document.getElementById("currentMonth");
    const daysContainer = document.querySelector(".days");
    const weeksContainer = document.querySelector(".weekdays");
    const saveBtn = document.getElementById("saveBtn");
    var filterTitle = document.getElementById("filter-title");

    const datePick = document.querySelector(".date-pick");

    const resetDate = document.getElementById("filter-reset");

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    let selectedStartDate = null;
    let selectedEndDate = null;

    localStorage.clear();
    // Функция сохранения выбранных дат в localStorage
    function saveSelectedDates() {
        localStorage.setItem('selectedStartDate', selectedStartDate ? selectedStartDate.toISOString() : null);
        localStorage.setItem('selectedEndDate', selectedEndDate ? selectedEndDate.toISOString() : null);
    }

    // Функция загрузки выбранных дат из localStorage
    function loadSelectedDates() {
        const startDateString = localStorage.getItem('selectedStartDate');
        const endDateString = localStorage.getItem('selectedEndDate');

        selectedStartDate = startDateString ? new Date(startDateString) : null;
        selectedEndDate = endDateString ? new Date(endDateString) : null;

    }

    // Функция отображения календаря на заданный месяц и год
    // function renderCalendar(year, month) {
    //     daysContainer.innerHTML = "";
    //     weeksContainer.innerHTML = "";

    //     currentMonthDisplay.textContent = `${getMonthName(month)} ${year}`;

    //     const firstDayOfMonth = new Date(year, month, 1).getDay();
    //     const daysInMonth = new Date(year, month + 1, 0).getDate();

    //     const weekdays = ['Вск', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    //     for (let i = 0; i < 7; i++) {
    //         const weekdayElement = document.createElement("div");
    //         weekdayElement.classList.add("week-day");
    //         weekdayElement.textContent = weekdays[i];
    //         weeksContainer.appendChild(weekdayElement);
    //     }

    //     let dayIndex = 1;
    //     for (let i = 0; i < firstDayOfMonth; i++) {
    //         const emptyDayElement = document.createElement("div");
    //         daysContainer.appendChild(emptyDayElement);
    //     }

    //     for (let day = 1; day <= daysInMonth; day++) {
    //         const dayElement = document.createElement("div");
    //         dayElement.classList.add("day");

    //         const dayContainerElement = document.createElement("div");
    //         dayContainerElement.classList.add("day-container");
    //         dayContainerElement.textContent = day; 

    //         dayElement.appendChild(dayContainerElement);



    //         const today = new Date();
    //     if (day === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
    //         dayElement.classList.add("current-day");
    //     }


    //         dayElement.addEventListener("click", function () {
    //             selectDate(year, month, day);
    //         });

    //         dayElement.addEventListener("mouseenter", function () {
    //             if (selectedStartDate && !selectedEndDate) {
    //                 highlightHoverRange(year, month, day);
    //             }
    //         });

    //         daysContainer.appendChild(dayElement);
    //     }

    //     if (currentYear === currentDate.getFullYear() && month === currentDate.getMonth()) {
    //         loadSelectedDates();
    //     } else {
    //         selectedStartDate = null;
    //         selectedEndDate = null;
    //     }

    //     highlightSelectedDates();
    // }

    // Функция отображения календаря на заданный месяц и год
    function renderCalendar(year, month) {
        daysContainer.innerHTML = "";
        weeksContainer.innerHTML = "";

        currentMonthDisplay.textContent = `${getMonthName(month)} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const weekdays = ['Вск', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        for (let i = 0; i < 7; i++) {
            const weekdayElement = document.createElement("div");
            weekdayElement.classList.add("week-day");
            weekdayElement.textContent = weekdays[i];
            weeksContainer.appendChild(weekdayElement);
        }

        let dayIndex = 1;
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDayElement = document.createElement("div");
            daysContainer.appendChild(emptyDayElement);
        }



        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");

            const dayContainerElement = document.createElement("div");
            dayContainerElement.classList.add("day-container");
            dayContainerElement.textContent = day;

            

            const today = new Date();
            if (day === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                dayElement.classList.add("current-day");
            }


            
            if (currentYear === selectedStartDate?.getFullYear() &&
                month === selectedStartDate?.getMonth() &&
                day === selectedStartDate?.getDate()) {
                dayElement.classList.add("selected-start");
            }

            if (selectedEndDate &&
                currentYear === selectedEndDate?.getFullYear() &&
                month === selectedEndDate?.getMonth() &&
                day === selectedEndDate?.getDate()) {
                dayElement.classList.add("selected-end");
            }
            dayElement.appendChild(dayContainerElement);

            dayElement.addEventListener("click", function () {
                selectDate(year, month, day);
            });

            dayElement.addEventListener("mouseenter", function () {
                if (selectedStartDate && !selectedEndDate) {
                    highlightHoverRange(year, month, day);
                }
            });

            daysContainer.appendChild(dayElement);
        }

        highlightSelectedDates();
    }

    




// Функция выбора даты
function selectDate(year, month, day) {
    const selectedDate = new Date(year, month, day);

    if (!selectedStartDate || selectedEndDate) {
        selectedStartDate = selectedDate;
        selectedEndDate = null;
    } else {
        if (selectedDate < selectedStartDate) {
            selectedEndDate = selectedStartDate;
            selectedStartDate = selectedDate;
        } else {
            selectedEndDate = selectedDate;
        }
    }

    if (selectedStartDate && selectedEndDate && selectedStartDate.getTime() === selectedEndDate.getTime()) {
        selectedEndDate = null;
    }

    saveSelectedDates();
    highlightSelectedDates();
}


    // Функция подсветки выбранных дат
    function highlightSelectedDates() {
        const dayElements = daysContainer.querySelectorAll(".day");
        dayElements.forEach(dayElement => {
            dayElement.classList.remove("selected-start", "selected-end", "in-range", "selected-only");
        });
    
        if (!selectedStartDate) return;
    
        const startYear = selectedStartDate.getFullYear();
        const startMonth = selectedStartDate.getMonth();
        const startDay = selectedStartDate.getDate();
    
        let endYear, endMonth, endDay;
        if (selectedEndDate) {
            endYear = selectedEndDate.getFullYear();
            endMonth = selectedEndDate.getMonth();
            endDay = selectedEndDate.getDate();
        } else {
            endYear = startYear;
            endMonth = startMonth;
            endDay = startDay;
        }
    
        for (let i = 0; i < dayElements.length; i++) {
            const day = parseInt(dayElements[i].querySelector(".day-container").textContent);
    
            if (isNaN(day)) continue;
    
            const currentDayDate = new Date(currentYear, currentMonth, day);
    
            if (selectedStartDate && !selectedEndDate && day === startDay && currentMonth === startMonth && currentYear === startYear) {
                dayElements[i].classList.add("selected-only");
            } else if (currentDayDate >= selectedStartDate && currentDayDate <= selectedEndDate) {
                if (day === startDay && currentMonth === startMonth && currentYear === startYear) {
                    dayElements[i].classList.add("selected-start");
                } else if (day === endDay && currentMonth === endMonth && currentYear === endYear) {
                    dayElements[i].classList.add("selected-end");
                } else {
                    dayElements[i].classList.add("in-range");
                }
            }
        }
    }
    





    // Функция подсветки диапазона при наведении
    function highlightHoverRange(year, month, day) {
        const dayElements = daysContainer.querySelectorAll(".day");
        const hoverDate = new Date(year, month, day);

        dayElements.forEach(dayElement => {
            dayElement.classList.remove("in-hover-range");
        });

        const start = selectedStartDate.getDate();
        const end = hoverDate.getDate();

        for (let i = 0; i < dayElements.length; i++) {
            const day = parseInt(dayElements[i].textContent);

            if (isNaN(day)) continue;

            if (day > start && day <= end) {
                dayElements[i].classList.add("in-hover-range");
            }
        }
    }

    // Обработчик кнопки "Предыдущий месяц"
    document.getElementById("prevMonthBtn").addEventListener("click", function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentYear, currentMonth);
    });

    // Обработчик кнопки "Следующий месяц"
    document.getElementById("nextMonthBtn").addEventListener("click", function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }



        renderCalendar(currentYear, currentMonth);
    });

    saveBtn.addEventListener("click", function () {
        saveSelectedDates();
        if (formatDate(selectedEndDate) === '') {
            // filterTitle.textContent = "Входящие объявления";
            datePick.textContent = formatDate(selectedStartDate);
            // filterTitle.textContent = filterTitle.textContent + ' за ' + formatDateNumericMonth(selectedStartDate);
        }
        else {
            // filterTitle.textContent = "Входящие объявления";
            datePick.textContent = formatDate(selectedStartDate) + " — " + formatDate(selectedEndDate);
            // filterTitle.textContent = filterTitle.textContent + ' за период с ' + formatDateNumericMonth(selectedStartDate) + ' по ' + formatDateNumericMonth(selectedEndDate);

        }
    });

    // Обработчик кнопки "Сбросить дату"
    resetDate.addEventListener("click", function () {
        localStorage.clear();
        selectedStartDate = null;
        selectedEndDate = null;
        datePick.textContent = 'Выберите дату';
        renderCalendar(currentYear, currentMonth);
    });


    // Инициализация календаря
    renderCalendar(currentYear, currentMonth);

    // Функция получения названия месяца по индексу
    function getMonthName(monthIndex) {
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        return months[monthIndex];
    }
    function getMonthCon(monthIndex) {
        const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        return months[monthIndex];
    }

    // Функция форматирования даты в строку "день месяц год"
    function formatDate(date) {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        return `${day}.${month}.${year}`;
    }

    function formatDateNumericMonth(date) {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const monthIndex = date.getMonth();
        const monthName = getMonthCon(monthIndex).toLocaleLowerCase();
        const year = date.getFullYear().toString();

        // Убираем ведущий ноль, если он есть
        const dayFormatted = day.startsWith('0') ? day.slice(1) : day;

        return `${dayFormatted} ${monthName} ${year}`;
    }


});
