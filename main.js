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
    todos = todos.filter(todo => todo.id !== id)
    renderToDo();
}

function renderToDo() {
    toDoItem.innerHTML = '';
    
    todos.forEach(todo => {
        const listItem = document.createElement('li')
        const listText = document.createElement('span')
        const  btnDelete = document.createElement('button');

        listText.textContent = todo.text;
        btnDelete.textContent='delete';

        btnDelete.addEventListener( 'click', ()=>{
            deleteToDo(todo.id)
        })


        //Add class 'completed' if completed
        if(todo.completed) {
            listItem.classList.add('completed')
        }

        listItem.addEventListener('click', ()=> toggleCompleted(id))

        listItem.appendChild(listText);
        listItem.appendChild(btnDelete);

        toDoItem.appendChild(listItem);
    })
}


toDoList.addEventListener("submit", e => {
    e.preventDefault();
    addToDo();
});

renderToDo();