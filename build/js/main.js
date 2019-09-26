const menu = document.querySelector(".menu");
const menuList = document.querySelector(".header__list");
const menuItems = document.querySelectorAll(".header__item");
const submitForm = document.getElementById("submit");
const name = document.getElementById("name");
const phone = document.getElementById("phone");

menu.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  menuList.classList.toggle("active");
}

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", toggleMenu);
}

name.oninvalid = function(event) {
  event.target.setCustomValidity("Name should only contain letters. e.g. John");
};

phone.oninvalid = function(event) {
  event.target.setCustomValidity(
    "Phonenumber should only contain numbers. e.g. 380999999999"
  );
};

submitForm.addEventListener('click', function(event) {
  event.preventDefault();

  alert("Thank you for your order. Our consultant will contact you within two hours.")
})
