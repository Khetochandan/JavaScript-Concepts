
const btn = document.getElementById('btn');
  btn.addEventListener('click', (event) => {
    alert(`Event Type: ${event.type}`);
  })

  // Important Event Object Properties
// type: The type of the event (e.g., click, mouseover).
// target: The element that triggered the event.
// currentTarget: The element to which the event listener is attached.
// clientX / clientY: The X and Y coordinates of the mouse pointer (relative to the viewport).
// pageX / pageY: The X and Y coordinates of the mouse pointer (relative to the page).
// key: The key pressed during a keyboard event (e.g., a, Enter).
// code: The physical key on the keyboard (e.g., KeyA, Space).
// preventDefault(): Prevents the default behavior of the event (e.g., stopping a link from navigating).
// stopPropagation(): Stops the event from propagating (bubbling) up the DOM tree.
// isTrusted: Indicates whether the event was triggered by a user or by a script.
