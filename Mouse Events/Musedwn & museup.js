
const mousedownBox = document.getElementById('mousedownBox');
  mousedownBox.addEventListener('mousedown', () => {
    mousedownBox.style.background = 'green';
  });
  mousedownBox.addEventListener('mouseup', () => {
    mousedownBox.style.background = 'yellow';
  });