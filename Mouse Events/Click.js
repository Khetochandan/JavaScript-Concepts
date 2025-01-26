
let btn = document.getElementById('clickBtn')
btn.addEventListener('click', () => alert('Buton clicked'))

const box = document.getElementById('box');
  box.addEventListener('dblclick', () => {
    box.style.background = 'red';
  });