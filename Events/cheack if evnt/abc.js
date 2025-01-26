// code: The physical key on the keyboard (e.g., KeyA, Space).

const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => {
  alert(event.isTrusted ? 'User triggered this event.' : 'Script triggered this event.');
});

// Trigger event programmatically
btn.click();