
const parent = document.getElementById('parent');
parent.addEventListener('click', (event) => {
  alert(`Target: ${event.target.tagName}\nCurrent Target: ${event.currentTarget.tagName}`);
})