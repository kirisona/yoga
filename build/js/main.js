const menu = document.querySelector(".menu");
const menuList = document.querySelector(".header__list");
const menuItems = document.querySelectorAll(".header__item");
const submitForm = document.getElementById("submit");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const buttons = document.querySelectorAll('.shop__btn');
let shopTitle = document.querySelectorAll('.shop__title');

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

submitForm.addEventListener("click", submiting);

function submiting(event) {
  event.preventDefault();

  if (name.oninvalid && phone.oninvalid) {
    submitForm.removeEventListener("click", submiting);
    alert('Sorry, try again.')
  } else {
    alert(
      "Thank you for your order. Our consultant will contact you within two hours."
    );
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseover', function(event) {
    for (j = 0; j < shopTitle.length; j++) {
      if (i === j) {
        shopTitle[j].style.backgroundColor = '#848dd6';
      }
    }
  });
  buttons[i].addEventListener('mouseout', function(event) {
    for (j = 0; j < shopTitle.length; j++) {
      if (i === j) {
        shopTitle[j].style.backgroundColor = '#5b6ceb';
      }
    }
  });
}

(function ($) {
  "use strict";
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinity: true,
    autoplay: true,
    speed: 1700
});


$('.slider--big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinity: true,
  asNavFor: '.slider-small'
});

$('.slider-small').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  infinity: true,
  asNavFor: '.slider--big'
});
})(jQuery);
