// JavaScript to toggle between light and dark themes
document.addEventListener ('DOMContentLoaded', function () {
  const toggleThemeButton = document.getElementById ('toggle-theme');
  const body = document.body;

  toggleThemeButton.addEventListener ('click', () => {
    body.classList.toggle ('light-theme');
    body.classList.toggle ('dark-theme');
  });
});
