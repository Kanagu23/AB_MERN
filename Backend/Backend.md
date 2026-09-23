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

# Request and Response
1. Request from client
2. Response from server

Data sent by client
    1. req.url
    2. req.method
Data sent by server
    1.res.write("hello")
    2.res.end();
# Routing
Routing decides which code should execute for specific url
HTTP METHOD + URL PATH + HANDLER

Example:
GET + /users + getUsers()

GET -> Read Data
POST -> Create / Write Data
PUT -> Replace/Update Data
PATCH -> Partially update Data
DELETE -> Delete Data

STATUS CODE
200 - OK
201 - Created
400 - Bad request
401 - Unauthorized
403 - Forbidden
404 - Not Found
500 - Internal Server Error

## HEADERS
#### Request headers
    1. Accept
    2. Content-Type
    3. Content-Length
    4. Authorization
    5. Cookie
    6. Origin
    7. Cache-Control

#### Response headers
    res.setHeader("Content-Type","text/plain") // text/htm , application/json, 
    res.writeHead(200,{"Content-Type":"application/json"});
    res.setHeader("X-App-Name","My node app")

    1. Content-Type
    2. Content-Length
    3. Cache-Control
    4. Set-Cookie
    5. Location
    6. Access-Control-Allow-Origin
    7. Access-Control-Allow-Methods
    8. Access-Control-Allow-Headers

#### CORS
    res.setHeader("Access-Control-Allow-Origin","*")

# Express JS
app.METHOD(PATH, HANDLER);
example: 
app.get("/",(req,res)=>{
    res.send("HELLO WORLD!")    // HANDLER
})

app --> express application
.get() --> HTTP GET METHOD
"/" --> URL PATH
(req,res) --> Request + Response
res.send --> Send response





# DATABASE
 Database = Organized permanent storage for application data
 CRUD - Create, Read, Update, Delete

### Database in web application
      req                   API                             Database Query              Result
 User ---> React / Browser -----> Node js --> Express .js ------------------> Mongo DB -------> Express.js ---> Browser


 User Clicks: "Show Students" --> GET /students -->Express-->Mongo DB-->Students Record -->Express -->JsonRes-->Browser

 ### DBMS - Database Management System
 - Mysql
 - Oracle
 - MongoDB
 - Postgre SQL


 ### Types in DB
    - SQL :Relational (Table Format)
    - NoSQL :Non-Relational (Document)
1. SQL Database
    - MySQL
    - PostgreSQL
    - Oracle
    - SQL server
2. NoSQL Database
    - MongoDB
    - Redis
    - Cassandra
    - DynamoDB
{
    "_id":1,
    "name":"AB",
    product:[1,2,3,4],
    address:{
        city:"",
        state:"",
    }
}

### SQL vs MONGODB
1. Table - Collection
2. Row - Document
3. Column - Field
4. SQL Query - MongoDB Query
5. Primary Key - _id

Example
students table
 ID  | Name  | Age
 1   | AB    | 23

SELECT * FROM  students;

 MongoDB
 students
 {
    _id:1,
    name:"AB"
 }
  {
    _id:2,
    name:"Kanagu"
 }
 
 Students.find()

### BSON - Binary Json
DataTypes:
    1. ObjectId
    2. Date,
    3. Binary Data,
    4. Decimal
Every MongoDB document normally has a unique _id
 {
    _id:ObjectId(1223231212121.....),
    name:"Kanagu"
 }

 #### How to start MongoDB - CMDLine
 1. Open CMD in Administrator mode
 2. Run `net start MongoDB`
 3. mongosh

### Check Current Database
    `db`
### Create / Switch Database
    use <databaseName>
### Show All Database
    `show dbs`
### Show Collections
    `show collections`
### Create Collections
    `db.createCollection("products")`
### Insert Document
    `db.products.insertOne({name:"laptop",price:50000,stock:10})`
### View the document
    `db.product.find()`
    `db.product.findOne()`
