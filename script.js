const menu = document.querySelector(".hamburger");
const navCenter = document.querySelector(".nav_center");
const navBtn = document.querySelector(".nav-btn");
const navItems = document.querySelectorAll(".nav-links");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navCenter.classList.toggle("display");
  navBtn.classList.toggle("display");
  //   console.log(menu);
});

navItems.forEach((n) => {
  n.addEventListener("click", () => {
    menu.classList.toggle("active");
    navCenter.classList.toggle("display");
    navBtn.classList.toggle("display");
  });
});

// document.querySelectorAll(".nav--links").forEach((n) =>
//   n.addEventListener("click", () => {
//     menu.classList.remove("active");
//     navCenter.classList.remove("actived");
//   })
// );

console.log(document.body.clientWidth);
console.log(document.body.clientHeight);