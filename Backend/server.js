// const fs = require("fs")
// fs.writeFileSync("sample.txt","Hello,Node Js file !")
// console.log("File Created")

// console.log("TASK 1")
// console.log("TASK 2")
// console.log("TASK 3")
// function delay(ms){
//     return new Promise (resolve=> setTimeout(resolve,ms))
// }

//  async function TEST(params) {
//     console.log("Task 1")
// await delay(2000)
//  console.log("Task 3")
// }

// TEST()

// const EventEmitter =require ("events")
// const event = new EventEmitter();
// event.on("welcome",()=>{
//     console.log("Hello World")
// })
// event.emit("welcome")
// event.emit("welcome")


// const http = require ("http")
// const server = http.createServer((req,res)=>{
//     console.log(req.body)
//     res.end("HELLO WORLD! From node server")
// })
// server.listen(3000)

const http = require ("http")
const server =http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:4000")
    const reqURL=req.url
    if(req.url=="/")
    {
        res.end("Home")
    }
    else if(req.method=="POST"&&req.url==="/user"){
        res.end("Create User")
    }
      else if(req.method=="GET"&&reqURL.startsWith("/users")){
        const fullURL=new URL(reqURL,`http://${req.headers.host}`)
        console.log(fullURL.searchParams.get("email"))
        const id=reqURL.split("/")[2]
        console.log(id)
        res.end(`User ID:${id}`)
    }
    else if(req.method=="GET"&&req.url==="/about"){
        res.end("About")
    }
    else {
        
        res.statusCode=500
        res.end("404")
    }
})
server.listen(3000)