### Update
    `db.products.updateOne()`
    `db.products.updateMany({category:"Footwear"},{$set:{discount:25}})`
    -$inc -> Increament
        `db.products.updateOne({brand: 'Nike'},{$inc:{stock:5}})`
    -decrement
        `db.products.updateOne({brand: 'Nike'},{$inc:{stock:-5}})`
    $unset -> remove field
        `db.products.updateOne({brand: 'Nike'},{$unset:{temp:""}})`
    
### Delete 
    `db.products.deleteOne()`
    `db.products.deleteMany({$or:[{price:50000},{price:30000}]})`
### Comparison Operators
    - $gt -> greater than
        `db.products.find({price:{$gt:50000}})`
    - $gte -> greater than or equal
        `db.products.find({price:{$gte:58999}})`
    - $lt -> less than
        `db.products.find({price:{$lt:50000}})`
    - $lte -> less than or equal
        `db.products.find({price:{$lte:50000}})`
    - $eq -> equal
        `db.products.find({price:{$eq:4000}})`
    - range query
        `db.products.find({price:{$gte:10000,$lte:30000}})`
    - $ne -> not equal
        `db.products.find({price:{$ne:4999}})`
    - $in -> products with these prices
        `db.products.find({price:{$in:[4999,10000,40000]}})`
    - $nin -> not include
        `db.products.find({price:{$nin:[4999,10000,40000]}})`
### Logical Operators
    - or, and, nor, not
    
    db.products.find({
        $or:[
            {discount:{$lt:15}},
            {category:{$eq:"Footwear"}}
        ]
    })
### Quering
    - Array
        `db.products.find({tags:"sports"})`
    - Nested fields
        `db.products.find({"specifications.size":"10"})`
### Projection
    Get only specific fields
        `db.products.find({},{name:1,_id:0,price:1})`
        `[
            { name: 'iPhone 15', price: 69999 },
            { name: 'Galaxy S24', price: 74999 },
            { name: 'MacBook Air M3', price: 114999 },
            { name: 'Dell Inspiron 15', price: 58999 },
            { name: 'Sony WH-1000XM5', price: 29999 },
            { name: 'AirPods Pro 2', price: 24999 },
            { name: 'Nike Air Max', price: 8999 },
            { name: 'Adidas Ultraboost', price: 10999 },
            { name: "Levi's Denim Jacket", price: 4999 },
            { name: 'Samsung 55 inch 4K TV', price: 64999 }
        ]`

### Aggregate

db.collection.aggregate([
    {stage1},{stage2},{stage3}
])

db.products.aggregate([
    {
        $match:{
             category: 'Computers'
        }
    },
    {
        $sort:{
            price:1
        }
    },{
        $limit:1
    },{
        $project:{
            name:1,category:1,price:1,_id:0
        }
    }
])

db.products.aggregate([
    
    {
        $group:{
            _id:null,
            maxPrice:{$max:"$price"}
        }
    }
])
db.products.aggregate([
    {
        $group:{
            _id:"$category",
            maxPrice:{$max:"$price"},
            minPrice:{$min:"$price"},
            Total:{$sum:"$price"},
            Average:{$avg:"$price"},
            count:{$sum:1}
        }
    }
])

### MongoDB Express Config
    - Mongoose (ODM)
    - use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
### MVC Run CMD
    AB_MERN\Backend\inventoryManagement> node --watch src/server.js

    
### Replica
Server 1 - primary
server 2 - secondary
server 3 - secondary



serevr 1 - X  
server 2 - primary
server 3 - secondary




server 1 - secondary
server 2 - primary
server 3 - secondary


server 1
A
B
C

-----X----
D
E
F
G
-----server 1 -----

mongondb oplog

server 2 primary
    |
    |   oplog operations
    |
server 1 secondary

D
E
F
G

Now server 1 has
A
B
C
D
E
F
G

### .ENV (.env) environment variables
USERNAME="AB"
HOST_URI=""