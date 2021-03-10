function getData(data) {
  //function that returns promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof data === "string") {
        //pozitiv
        resolve(data);
      } else {
        //negativ
        reject("please enter sting :)");
      }
    }, 1000);
  });
}

getData(12)
  .then(function (response) {
    console.log("coming value " + response);
  })
  .catch(function (err) {
    console.log(err);
  });

getData(1)
  .then((response) => console.log("gelen deger" + response))
  .catch((err) => console.log(err));

function addTwo(number) {
  //function that returns promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof number === "number") {
        //pozitiv
        resolve(number + 123);
      } else {
        //negativ
        reject(new Error("get to the choppper and give me rakkam"));
      }
    }, 2000);
  });
}

addTwo(877)
  .then((response) => {console.log("bravo eklediniz " + response)
  return response+2
  }).then(function(response2){
    console.log(response2);
    return response2+5;
  }).then(response3 => console.log(response3));

