// event bubbling

/*
document.querySelector(".container").addEventListener("click",function () {
    console.log("Div Container");
});
document.querySelector(".card.row").addEventListener("click",function () {
    console.log("card row");
});
document.querySelectorAll(".card-body")[1].addEventListener("click",function () {
    console.log("card body");
});
*/

//event capturing  delegation

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run(e){
    console.log("naber");
}