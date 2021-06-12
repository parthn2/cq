const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(ne2wToDo);

    const completed = document.createElement('button');
    completed.innerHTML = "<i class='fas fa-check'></i>";
    completed.classList.add('complete-btn');
    todoDiv.appendChild(completed)

    const del = document.createElement('button');
    del.innerHTML = "<i class='fas fa-trash'></i>";
    del.classList.add('del-btn');
    todoDiv.appendChild(del);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    if (item.classList[0] === 'del-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
