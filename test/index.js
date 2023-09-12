const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");

const progress = document.querySelector(".slider .progress");

let priceGap = 100;
//Получение двух значений, когда двигаем ползунок и конвертируем в числовое значение
rangeInput.forEach(input => {
	input.addEventListener("input", e => {
		let minVal = parseInt(rangeInput[0].value);
		let maxVal = parseInt(rangeInput[1].value);

		//Убираем линию прогресса при передвижении ползунка
		if (maxVal - minVal < priceGap) {
			if (e.target.className === "range-min") {  //Если активен слайдер
				rangeInput[0].value = maxVal - priceGap;
			} else {
				rangeInput[1].value = minVal + priceGap;
			}
		} else {
			priceInput[0].value = minVal;
			priceInput[1].value = maxVal;
			progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
			progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
		}
	});
});


//Изменение полосы прогресса после ввода числового значения
priceInput.forEach(input => {
	input.addEventListener("input", e => {
		let minVal = parseInt(priceInput[0].value);
		let maxVal = parseInt(priceInput[1].value);

		if (maxVal - minVal >= priceGap) {
			if (e.target.className === "input-min") {  //Если активен слайдер
				rangeInput[0].value = minVal;
				progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
			} else {
				rangeInput[1].value = maxVal;
				progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
			}
		}
	});
});
