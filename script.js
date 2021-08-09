"use strict"
// ---Проверка устройств---
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/iPhone|iPad iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
// ---Нажатие---
if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu-arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');

	let menuArrows = document.querySelectorAll('.menu-arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
}
//---Прокрутка при клике---
const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains("_active")) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
const menuLinksTwo = document.querySelectorAll('.menu-sub_link[data-goto]');
if (menuLinksTwo.length > 0) {
	menuLinksTwo.forEach(menuLinkTwo => {
		menuLinkTwo.addEventListener("click", onMenuLinkClickTwo);
	});

	function onMenuLinkClickTwo(e) {
		const menuLinkTwo = e.target;
		if (menuLinkTwo.dataset.goto && document.querySelector(menuLinkTwo.dataset.goto)) {
			const gotoBlockTwo = document.querySelector(menuLinkTwo.dataset.goto);
			const gotoBlockValueTwo = gotoBlockTwo.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains("_active")) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}


			window.scrollTo({
				top: gotoBlockValueTwo,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
//---Меню бургер---
const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');
const menuList = document.querySelector('.menu-list');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		menuList.classList.toggle('_active');
	});
}