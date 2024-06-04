function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
window.onload = function() {
    var img = document.querySelector('img.circular-image');
    if (img) {
        img.style.borderRadius = '50%';
    }
}