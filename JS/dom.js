// SECLECTION
// console.log(document.getElementById("empName"))
// console.log(document.getElementsByClassName("err_text"))
// console.log(document.getElementsByTagName("input"))
// QUERY SELECTOR
// console.log(document.querySelector("#empName"))
// console.log(document.querySelectorAll("#empName"))

// Changing Content
document.querySelector("[for=termsCondition0]").innerHTML="<strong>Testing</strong>"
document.querySelector("[for=termsCondition0]").textContent="Remember Me Text"
document.querySelector("[for=termsCondition0]").id="termsCondition0_js"

const element=document.querySelector("[for=termsCondition0]")
element.style.fontSize=""
// console.log(element.style.color="red")
// element.classList.add("active")
// element.classList.remove("active")
// element.classList.toggle("active")
element.classList.contains("active")?console.log("Hi"):""

console.log(element.classList)


const newPara=document.createElement("p")
newPara.id="newPara"
newPara.textContent="Created from JAVASCRIPT using document.createElement"
document.body.appendChild(newPara)

document.getElementById("newPara").remove()

const head6=document.createElement("h6")
head6.textContent="Created and Replaced with JS"

element.replaceWith(head6)
console.log(document.querySelectorAll("form")[3].innerHTML="")
// document.getElementsByTagName("form")[0].style.display="none"
// document.addEventListener("scroll",()=>{
//     document.getElementsByTagName("form")[0].style.display="block"
// })