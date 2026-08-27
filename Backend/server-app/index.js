const express = require("express")
const app = express()
app.set("view engine","pug")
app.set("views","./views")



app.get("/",(req,res)=>{
    res.render("index",{
        title:"Home Page",
        name:"AB1"
    })
})

app.get("/users",(req,res)=>{
    const users=[
      {name:"AB",role:"Software Developer",id:123},
      {name:"Kanagu",role:"Team Lead",id:456},
      {name:"Raj",role:"Trainee",id:789},
      {name:"Viswa",role:"Software Tester",id:101},
      {name:"Saro",role:"GO Developer",id:102},
      {name:"Muthu",role:"Backend Developer",id:103},
      {name:"Dhanush",role:"MERN Developer",id:104},
      {name:"Subash",role:"Full stack Developer",id:105}
    
    ]
    res.render("users",{users})
})

app.listen(4000,()=>{
    console.log("Server running on port 4000")
})