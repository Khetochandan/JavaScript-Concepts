
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');

outer.addEventListener('click', () => alert('Outer Div Clicked!'));

inner.addEventListener('click', (event) => {
  
  alert('Inner Div Clicked!');
  event.stopPropagation(); // Prevents the click from bubbling to the outer div
});