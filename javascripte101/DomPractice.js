// new element 
//  <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> 
const newLink = document.createElement("a")
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href ="https://www.google.com";
newLink.target = "_blank";

// text content 
newLink.textContent = "farklı sayfaya git";

//cardbody.textContent =" sedat" wrong because it delete everything and replace sedat in

//const text = document.createTextNode("Naber")
//cardbody.appendChild(text)

newLink.appendChild(document.createTextNode("Farklı sayfaya git"))
cardbody.appendChild(newLink);



console.log(cardbody);
console.log(newLink);