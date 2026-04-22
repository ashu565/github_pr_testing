const counterValue = document.getElementById('counter-value');
const decrementBtn = document.getElementById('decrement-btn');
let count = 0;

const render = () => {
  counterValue.textContent = String(count);
  decrementBtn.disabled = count <= 0;
};

document.getElementById('increment-btn').addEventListener('click', () => { count++; render(); });
decrementBtn.addEventListener('click', () => {
  if (count <= 0) return;
  count--;
  render();
});
document.getElementById('reset-btn').addEventListener('click', () => { count = 0; render(); });

render();
