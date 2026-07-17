// ONCLICK

const subBtn=document.getElementById("subBtn")
console.log(subBtn)
subBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    // console.log("Submit Clicked!")
    // const form = document.getElementById("empForm")
    // const data =new FormData(form)
    // console.log(Object.fromEntries(data.entries()))
})



// SUBMIT EVENT
//    const form = document.getElementById("empForm")
//     document.getElementById("termsCondition0").addEventListener("change",function(event){
//         console.log(event.target.checked)
//     })

//     form.addEventListener("submit",function(event){
//     event.preventDefault()
//     const data =new FormData(form);
//     const empDetails=Object.fromEntries(data.entries())
//     console.log(empDetails)

//     })

// DOUBLE CLICK
// document.addEventListener("keyup",(event)=>{
//     event.preventDefault()
//     console.log("Double Submit Clicked!",event)
//     const form = document.getElementById("empForm")
//     const data =new FormData(form)
//     console.log(Object.fromEntries(data.entries()))
// })
const input = document.getElementById("empName")
console.log(input)

input.addEventListener("focus",()=>{
    console.log("user clicked")
})
input.addEventListener("change",(e)=>{
    console.log(e.target.value)
})
 
input.addEventListener("input",(e)=>{
    if(e.target.value.includes("@")){
        input.classList.add("inputErr")
        document.getElementsByClassName("err_text")[0].style.display="block"
        subBtn.disabled=true
    }
    else{
        input.classList.remove("inputErr")
        document.getElementsByClassName("err_text")[0].style.display="none"
    }
    console.log(e.target.value)
})
 