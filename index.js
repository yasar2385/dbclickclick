// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const card = document.querySelector('aside');

card.addEventListener('dblclick', function(e) {
  card.classList.toggle('largeX');
});
card.addEventListener('click', function(e) {
  card.classList.toggle('large');
});
