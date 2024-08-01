$(document).ready(function() {
    const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
    const minutes = ['00', '30'];
    let currentHourIndex = hours.indexOf('13'); // Начальный час
    let currentMinuteIndex = minutes.indexOf('00'); // Начальная минута

    function updateTime() {
        // Учитываем изменения минут для расчета предыдущего и следующего времени
        const prevMinuteIndex = (currentMinuteIndex - 1 + minutes.length) % minutes.length;
        const nextMinuteIndex = (currentMinuteIndex + 1) % minutes.length;

        const prevHourIndex = (currentMinuteIndex === 0 ? (currentHourIndex - 1 + hours.length) % hours.length : currentHourIndex);
        const nextHourIndex = (currentMinuteIndex === minutes.length - 1 ? (currentHourIndex + 1) % hours.length : currentHourIndex);

        const prevHour = hours[prevHourIndex];
        const currentHour = hours[currentHourIndex];
        const nextHour = hours[nextHourIndex];

        const prevMinute = minutes[prevMinuteIndex];
        const currentMinute = minutes[currentMinuteIndex];
        const nextMinute = minutes[nextMinuteIndex];

        // Обновляем отображение
        $('.custom-time__time-item.prev .custom-time__hour').text(prevHour);
        $('.custom-time__time-item.current .custom-time__hour').text(currentHour);
        $('.custom-time__time-item.next .custom-time__hour').text(nextHour);

        $('.custom-time__time-item.prev .custom-time__minute').text(prevMinute);
        $('.custom-time__time-item.current .custom-time__minute').text(currentMinute);
        $('.custom-time__time-item.next .custom-time__minute').text(nextMinute);
    }

    function scrollTime(direction) {
        if (direction === 'up') {
            // Уменьшение времени
            if (currentMinuteIndex === 0) {
                currentMinuteIndex = minutes.length - 1;
                currentHourIndex = (currentHourIndex - 1 + hours.length) % hours.length;
            } else {
                currentMinuteIndex = (currentMinuteIndex - 1 + minutes.length) % minutes.length;
            }
        } else if (direction === 'down') {
            // Увеличение времени
            if (currentMinuteIndex === minutes.length - 1) {
                currentMinuteIndex = 0;
                currentHourIndex = (currentHourIndex + 1) % hours.length;
            } else {
                currentMinuteIndex = (currentMinuteIndex + 1) % minutes.length;
            }
        }

        updateTime();
    }

    $('.custom-time__up').on('click', function() {
        scrollTime('up'); // Уменьшение времени при нажатии "up"
    });

    $('.custom-time__down').on('click', function() {
        scrollTime('down'); // Увеличение времени при нажатии "down"
    });



    $('.custom-time__save').on('click', function() {
        const selectedHour = hours[currentHourIndex];
        const selectedMinute = minutes[currentMinuteIndex];
        const selectedTime = `${selectedHour}:${selectedMinute}`;

        // Обновляем текст в дропдауне
        $('.time-pick').text(selectedTime);

    });

    updateTime(); // Инициализируем отображение
});
