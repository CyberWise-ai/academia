const hamburger = document.querySelector('.navegacion .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.navegacion .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.navegacion .nav-bar .nav-list ul li a');
const navegacion = document.querySelector('.navegacion.contenedor');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		navegacion.style.backgroundColor = '#29323c';
	} else {
		navegacion.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
