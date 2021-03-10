//async, await

async function test(data) {
  //promises return new Promise
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}
//test("selam").then(response => console.log(response));

async function test1(data) {
  //promises return new Promise
  //return data
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("bubirkomplo");
    }, 2000);
  });

  let response = await promise; //waits two seconds
  console.log(response);
  console.log("hallo");
}
//test1("hi")

async function test3(data) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "string") {
        resolve(data);
      } else {
        reject(new Error("please enter string"));
      }
    }, 4000);
  });
  const response = await promise;
  return response;
}
//test3("karma").then((data) => console.log(data));
//test3(123).then((data) => console.log(data));

async function getCurrency(url) {
	const response = await fetch(url);//responds object
	console.log(response);
	const data = await response.json();//Json object
	return(data);
}
//getCurrency("https://api.exchangeratesapi.io/latest").then(response => console.log(response));
