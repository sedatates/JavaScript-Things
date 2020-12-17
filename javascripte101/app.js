const langs= ["python","sedat","ates"];

let index=0;

while(index < langs.length){
    //console.log(langs[index]);
    index++
}

langs.forEach(function(lang){
    //console.log(lang);
});
//callbacks

const users = [
    {name:"sedat",age:23},
    {name:"huluk",age:22}
]

const names = users.map(function(user){
    return user.name;
});
 //console.log(names);
const user ={
    name:"ates",
    age:123
};
for (let key in user) {  
    //console.log(key,user[key]);
}
//const cevap = confirm("are you winning son");
//value= document.links[0].getAttribute("")

let element;

element = document.getElementById("todo-form")
element = document.getElementById("tasks-title")
element = document.getElementsByClassName("list-group-item")
element = document.getElementsByTagName("div")

// only returns one element
element = document.querySelector("div")
element = document.querySelector("li")

element = document.querySelector("#clear-todos")

console.log(element.id);
console.log(element.className);
console.log(element.innerHTML);
console.log(element.style);

element.className = "btn btn-warning"
element.style.color = "#00f"
element.style.marginLeft="80px"
element.href="https://www.google.com"

element.textContent =" silin"
element.innerHTML =" <span style = 'color:red'> sil </span>"
element2 = document.querySelector("li:nth-child(2)");
element2.innerHTML="<span style = 'background:red'> todoasfas </span>"
