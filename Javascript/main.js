// Toggle Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".mobile-menu .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu .mobile-menu-items");
  toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

// Change navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (this.window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
