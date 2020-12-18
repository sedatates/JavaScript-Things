// selecting elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

    
eventListeners();
    //All event listeners
function eventListeners() {
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodostoUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}
    //deleting all todos 
function clearAllTodos(e){
    if (confirm("are you sure yo delete them all")){
        //cleaning from UI
        //todoList.innerHTML=""; //slow
        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        //removing from localstorage
        localStorage.removeItem("todos");   
    }
}
    //searching todos
function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)=== -1){
            listItem.setAttribute("style","display : none !important");           
        }
        else{
            listItem.setAttribute("style","display : block");
        }
    })
}
    //deleting todo from localstorage
function deleteTodoFromStorage(deletingtodo){
    
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if (todo == deletingtodo) {
            todos.splice(index,1);//deleting one in the array from index
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}
    //deleting todo from UI
function deleteTodo(e){
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","todo silindi");

    }
}
    //adding todos
function addTodo(e) {
    const newTodo  = todoInput.value.trim();
    if (newTodo==""){
        showAlert("danger","lütfen bir todo giriniz...");
    }
    else{
        addTodoToUı(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","todo eklendi")
    }   
    e.preventDefault();
}
    //getting todos from storage or creating one
function getTodosFromStorage(){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
    //adding todos to localstorage
function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
    //showing alerts
function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    
    //setTimeout
    setTimeout(function() {
        alert.remove();
    },1000);
}
    //Creating new items
function addTodoToUı(newTodo) { // addding list item to ui
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    
    //link creating
    link.href = "#";
    link.className ="delete-item";
    link.innerHTML="<i class = 'fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between";
    
    //adding textnode
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //adding list item to todo List;
    todoList.appendChild(listItem);
    //clearing submit button
    todoInput.value="";
   
}
    //loading todos when you refresh page
function loadAllTodostoUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUı(todo);
    });
}