//selecting element

const githubForm = document.getElementById("github-form")
const nameInput = document.getElementById("githubname")
const clearLastUsers = document.getElementById("clear-last-users")
const lastUsers = document.getElementById("last-users")
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit",getData)
  clearLastUsers.addEventListener("click",clearAllSearched)
  document.addEventListener("DOMContentLoaded",getAllSearched)
}

function getData(e){
  let username = nameInput.value.trim();
  if (username === ""){
    alert("please insert valid username")
  }
  else{
    github.getGithubData(username)
    .then(response => {
      if(response.user.message ==="Not Found"){
        ui.showError("no pasaran")
      }
      else{
        ui.addSearchedUserToSUI(username)
        Storage.addSearchedUserToStorage(username);
        ui.showUserInfo(response.user)
        ui.showRepoInfo(response.repo)
        
      }
    })
    .catch(err => ui.showError(err));
  }
  ui.clearInput();
  e.preventDefault();
}

function clearAllSearched() { 
  if (confirm("are you sure")){
  lastUsers.innerHTML =""
  localStorage.removeItem("searched")//meine yogurt essen stlye
  }
}

function getAllSearched(){
  let users = Storage.getSearchedUsersFromStorage();
  console.log(users);
  let result = "";
  users.forEach(user => {
    result +=`<li class="list-group-item">${user}</li>`;
  });

  lastUsers.innerHTML = result;
}

localStorage.setItem("sedat test",123)

