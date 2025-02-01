
const hoverBox = document.getElementById('hoverBox');
  hoverBox.addEventListener('mouseenter', () => {
    hoverBox.textContent = 'Mouse Entered';
  });
  hoverBox.addEventListener('mouseleave', () => {
    hoverBox.textContent = 'Mouse Left';
  }); 