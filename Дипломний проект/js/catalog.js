//Меню
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


//Кнопка сортировки товаров

const mainSort = document.querySelector('.main__sort');
const sort = document.querySelector('.sort');

//Событие выпадает-исчезает список 
mainSort.addEventListener('click', function (e) {
	e.stopPropagation();
	if (sort.style.display === 'none' || sort.style.display === '') {
		sort.style.display = 'flex';
		e.stopPropagation();
	} else if (sort.style.display === 'flex') {
		sort.style.display = 'none';
		e.stopPropagation();
	}
});
// Событие клик на пункте списка
const sortElem = document.querySelectorAll('.sort__item');
let sortText;
for (let i = 0; i < sortElem.length; i++) {
	sortElem[i].addEventListener('click', function () {
		sortText = sortElem[i].innerHTML;
		mainSort.firstElementChild.innerText = sortText;
	});
}
//Событие, когда курсор покидает пределы меню сортировки
mainSort.addEventListener('mouseleave', function () {
	sort.style.display = 'none';
});

//Смена цвета при клике на header__category

const boardLi = document.querySelectorAll('.board__li');
for (let i = 0; i < boardLi.length; i++) {
	boardLi[i].addEventListener('click', function () {
		boardLi[i].classList.toggle('li__chosen');
	});
}



