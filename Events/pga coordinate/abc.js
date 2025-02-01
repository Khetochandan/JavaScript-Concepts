
const tracker = document.getElementById('tracker');

const coords = document.getElementById('coords');

tracker.addEventListener('mousemove', (event) => {
  coords.textContent = `Page Position - X: ${event.pageX}, Y: ${event.pageY}`;
})