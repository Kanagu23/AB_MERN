const express = require("express");
const app = express();
const port = 4000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("HELLO WORLD!");
});

app.get("/about", (req, res) => {
  res.send("About!");
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
