const rangeInput = document.querySelectorAll(".range-input input");
const range = document.querySelector(".slider-range .progress");

const minimun = document.querySelector(".price-min");
const maximum = document.querySelector(".price-max");
let priceGap = 1000;

function formatNumberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function updateRangeDisplay() {
  let minVal = parseInt(rangeInput[0].value);
  let maxVal = parseInt(rangeInput[1].value);

  minimun.textContent = formatNumberWithSpaces(minVal);
  maximum.textContent = formatNumberWithSpaces(maxVal);
}

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.classList.contains("range-min")) {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    }

    range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

    updateRangeDisplay();
  });
});

// Инициализация отображаемого диапазона при загрузке страницы
updateRangeDisplay();
