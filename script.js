const menu = document.querySelector(".menu");
const navBar = document.querySelector(".menu__navbar");
const menuOpen = document.querySelector(".menu__hamburger");
const menuClose = document.querySelector(".menu__close");
const container = document.querySelector(".container");

menuOpen.addEventListener("click", () => {
  container.classList.add("container--show");
  menu.classList.add("menu--show");
  navBar.classList.add("menu__navbar--show");
});

menuClose.addEventListener("click", () => {
  container.classList.remove("container--show");
  menu.classList.remove("menu--show");
  navBar.classList.remove("menu__navbar--show");
});
