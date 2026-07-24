// console.log($("#dataTableTest").show())

// let xhr= new XMLHttpRequest();
// xhr.open("GET","https://jsonplaceholder.typicode.com/users",true)
// xhr.onload=()=>{
// console.log(JSON.parse(xhr.responseText))
// }
// xhr.send()

// const res=fetch ("https://jsonplaceholder.typicode.com/posts/1")
// res.then((result)=>{
// return result.json()
// }).then(data=>{
//     console.log(data)
// })

const getPost= async() => {
    try {
        const response=await fetch(" http://localhost:3004")
        let data="No data"
        if(response.status==200)
            data=await response.json()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
getPost()