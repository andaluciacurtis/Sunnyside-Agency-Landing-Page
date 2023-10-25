const navToggle = document.querySelector(".mobile-nav-toggle");
const navTriangle = document.querySelector(".triangle-div")
const navMenu = document.querySelector("nav");

navToggle.addEventListener("click", ()=> {
  navTriangle.classList.toggle("triangle-appear")
  navMenu.classList.toggle("open-nav")
})