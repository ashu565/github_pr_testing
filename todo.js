const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoMsg = document.getElementById('todo-msg');
const addTodoBtn = document.getElementById('add-todo-btn');

addTodoBtn.addEventListener('click', () => {
  const text = todoInput.value.trim();
  if (!text) {
    todoMsg.textContent = 'Task cannot be empty';
    todoMsg.className = 'msg err';
    return;
  }
  const li = document.createElement('li');
  li.textContent = text;
  todoList.appendChild(li);
  todoInput.value = '';
  todoMsg.textContent = '';
});
