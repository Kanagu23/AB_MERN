const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(req.body)
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Methods","GET,OPTIONS")
    res.setHeader("Access-Control-Allow-Headers","Content-Type-Authorization")
    // res.writeHead(200,{"content-type":"text/plain"})
    res.end("Hello from node js")
  
 
})
const port=3004
server.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
