function checkEnter(event){
    if(event.keyCode === 13){
        addTodo();
    }
}

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list'); // Changed from 'todo-List' to 'todo-list'

    if (todoInput.value.trim() !== "") { // Changed 'ariaValueMax' to 'value'
        const todoItem = document.createElement('li');

        todoItem.innerHTML = `
            <span>${todoInput.value}</span>
            <div class="actions">
                <button class="edit-btn" onclick="editTodo(this)">Update</button>
                <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
            </div>
        `;

        todoItem.addEventListener('mousedown', function(event){
            if(event.button === 1){
                deleteTodoByScrolling(todoItem);
            }
        });
        todoList.appendChild(todoItem);
        todoInput.value = ""; // Clear the input field after adding the todo
    }
}

function deleteTodo(btn) {
    const todoItem = btn.parentNode.parentNode;
    todoItem.remove();
}

function editTodo(btn) {
    const todoItem = btn.parentNode.parentNode;
    const newTodo = prompt("Update your todo:", todoItem.querySelector('span').textContent);

    if (newTodo) {
        todoItem.querySelector('span').textContent = newTodo;
    }
}

function deleteTodoByScrolling(todoItem){
   todoItem.remove(); 
}