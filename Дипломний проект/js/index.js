const catalog = document.getElementById('catalog');
const subMenu = document.querySelector('.sub__menu');

//Открытие / закрытие меню Каталог
catalog.addEventListener('click', function () {
	if (subMenu.style.display === "") {
		subMenu.style.display = "block";
	} else if (subMenu.style.display = "block") { subMenu.style.display = ""; }
});

//Бургер-меню
const burger = document.getElementById('burger');
const menuList = document.querySelector('.menu__list');
const headerAddress = document.querySelector('.header__address');
//Открытие и закрытие меню
burger.addEventListener('click', function (e) {
	e.stopPropagation();
	if (menuList.style.display === "" || menuList.style.display === "none") {
		menuList.style.display = "flex";
	} else if (menuList.style.display === "flex") {
		menuList.style.display = '';
	}

	if (headerAddress.style.display === '') {
		headerAddress.style.display = 'block';
	} else if (headerAddress.style.display === 'block') {
		headerAddress.style.display = '';
	}
});

//Закрытие меню когда курсор покидает пределы меню
menuList.addEventListener('mouseleave', function () {
	const documentWidth = document.body.clientWidth;
	if (menuList.style.display === "flex" || documentWidth <= '997') {
		menuList.style.display = "";
		subMenu.style.display = "";
		headerAddress.style.display = "";
	}
});

subMenu.addEventListener('mouseleave', function () {
	if (subMenu.style.display = "block") {
		subMenu.style.display = "";
	}
});

// Слайдер Buket 
const slider = document.getElementById('buket__slides');
const sliderLine = document.getElementById('slider__line');
const buketItem = document.querySelectorAll('.buket__item');
const prevBtn = document.querySelector('.prev__arrow');
const nextBtn = document.querySelector('.next__arrow');
let offset = 0;
let gap;
let bodyWidth = document.documentElement.clientWidth;

//Проверка шинины документа и присвоение свойства gap для слайдера
if (bodyWidth > 997) {
	gap = 30;
}
if (bodyWidth < 998) {
	gap = 20;
} else
	if (bodyWidth < 668) {
		gap = 18;
	}


//Кнопка Next
nextBtn.addEventListener('click', function () {
	let wdt = document.querySelector('.buket__item').getBoundingClientRect().width + gap;
	/*let mWdt = document.querySelector('.content').getBoundingClientRect().width;*/ 	/*Ширина контента*/
	let rest = wdt * 2;
	//Длина ленты слайдов
	let sln = Array.from(sliderLine.children);
	let lgtSlide = sln.length * wdt;
	let diff = lgtSlide - offset;
	offset += wdt;

	if (offset > diff + wdt) {
		offset = 0;
	}

	sliderLine.style.left = -offset + 'px';
});
//Кнопка Prev
prevBtn.addEventListener('click', function () {
	let wdt = document.querySelector('.buket__item').getBoundingClientRect().width + gap;
	/*let mWdt = document.querySelector('.content').getBoundingClientRect().width;*/ 	/*Ширина контента*/
	let rest = wdt * 2;
	//Длина ленты слайдов
	let sln = Array.from(sliderLine.children);
	let lgtSlide = sln.length * wdt;
	let diff = lgtSlide - offset;
	offset -= wdt;
	if (offset <= 0) {
		offset = lgtSlide - wdt * 3;
	}
	sliderLine.style.left = -offset + 'px';
});



