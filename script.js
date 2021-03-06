const order__button = document.querySelector(".order");
const order__popup = document.querySelector(".order__popup");
const order__remove = document.querySelector("#removepopup");
const products__button = document.querySelector(".products");
const products__section = document.querySelector("#products");
const actual__nav = document.querySelector(".nav__actual");
const nav__link = document.querySelectorAll(".nav__link");
const logo = document.querySelector(".nav__logo");
const getintouch__button = document.querySelector(".touch");
const header = document.querySelector(".header");
const scrollnavbar = document.querySelector("#scrollbar");
const menu_smallscreen = document.querySelector(".menubar");
const burger_icon = document.querySelector(".burger_icon");
const burger_icon_actual = document.querySelector("#burger1");
const remove_smallscreen_menu = document.querySelector("#removemenu");
const whole_website = document.querySelector(".main");
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
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
scrollnavbar.addEventListener("click", function (e) {
  e.preventDefault();
  if ((e.target.contians = "nav__link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
//Sticky Navigation bar
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    scrollnavbar.classList.remove("reveal");
  } else {
    scrollnavbar.classList.add("reveal");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);
//Menu small screens
// burger_icon.addEventListener("click", function () {
//   menu_smallscreen.style.display = "flex";
// });
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

//Sending orders
const order__type = document.querySelector("#name");
const order__email = document.querySelector("#orderemail");
const order = document.querySelector("#actualorder");
const order__submit__button = document.querySelector(".popup__submit");

function sendMail(e) {
  e.preventDefault();
  if (
    order__type.value.length > 0 &&
    order__email.value.length > 0 &&
    order.value.length > 0
  ) {
    var tempParams = {
      to_name: order__type.value,
      from_name: order__email.value,
      message: order.value,
    };
    console.log(
      `${tempParams.from_name}, ${tempParams.to_name}, ${tempParams.message}`
    );
    emailjs
      .send("service_aywm2sn", "template_o1r2iys", tempParams)
      .then(function (res) {
        console.log("sucess", res.status);
      });
    setTimeout(function () {
      order__type.value = "";
      order__email.value = "";
      order.value = "";
      order__submit__button.textContent = "succesful";
      order__submit__button.style.backgroundColor = "green";
      setTimeout(function () {
        order__submit__button.textContent = "SUBMIT";
        order__submit__button.style.backgroundColor = "#c7a92d";
      }, 2000);
    }, 1500);
  } else {
    order__type.focus();
  }
}
order__submit__button.addEventListener("click", sendMail);

//Sending Emails
const user_name = document.querySelector(".name");
const user__email = document.querySelector(".email");
const user_message = document.querySelector("#mssg");
const user__submit = document.querySelector(".submit__form");
function sendContactMail(e) {
  e.preventDefault();
  if (
    user_name.value.length > 0 &&
    user__email.value.length > 0 &&
    user_message.value.length > 0
  ) {
    var tempParams = {
      to_name: user_name.value,
      from_name: user__email.value,
      message: user_message.value,
    };
    console.log(
      `${tempParams.from_name}, ${tempParams.to_name}, ${tempParams.message}`
    );
    emailjs
      .send("service_aywm2sn", "template_wfqhcq3", tempParams)
      .then(function (res) {
        console.log("sucess", res.status);
      });
    setTimeout(function () {
      user_name.value = "";
      user__email.value = "";
      user_message.value = "";
      user__submit.textContent = "succesful";
      user__submit.style.backgroundColor = "green";
      setTimeout(function () {
        user__submit.textContent = "SUBMIT";
        user__submit.style.backgroundColor = "#c7a92d";
      }, 2000);
    }, 1500);
  } else {
    user_name.focus();
  }
}
user__submit.addEventListener("click", sendContactMail);
//small screen menu
burger_icon.addEventListener("click", function () {
  menu_smallscreen.style.display = "block";
  whole_website.style.display = "none";
  header.style.display = "none";
});
burger_icon_actual.addEventListener("click", function () {
  menu_smallscreen.style.display = "block";
  whole_website.style.display = "none";
  header.style.display = "none";
});
remove_smallscreen_menu.addEventListener("click", function () {
  menu_smallscreen.style.display = "none";
  whole_website.style.display = "block";
  header.style.display = "block";
});
//last smooth scroll for small screens
document
  .querySelector(".unorder__list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if ((e.target.contians = "unorder__list--link")) {
      menu_smallscreen.style.display = "none";
      whole_website.style.display = "block";
      header.style.display = "block";
      const page = e.target.getAttribute("href");
      document.querySelector(page).scrollIntoView({
        behavior: "smooth",
      });
    }
    // e.stopPropagation();
  });
