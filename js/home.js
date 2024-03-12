const navbar = document.querySelector(".nav2");
const hero = document.querySelector(".hero");

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
