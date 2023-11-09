// toggle class active
const MenuBar = document.querySelector("#menu");
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu diklik
MenuBar.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// klik luar menu
const Menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!Menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  navbarNav.classList.remove("menu-active");
});
