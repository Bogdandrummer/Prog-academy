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
