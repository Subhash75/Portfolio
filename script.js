// adding mobile-view class was overwriting initial css rules so decided on using style object.

let isNavBarOpen = false;
const myInterest = [
  "Front End Developer",
  "React Developer",
  "Web Designer",
  "Web Developer",
];

window.addEventListener("resize", function () {
  if (window.innerWidth >= "768") {
    isNavBarOpen = false;
    if (!isNavBarOpen) {
      document.querySelector(
        ".second-icon"
      ).parentNode.children[1].style.display = "block";
      document
        .querySelector(".second-icon")
        .parentNode.children[1].classList.remove("mobile-view");
    }
  } else {
    if (isNavBarOpen) {
      document.querySelector(".second-icon").parentNode.children[1].className =
        "mobile-view";
    } else {
      document.querySelector(
        ".second-icon"
      ).parentNode.children[1].style.display = "none";
    }
  }
});

const hideNavBar = function () {
  isNavBarOpen = false;
  this.parentNode.children[1].style.display = "none";
  this.parentNode.children[1].classList.remove("mobile-view");
  this.parentNode.parentNode.style.height = "auto";
  this.parentNode.parentNode.style.overflow = "visible";
  this.removeEventListener("click", hideNavBar);
  this.addEventListener("click", showNavBar);
};

const showNavBar = function () {
  isNavBarOpen = true;
  this.parentNode.children[1].style.display = "block";
  this.parentNode.children[1].classList.add("mobile-view");
  this.parentNode.parentNode.style.height = "100%";
  this.parentNode.parentNode.style.overflow = "hidden";
  this.previousSibling.previousSibling.children[0].style.animation =
    "showNavBar 100ms ease forwards";
  this.removeEventListener("click", showNavBar);
  this.addEventListener("click", hideNavBar);
};
document.querySelector(".second-icon").addEventListener("click", showNavBar);

// let i = 0;
// setInterval(function () {
//   if (i === myInterest.length) i = 0;
//   document.querySelector(".my-interest-span").textContent = myInterest[i];
//   i++;
// }, 2000);

