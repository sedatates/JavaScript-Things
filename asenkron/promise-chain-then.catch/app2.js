class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => console.log(err));
    });
  }
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "Post",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  put(url,data){
    fetch(url,{
      method :'PUT',
      body: JSON.stringify(data),
      headers : {
        "Content-type":"application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
}

const request = new Request();

let albums;
request
  .get("https://jsonplaceholder.typicode.com/albums")
  .then((data) => {
    albums = data;
    console.log(albums);
  })
  .catch((err) => console.log(err));
console.log(albums); // asynchronous undefined

request.post("https://jsonplaceholder.typicode.com/albums", {userId: 1,title: "thrlilelr",})
.then(newAlbum => console.log(newAlbum));

request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"karma"})
