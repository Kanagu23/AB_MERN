# Node JS Architecture
Traditional ARCH: Request -> Thread 1
                  Request -> Threas 2
                  <br/>
Client Request --> Event Queue --> Event Loop --> Thread Pool --> Operating System
# Node Modules
    A module is reusable Javascript code
    - Core modules
    - Local modules
    - Third party Modules
## Core Modules
### FS (File System)
    const fs = require("fs")
    fs.writeFileSync("sample.txt","Hello,Node Js file !")
    console.log("File Created")


# HOW WEB WORKS
http://xyz.in/prodducts

req: get /products

res: [
        {
            namae:"laptop"
        }
    ]

# Server-side scripting
1. Authentication
2. Database operations
3. Business logic
4. File upload

# What is Node js
Node js is a JAVASCRIPT RUNTIME ENVIRONMENT that allows javascript to run outside the browser

Chrome v8 engine-->Node js-->OS

**PROS**
- Fast execution
- Non-blocking
- Asychronous
- Event driven
- Cross-platform
- Large Package Support

# SYNC VS ASYNC
// console.log("TASK 1")
// console.log("TASK 2")
// console.log("TASK 3")
function delay(ms){
    return new Promise (resolve=> setTimeout(resolve,ms))
}

 async function TEST(params) {
    console.log("Task 1")
await delay(2000)
 console.log("Task 3")
}

TEST()

# Event Driven Programming
An event is  an action
    1. Mouse Click
    2. Key Press
    3. File Upload
    4. HTTP request
## How it works
    Event Occurs --> Event listener Detects it --> Callback function executes

# Node JS life Cycles
node server.js --> Initialize Modules --> Execute Code --> Register Events -- > Event Loop Starts --> Application wait
# Creating a Node server
**Server** : A program that receives req and sends res
