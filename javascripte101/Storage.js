//session storage

//choosing buttons
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

//inputs
const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItems);
clear.addEventListener("click",clearItems);

function addItem(e) {
    sessionStorage.setItem(addKey.value,addValue.value);
}
function deleteItems(e) {
    console.log("sad");
}
function clearItems(e) {
}

//LOCAL STORAGE

//Set item
localStorage.setItem("hareket","squat");
localStorage.setItem("tekrar",50);//string always

//get item
const value = localStorage.getItem("tekrar");
console.log(value);
console.log(typeof value);

//clear local
