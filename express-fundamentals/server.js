const express = require("express");
const {accessControl} = require("./middleware");
const users = [
  {id:1, name:"sedat ates",place : "istanbul"},
  {id:2, name:"ankarali bebe",place : "samsun"}
]
const app = express();
const PORT = 5000;
app.use(express.json());

app.get("/users",accessControl,(req,res,next) => {
  res.json(users)
});

app.post("/users",(req,res,next) => {
  const user = req.body;
  users.push(user)
  res.json({
    succes:true,
    data: users
  });
})
app.delete("/users/:id",(req,res,next) => {
  const id = parseInt(req.params.id);

  for (let i = 0; i< users.length; i++) {
    if (users[i].id===id) {
        users.splice(i,1);
      }
    }
  res.json({
    succes:true,
    data: users
  })

})


app.listen(PORT, ()=> {
  console.log("server started PORT:"+ PORT)
})