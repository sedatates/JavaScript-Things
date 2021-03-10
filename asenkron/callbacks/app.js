//callback functions

const langs = [ "python","java","c++"];
/*
langs.forEach(function(lang){
    console.log(lang);
})

document.getElementById("btn").addEventListener("click",function(){
    console.log("tıkla");
});

function process1(callback){
    setTimeout(function(){
      console.log("1");
      callback();
    },3000);    
}
function process2() {
    console.log("2");
}  

process1(process2);
*/

function addLang(lang,callback){
    setTimeout(function () {
        langs.push(lang)
        console.log("added");
        callback();
    },2222);
}

function getAllLangs() {
    setTimeout(function(){
        langs.forEach(function(lang) {
            console.log(lang);
        });
    },1000)
}

addLang("javascript",getAllLangs);
