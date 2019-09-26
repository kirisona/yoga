const menu = document.querySelector('.menu');
const menuList = document.querySelector('.header__list');
const menuItems = document.querySelectorAll('.header__item');

menu.addEventListener('click', toggleMenu);

function toggleMenu(event) {
  menuList.classList.toggle('active');
}

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', toggleMenu);
}
