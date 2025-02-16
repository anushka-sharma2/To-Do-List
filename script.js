const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = "";

        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    } else {
        alert("Please enter a task.");
    }
}

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
