
let rightClickArea = document.getElementById('rightClickArea');

  rightClickArea.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('Right-click menu disabled!');
  })