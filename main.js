const toDoList = document.querySelector("form");
const toDoInput = document.querySelector("#to-do-input");
const toDoAdd = document.querySelector('#add-button');
const toDoItem = document.querySelector('.todolist');

let todos = [];

function addToDo() {
    const toDoText = toDoInput.value.trim();

    if (toDoText.length > 0) {
        const todo = {
            id: Date.now(),
            text: toDoText,
            completed: false,
        };

        todos.push(todo);
    }
}


