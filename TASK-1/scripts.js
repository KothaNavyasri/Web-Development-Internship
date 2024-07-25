// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const todoList = document.getElementById('todo-list');

    const sortPriorityButton = document.getElementById('sort-priority');
    const sortDueDateButton = document.getElementById('sort-due-date');
    const sortCompletionButton = document.getElementById('sort-completion');

    let todos = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo(taskInput.value, dueDateInput.value, priorityInput.value);
        taskInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = 'Medium';
        renderTodos();
    });

    sortPriorityButton.addEventListener('click', () => {
        todos.sort((a, b) => a.priority.localeCompare(b.priority));
        renderTodos();
    });

    sortDueDateButton.addEventListener('click', () => {
        todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        renderTodos();
    });

    sortCompletionButton.addEventListener('click', () => {
        todos.sort((a, b) => a.completed - b.completed);
        renderTodos();
    });

    function addTodo(task, dueDate, priority) {
        const todo = {
            id: Date.now(),
            task,
            dueDate,
            priority,
            completed: false
        };
        todos.push(todo);
    }

    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        renderTodos();
    }

    function editTodo(id) {
        const task = prompt('Edit the task:');
        const dueDate = prompt('Edit the due date:', new Date().toISOString().split('T')[0]);
        const priority = prompt('Edit the priority:', 'Medium');
        todos = todos.map(todo => 
            todo.id === id ? { ...todo, task, dueDate, priority } : todo
        );
        renderTodos();
    }

    function toggleCompletion(id) {
        todos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        renderTodos();
    }

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = todo.completed ? 'completed' : '';
            li.innerHTML = `
                <span>${todo.task} - ${todo.dueDate} - ${todo.priority}</span>
                <div>
                    <button class="edit" onclick="editTodoHandler(${todo.id})">Edit</button>
                    <button class="delete" onclick="deleteTodoHandler(${todo.id})">Delete</button>
                    <button onclick="toggleCompletionHandler(${todo.id})">${todo.completed ? 'Undo' : 'Complete'}</button>
                </div>
            `;
            todoList.appendChild(li);
        });
    }

    window.deleteTodoHandler = deleteTodo;
    window.editTodoHandler = editTodo;
    window.toggleCompletionHandler = toggleCompletion;
});
