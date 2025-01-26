
const link = document.getElementById('link');

link.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Default behavior prevented!');
})