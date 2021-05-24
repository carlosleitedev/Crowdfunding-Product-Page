const menu = document.querySelector('.hamburger-menu');

menu.addEventListener('click', () => {
	const nav = document.querySelector('.navigation-container');
	menu.classList.toggle('not-display');
	nav.classList.toggle('display');
});
