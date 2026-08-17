# Node JS Architecture
    Client Request --> Event Queue --> Event Loop --> Thread Pool --> Operating System
# Node Modules
    A module is reusable Javascript code
    - Core modules
    - Local modules
    - Third party Modules
## Core Modules
### FS (File System)
    ``` const fs = require("fs")
        fs.writeFileSync("sample.txt","Hello,Node Js file !")
        console.log("File Created") ```