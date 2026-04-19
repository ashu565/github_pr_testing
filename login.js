const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const loginMsg = document.getElementById('login-msg');

const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

loginBtn.addEventListener('click', () => {
  if (!isValidEmail(email.value)) {
    loginMsg.textContent = 'Please enter a valid email';
    loginMsg.className = 'msg err';
    return;
  }
  if (email.value === 'user@example.com' && password.value === 'password123') {
    loginMsg.textContent = 'Welcome back!';
    loginMsg.className = 'msg ok';
  } else {
    loginMsg.textContent = 'Invalid credentials';
    loginMsg.className = 'msg err';
  }
});
