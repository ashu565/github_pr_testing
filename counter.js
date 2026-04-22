const counterValue = document.getElementById('counter-value');
const decrementBtn = document.getElementById('decrement-btn');
const incrementBtn = document.getElementById('increment-btn');
const MAX_COUNT = 10;
let count = 0;

const render = () => {
  counterValue.textContent = String(count);
  decrementBtn.disabled = count <= 0;
  incrementBtn.disabled = count >= MAX_COUNT;
};

incrementBtn.addEventListener('click', () => {
  if (count >= MAX_COUNT) return;
  count++;
  render();
});
decrementBtn.addEventListener('click', () => {
  if (count <= 0) return;
  count--;
  render();
});
document.getElementById('reset-btn').addEventListener('click', () => { count = 0; render(); });

render();
