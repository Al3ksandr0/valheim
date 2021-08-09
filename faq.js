	 let body = document.querySelector('body');

	   body.classList.add('touch');
		let arrow = document.querySelectorAll('.arrow'); 
		for( i = 0; i < arrow.length; i++) {
			let subMenu = arrow[i].nextElementSibling;
			let thisArrow = arrow[i];

			arrow[i].addEventListener('click', function(){
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			});
		}



		body.classList.add('touch');
		let menuLink = document.querySelectorAll('.menu__link'); 
		for( i = 0; i < menuLink.length; i++) {

			let subMenu = menuLink[i].nextElementSibling.nextElementSibling;
			console.log(subMenu);

			let thisArrow = menuLink[i].nextElementSibling;

			menuLink[i].addEventListener('click', function(){
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');

			});
		}

