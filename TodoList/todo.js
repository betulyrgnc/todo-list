//Select all elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { //Listen all event
    form.addEventListener("submit",addTodo);
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();

    addTodoToUI(newTodo);
    //console.log(newTodo);
    

    e.preventDefault();
}
function addTodoToUI(newTodo){ // add string value to to UI as a list item


 /* <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>
              */
    //list item
    const listItem = document.createElement("li");
    // link create
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    
    listItem.className = "list-group-item d-flex justify-content-between";


    //Text Node Create
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);


    //Add a list item to Todo List
    todoList.appendChild(listItem);
    todoInput.value = "";
}