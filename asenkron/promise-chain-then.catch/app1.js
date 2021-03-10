function getTextFiles() { // 
  fetch("writingtext.txt")
    .then((response) => response.text())
		.then(data => console.log(data))
    .catch((err) => console.log(err));
}
getTextFiles();

function getJsonFile(){
	fetch("example.json")
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((err)=> console.log(err));		
}
getJsonFile();

function getExternalAPI(){
	fetch("https://api.exchangeratesapi.io/latest")
	.then(response => response.json())
	.then(data => console.log(data));
}
getExternalAPI();