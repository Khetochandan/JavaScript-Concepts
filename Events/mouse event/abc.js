
const tracker = document.getElementById('tracker');
const coords = document.getElementById('coords');
tracker.addEventListener('mousemove', (event) => {
  coords.textContent = `Mouse Position - X: ${event.clientX}, Y: ${event.clientY}`;
});