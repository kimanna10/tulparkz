document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('lineChart').getContext('2d');
    const tooltipEl = document.getElementById('tooltip');
    const chartContainer = document.getElementById('chart-container');

    const data = {
        labels: ['3.03', '4.03', '5.03', '6.03', '7.03', '8.03', '9.03'],
        datasets: [
            {
                label: 'Просмотры',
                data: [10, 12, 8, 29, 20, 25, 30],
                borderColor: 'rgba(114, 168, 230, 1)',
                borderWidth: 3,
                fill: false,
                tension: 0.4,
                pointRadius: 0, // Скрыть точки по умолчанию
                pointHoverRadius: 7, // Показать точки при наведении
                pointBackgroundColor: 'rgba(114, 168, 230, 1)', // Цвет точки при наведении
                pointHoverBackgroundColor: 'rgba(114, 168, 230, 1)', // Цвет точки при наведении
                pointBorderWidth: 1,
                pointBorderColor: 'rgba(114, 168, 230, 1)'
            },
            {
                label: 'Отклики',
                data: [5, 9, 1, 6, 10, 15, 14, 13, 30],
                borderColor: 'rgba(255, 155, 1, 1)',
                borderWidth: 3,
                fill: false,
                tension: 0.4,
                pointRadius: 0, // Скрыть точки по умолчанию
                pointHoverRadius: 7, // Показать точки при наведении
                pointBackgroundColor: 'rgba(255, 155, 1, 1)', // Цвет точки при наведении
                pointHoverBackgroundColor: 'rgba(255, 155, 1, 1)',
                pointBorderWidth: 1,
                pointBorderColor: 'rgba(255, 155, 1, 1)'
            }
        ]
    };

    const verticalLinePlugin = {
        id: 'verticalLine',
        afterDraw: function (chart) {
            if (chart.tooltip._active && chart.tooltip._active.length) {
                const activePoint = chart.tooltip._active[0];
                const ctx = chart.ctx;
                const x = activePoint.element.x;
                const y = activePoint.element.y;
                const bottomY = chart.scales.y.bottom;
                const datasetIndex = activePoint.datasetIndex;
                const datasetLabel = chart.data.datasets[datasetIndex].label;


                // Установка цвета линии в зависимости от активного набора данных
                let lineColor;
                if (datasetLabel === 'Просмотры') {
                    lineColor = 'rgba(114, 168, 230, 1)'; // Цвет для 'Просмотры'
                } else if (datasetLabel === 'Отклики') {
                    lineColor = 'rgba(255, 155, 1, 1)'; // Цвет для 'Отклики'
                }

                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, bottomY);
                ctx.lineWidth = 1;
                ctx.strokeStyle = lineColor;
                ctx.setLineDash([11, 11]);
                ctx.stroke();
                ctx.restore();
            }
        }
    };

    const legendPaddingBottomPlugin = {
        id: 'legendPaddingBottomPlugin',
        beforeInit(chart) {
            const originalFit = chart.legend.fit;
        
            chart.legend.fit = function fit() {
              originalFit.bind(chart.legend)();
              this.height += 25;
            }
          }
    };
    



    
    const options = {
        responsive: true,
        elements: {
            point: {
                pointStyle: 'circle'
            }
        },
        plugins: {
            legend: {
                display: true, // Показывать легенду
                position: 'top', // Положение: 'top', 'bottom', 'left', 'right'
                align: 'start',
                labels: {
                    usePointStyle: true,
                    color: '#070C2B', // Цвет текста
                    font: {
                        size: 14, // Размер шрифта
                        family: "'Roboto', sans-serif",
                        weight: '400' // Жирность шрифта
                    },
                    boxWidth: 10, // Ширина квадрата в легенде
                    boxHeight: 10, // Высота квадрата в легенде
                    padding: 15
                }
            },
            tooltip: {
                enabled: false,
                mode: 'point',
                intersect: true,
                external: function (context) {
                    // Получение элемента для кастомной подсказки

                    // Если нет данных, скрываем подсказку
                    if (context.tooltip.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Настройка содержимого подсказки
                    const tooltipModel = context.tooltip;
                    const data = tooltipModel.dataPoints[0];
                    const value = data.raw;

                    if (data.dataset.label === 'Просмотры') {
                        tooltipText = `<div class="chart__icon icon-show"></div><div class="chart__text">${value}</div>`;
                    } else if (data.dataset.label === 'Отклики') {
                        tooltipText = `<div class="chart__icon icon-circle-check1"></div><div class="chart__text">${value}</div>`;
                    }

                    // Обновление содержимого и стилей кастомной подсказки
                    tooltipEl.innerHTML = tooltipText;
                    tooltipEl.style.opacity = 1;

                    updateTooltipPosition(tooltipModel);

                }
            }
        },
        interaction: {
            mode: 'point',
            intersect: true,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: false
                },
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    color: '#070C2B',
                    font: {
                        size: 16,
                        family: "'Roboto', sans-serif",
                        weight: 400
                    },
                    padding: 24,
                    stepSize: 12
                },
                offset: true
            },
            y: {
                display: true,
                title: {
                    display: false
                },
                grid: {
                    lineWidth: 1,
                    color: 'rgba(209, 212, 219, 1)',
                    borderDash: [10, 10],
                    drawBorder: false
                },
                ticks: {
                    color: '#070C2B',
                    font: {
                        size: 16,
                        family: "'Roboto', sans-serif",
                        weight: 400
                    },
                    padding: 15,
                    stepSize: 10
                },
                suggestedMin: 0,
                suggestedMax: 40
            }
        },
        onHover: function (event, chartElements) {
            if (chartElements.length) {
                chartContainer.style.cursor = 'pointer';
            } else {
                chartContainer.style.cursor = 'default';
            }
        }
    };

    new Chart(ctx, {
        type: 'line',
        data: data,
        options: options,
        plugins: [verticalLinePlugin, legendPaddingBottomPlugin]
    });


    const updateTooltipPosition = (tooltipModel) => {
        const canvasRect = ctx.canvas.getBoundingClientRect();
        const tooltipWidth = tooltipEl.offsetWidth;
        const tooltipHeight = tooltipEl.offsetHeight;

        let tooltipX = tooltipModel.caretX - (tooltipWidth / 2);
        let tooltipY = tooltipModel.caretY - tooltipHeight - 15;



        tooltipEl.style.left = `${tooltipX}px`;
        tooltipEl.style.top = `${tooltipY}px`;
    };





    document.addEventListener('scroll', () => {
        // Убедитесь, что tooltipEl видим
        if (tooltipEl.style.opacity > 0) {
            const tooltipModel = chart.tooltip;
            if (tooltipModel && tooltipModel.opacity > 0) {
                updateTooltipPosition(tooltipModel);
            }
        }
    });

    window.addEventListener('resize', () => {
        // Убедитесь, что tooltipEl видим
        if (tooltipEl.style.opacity > 0) {
            const tooltipModel = chart.tooltip;
            if (tooltipModel && tooltipModel.opacity > 0) {
                updateTooltipPosition(tooltipModel);
            }
        }
    });


});
