let table = new DataTable('#dataTableTest');
const divide=(a,b)=>{
    if(b===0){
        throw new Error("Division By zero is not aplicable")
    }
    return a/b
}
// try{
//     console.log(a)
// } catch(err){
//     console.log("ERR",err)
// }
// finally{
//     console.log("Finally")
// }
try{
//    console.log( divide(10,0))
} catch(err){
    console.error("ERR",err)
}

const newPromise= new Promise ((resolve,reject)=>{
    // let success=true;
    if(true) resolve("Operation Completed")
    else reject("Operation failed")
})
// console.log(newPromise)
// newPromise.then((result)=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })

const getUser=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                id:1,
                name:"AB"
            })
        },2000)
    })
}
const getOrder=(id)=>{
    if(id===1)
    return Promise.resolve([
        "Laptop","Mobile"
    ])
    return Promise.reject("Not a valid user")
}
// console.log("getUser()",getUser())
// getUser().then(result=>{
//     console.log(result)
//     return result.id
// }).then(id=>{
//     getOrder(id).then(res=>console.log(res))
  
// })


// const p1= Promise.resolve("A")
// const p2 =Promise.resolve("B ")
// const p3=Promise.reject("C  is failed")
// Promise.all([p1,p2,p3]).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })
// ASYNC/AWAIT

async function greet() {
    return "hello"
}
greet().then(res=>{
    console.log(res)
})

function fetchData(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            reject("Data loaded")
        },2000)
    })
}
async function loadData() {
    try{
        const res= await fetchData()
    console.log(res.id)
    }
    catch(err){
        console.log("err",err)
    }
}
loadData()