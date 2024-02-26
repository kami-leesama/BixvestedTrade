function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode)
      document.body.classList.add('dark-mode');
  });
  
  // Select the form-area div and toggle-button div
const formArea = document.querySelector('.form-area');
const toggleButton = document.querySelector('.toggle-button');

// Add a click event listener to the toggle-button
toggleButton.addEventListener('click', () => {
  // Toggle the display of the form-area
  formArea.style.display = formArea.style.display === 'none' ? 'block' : 'none';
});

// Add a click event listener to the entire document
document.addEventListener('click', (event) => {
  // If the clicked element is not the toggle-button, and the form-area is currently displayed
  if (event.toggleButton && formArea.style.display === 'block' && event.target !== formArea) {
    // Hide the form-area
    formArea.style.display = 'none';
  }
});