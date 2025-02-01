
const input = document.getElementById('textInput');

input.addEventListener('keydown', (event) => {
  alert(`Key: ${event.key}, Code: ${event.code}`);
});