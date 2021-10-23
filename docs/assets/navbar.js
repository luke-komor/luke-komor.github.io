function openNav() {
  document.getElementById("overlay_nav").style.left = "0";
  if (navbar.classList.contains('sticky')) {
    navbar.classList.add("sticky-z-lower");
    stickyPrev = true
  }
}

function closeNav() {
  document.getElementById("overlay_nav").style.left = "100%";
  if (stickyPrev) {
    navbar.classList.remove("sticky-z-lower")
  }
}

function changeNavClass() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function () { changeNavClass() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var stickyPrev = false





