const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onclick = () => li.classList.toggle('completed');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Delete';
  removeBtn.onclick = () => li.remove();

  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();
}
