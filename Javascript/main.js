document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".mobile-menu .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu .mobile-menu-items");
  toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
