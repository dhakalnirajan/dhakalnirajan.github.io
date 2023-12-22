// JavaScript to toggle between light and dark themes
document.addEventListener ('DOMContentLoaded', function () {
  const toggleThemeButton = document.getElementById ('toggle-theme');
  const body = document.body;

  toggleThemeButton.addEventListener ('click', () => {
    body.classList.toggle ('light-theme');
    body.classList.toggle ('dark-theme');
  });
});

// Hamburger Style Navbar

// Add click event listener to the hamburger menu icon
document
  .getElementById ('hamburger-icon')
  .addEventListener ('click', function () {
    // Toggle the visibility of the regular menu items
    document.querySelector ('.nav-address').classList.toggle ('show-menu');
  });

// Add a click event listener to each menu item to hide the menu when clicked
document.querySelectorAll ('.nav-address a').forEach (function (item) {
  item.addEventListener ('click', function () {
    document.querySelector ('.nav-address').classList.remove ('show-menu');
  });
});
