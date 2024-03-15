const navbar = document.querySelector(".nav2");
const hero = document.querySelector(".hero");

const navLogoutBtn = document.querySelector(".navbar__logout");
const logoutQuestionBox = document.querySelector(".logout__question");
const logoutBtn = document.querySelector(".logout__btn");
const logoutCancelBtn = document.querySelector(".logout__btn__cancel");
const xBtn = document.querySelector(".fa-xmark");

window.addEventListener("scroll", function () {
  navbarFixed();
});

function navbarFixed() {
  if (scrollY > 55) {
    navbar.classList.add("fixed");
    hero.style.paddingTop = "235px";
  } else {
    navbar.classList.remove("fixed");
    hero.style.paddingTop = "150px";
  }
}

let isLogin = localStorage.getItem("token");

function CheckIsLogin() {
  if (!isLogin) {
    window.location.replace("/pages/login.html");
  }
}

CheckIsLogin();

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.open("/pages/login.html", "_self");
});

logoutCancelBtn.addEventListener("click", () => {
  logoutQuestionBox.classList.remove("show__logout__question");
});

xBtn.addEventListener("click", () => {
  logoutQuestionBox.classList.remove("show__logout__question");
});

navLogoutBtn.addEventListener("click", () => {
  logoutQuestionBox.classList.add("show__logout__question");
});
