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

const sliderLine = document.querySelector('.slider__line');
const buketItem = document.querySelectorAll('.buket__item');
const prevBtn = document.querySelector('.prev__arrow');
const nextBtn = document.querySelector('.next__arrow');
let offset = 0;

//Кнопка Next
nextBtn.addEventListener('click', function () {
	let wdt = document.querySelector('.buket__item').getBoundingClientRect().width + 30;
	let mWdt = document.querySelector('.content').getBoundingClientRect().width;
	console.log(mWdt);

	offset += wdt;

	if (offset > wdt * 2) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';
});
//Кнопка Prev
prevBtn.addEventListener('click', function () {
	let wdt = document.querySelector('.buket__item').getBoundingClientRect().width + 30;
	let mWdt = document.querySelector('.content').getBoundingClientRect().width;
	offset -= wdt;
	if (offset < 0) {
		offset = wdt * 2;
	}
	sliderLine.style.left = -offset + 'px';
});


