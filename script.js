// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
      alert('Please enter a valid task.');
      return;
  }

  const taskItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskText = document.createElement('span');
  taskText.textContent = taskInput.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function () {
      taskList.removeChild(taskItem);
  };

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteButton);

  // Add event listener to mark task as completed
  checkbox.addEventListener('change', function () {
      taskText.classList.toggle('completed', checkbox.checked);
  });

  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';
}
