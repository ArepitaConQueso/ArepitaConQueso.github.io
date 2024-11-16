const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('search');
const noTasksMessage = document.getElementById('noTasksMessage');

// FUNCION PARA AGREGAR TAREAS CON BOTONES INCLUIDOS
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the Complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completar';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Create the Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Borrar';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
            filterTasks(); // Update the search results after deletion
        });

        // Append the buttons to the list item
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input field
        filterTasks(); // Update the search results
    }
});

// FUNCION PARA BUSCAR VALORES CADA VEZ QUE CAMBIE EL INPUT
searchInput.addEventListener('input', filterTasks);

function filterTasks() {
    const filter = searchInput.value.toLowerCase();
    const tasks = taskList.getElementsByTagName('li');
    let hasVisibleTasks = false;

    Array.from(tasks).forEach(task => {
        const text = task.textContent.toLowerCase();
        if (text.includes(filter)) {
            task.style.display = '';
            hasVisibleTasks = true;
        } else {
            task.style.display = 'none';
        }
    });

    // Show or hide the "No tasks found" message
    noTasksMessage.style.display = hasVisibleTasks ? 'none' : '';
}

// BOTON MODO OSCURO
const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = "Modo Claro";
    } else {
        toggleButton.textContent = "Modo Oscuro";
    }
});

