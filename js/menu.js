const menu = document.querySelector('.header__menu-btn');
const popup = document.querySelector('.popup');
const elements = document.querySelector('.nav__list').cloneNode(true);


menu.addEventListener('click', function(e) {
  e.preventDefault();

  menu.classList.toggle('active');
  popup.classList.toggle('open');
  menuItems();
})

function menuItems() {
  popup.appendChild(elements);
}