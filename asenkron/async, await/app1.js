class Request {
  async get(url) {
    const response = await fetch(url); //response object
    const data = await response.json(); //Json object
    return data;
  }
  async post(url) {
    const response = fetch(url, {
      method: "Post",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data1 = await response.json();
    return data1;
  }
  async put(url) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }) 
    const data1 = await response.json();
    return data1;
  }
}
const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")
  .then((data) => {
    albums = data;
    console.log(albums);
  })
  .catch((err) => console.log(err));