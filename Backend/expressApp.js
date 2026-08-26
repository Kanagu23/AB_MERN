const express = require("express");
const cors=require("cors")
const app = express();
const port = 4000;
app.use(cors({origin:["http://localhost:5173","http://localhost:3000"]}))
app.use(express.static("public"));
app.use(express.json())
// app.use((req,res,next)=>{

// res.send("Connection Blocked")
// })
const checkAuth=(req,res,next)=>{
  req.userName="AB"
  const token=req.headers.authorization
  // if(!token){
  //   res.status(401).json({message:"Unauthorized"})
  // }
  next()
}

app.get("/", (req, res) => {
  res.send("HELLO WORLD !");
});

app.get("/about",checkAuth, (req, res) => {
  res.send(`About!${req.userName}`);
});

// app.get("/users", (req, res) => {
//   const users = [
//     {
//       name: "AB",
//       id: 1,
//     },
//     { name: "Kanagu", id: 2 },
//   ];
//   res.json(users)

// });
app.get("/users", (req, res) => {
    console.log(req.query)
    res.send("Users")

});
app.get("/users/:name",(req,res)=>{
    console.log(req.params)
    res.send(`USER ID: ${req.params.name}`)
})
app.post("/users",(req,res)=>{
    res.send("POST USERS")
})
app.delete("/users/:id",(req,res)=>{
    db.usr.delete(id)
    res.send("DELETE USERS")
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
