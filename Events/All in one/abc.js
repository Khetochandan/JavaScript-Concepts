// This example combines multiple properties and methods

const box = document.getElementById('box');
  const info = document.getElementById('info');

  box.addEventListener('click', (event) => {
    info.textContent = `Click Event: Target = ${event.target.tagName}, Type = ${event.type}`;
  });

  box.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevent right-click menu
    info.textContent = `Contextmenu Event: X = ${event.clientX}, Y = ${event.clientY}`;
  });