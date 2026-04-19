const counterValue = document.getElementById('counter-value');
let count = 0;
const render = () => { counterValue.textContent = String(count); };

document.getElementById('increment-btn').addEventListener('click', () => { count++; render(); });
document.getElementById('decrement-btn').addEventListener('click', () => { count--; render(); });
document.getElementById('reset-btn').addEventListener('click', () => { count = 0; render(); });
