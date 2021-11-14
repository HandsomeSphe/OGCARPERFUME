const order__button = document.querySelector(".order");
const order__popup = document.querySelector(".order__popup");
const order__remove = document.querySelector(".fa-times-circle");
const products__button = document.querySelector(".products");
const products__section = document.querySelector("#products");
const actual__nav = document.querySelector(".nav__actual");
const nav__link = document.querySelectorAll(".nav__link");
const logo = document.querySelector(".nav__logo");
const getintouch__button = document.querySelector(".touch");

//logo bringing back to home page
logo.addEventListener("click", function () {
  document.querySelector("#home").scrollIntoView({
    behavior: "smooth",
  });
});
//Smooth scroll navigation
actual__nav.addEventListener("click", function (e) {
  e.preventDefault();
  if ((e.target.contians = "nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

//Show the popup
order__button.addEventListener("click", function () {
  order__popup.style.display = "flex";
});
//Hide the popup
order__remove.addEventListener("click", function () {
  order__popup.style.display = "none";
});
//Slide the product page into view
products__button.addEventListener("click", function () {
  products__section.scrollIntoView({
    behavior: "smooth",
  });
});
getintouch__button.addEventListener("click", function () {
  document.querySelector("#contacts").scrollIntoView({
    behavior: "smooth",
  });
});
