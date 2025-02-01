
let tracker = document.getElementById('tracker')

let coordinates = document.getElementById('coordinates')

tracker.addEventListener('mousemove', (e) => {

  coordinates.textContent = `X: ${e.clientX}, Y ${e.clientY}`
  
})