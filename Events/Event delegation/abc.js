// 

const list = document.getElementById('list');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    alert(`You clicked on: ${event.target.textContent}`);
  }
});