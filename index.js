const menuIcon = document.querySelector('#menu-icon');
const menuToggle = document.querySelector('#menu-toggle');
const menuSection = document.querySelector('#menu-section');
menuIcon.addEventListener('click', () => {
  menuSection.classList.add('menu-section-active');
  console.log('rgfv');
});

menuToggle.addEventListener('click', () => {
  menuSection.classList.remove('menu-section-active');
});