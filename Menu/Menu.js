// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu


menuButton.addEventListener('click', function() {
  // Toggle the "menu--open" class on your menu refence. 
  //console.log('menu');
  menu.classList.toggle('menu--open');
  // if (menu.style.display === 'block') {
  //   menu.style.display = 'none';
  // } else {
  //   menu.style.display = 'block';
  // }
});
