const toDoList = document.querySelector("form");
const toDoInput = document.querySelector("#to-do-input");
const toDoAdd = document.querySelector('#add-button');
const toDoItem = document.querySelector('.todolist');

let todos = [];

//Function for adding to do list
function addToDo() {
    const toDoText = toDoInput.value.trim();

    if (toDoText.length > 0) {
        const todo = {
            id: Date.now(),
            text: toDoText,
            completed: false,
        };

        todos.push(todo);

        toDoInput.value = '';

        renderToDo();
    }
}

//Function for adding toggle complete
function toggleCompleted(id) {
    todos = todos.map(todo => { if(todo.id === id)
        {
        todo.completed = !todo.completed;
    }
    return todo;
});
    renderToDo();
}


//Function for deleting todo item

function deleteToDo(id) {
    todos = todos.filter(todo => todo.id != id)
    renderToDo();
}



