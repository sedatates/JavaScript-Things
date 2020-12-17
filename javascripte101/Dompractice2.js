const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");
const cardbody = document.querySelectorAll(".card-body")[1];
//console.log(todos);
//console.log(todoList);

//remove method
//todos[1].remove();

//remove child
//todoList.removeChild(todoList.lastElementChild)
todoList.removeChild(todos[2])

// new todos
const newElement = document.createElement("h3")

newElement.className="card-title";
newElement.id="tasks-title";
newElement.textContent="yeni todolar";

const oldElement = document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldElement);

