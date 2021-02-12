

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//without es6
/*
// UI objesini Başlatma
const ui = new UI();
//storege eklme
const storage = new Storage();
*/

//eventleri yükleme
eventListeners();
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllfilms)
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title ==="" || director === ""|| url ===""){
        UI.displayMessages("tüm alanları doldurun","danger")

    }
    else {
        //new movie
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm);//adding to UI arayüze
        Storage.addFilmToStorage(newFilm);//adding to storage
        UI.displayMessages("film basari ile eklendi","success")
        
    }
    UI.clearInput(titleElement,urlElement,directorElement);
    e.preventDefault();
}
function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)   
        UI.displayMessages("silme işlemi başarılı","success")
    }
}
function clearAllfilms(){
    if(confirm("are yo sure m8")){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    }
}