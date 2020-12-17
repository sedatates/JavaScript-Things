/*
const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);
filterInput.onfocus = function(){
    console.log("sedat");
}

filterInput.addEventListener("focus",function(e){
    console.log(e);
    
});

function submitForm(e) {
    console.log("submit even");
    e.preventDefault();
}
*/
//keyboard events

//keypress

/*
document.addEventListener("keypress",run);
function run(e) {
    // console.log(e.which); //ASCII TABLe
    // console.log(e.key); //EXACT KEy  
}
document.addEventListener("keydown",run1);
function run1(e) {
    // console.log(e.key);
}
document.addEventListener("keyup",run2);
function run2(e) {
    // console.log(e.key);
}

//Dynamic header change
const header= document.querySelector(".card-header");
const todoinput1= document.querySelector("#todo");
todoinput1.addEventListener("keyup",changeText);
function changeText(e) {
    header.textContent = e.target.value;
    console.log(e.target.value);
}
*/

//mause events

const cardBody = document.querySelector(".card-body")[1];
const title = document.querySelector("#tasks-title");

//click event
title.addEventListener("click",run);
title.addEventListener("dblclick",run1);
title.addEventListener("mousedown",run2);

function run2(e) {
    console.log(e.type);
}
function run1(e) {
    console.log(e.type);
}
function run(e) {
    console.log(e.type);
}
