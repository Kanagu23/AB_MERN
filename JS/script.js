import square1,{addition} from "./math.js"
// import * as math from "./math.js"


// Global Values
const PI=3.14










// use strict
// console.log("Hello World! from External JS")

// Var, let, const

// var name = 'Kanagu'
// let num=10
// const PI=3.14
let isStudent=0
// let x;
// let y=null


// let person={
//     name:"John",
//     age:25
// }
// let colors= ["Red","Blue","Green"]


// console.log(typeof name, typeof num, typeof PI, typeof isStudent, x,y,person,colors)


// Operators
// let a=10.2334556;
// let b=5;
// // Arithmetic
// console.log("Add:",parseFloat(a+b).toFixed(2),"\n","Sub:",a-b,"\n","Mul:",a*b,"\n","Div:",a/b,"\n","Modulo:",a%b)
// // Assignment
// let x=5
// x+=2
// x-=1
// console.log(x)

// // Comparison

// console.log(
//     10>5,
//     10<5,
//     10=="10",
//     10==="10",
//     10!="10",
//     10!=="10"
// )

// Logical Operators

// &&, || , !
// let age =30
// // console.log(age>20 && age <35 && age==31)
// // console.log(age>20 || age <25 || age==31)
// console.log(!isStudent)


let number=16

// if(number%2==0) {
//     console.log("Even")
//     if(number>18){
//         console.log("You are eligible to apply license")
//     }
// }
// else if(number==21){
// console.log("You are eligible to vote")
// }
// else{
//     console.log("Odd")
//     if(number>18){
//     console.log("You are eligible to apply license")
//     }
// }

// Switch
// let day=1
// switch(day){
//     case 1: 
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Unknown")
// }
// condition?truestatement:falsestatement
// console.log(number%2==0?"Even":"Odd")

// Loops
// for(let i=1;i<=5;i++){
//     console.log(i)
// }

// let i=1
// while(i<1){
//     console.log(i)
//     i++
// }

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<1)





// 13/07/2026

// FUNCTIONS
// function <functionName>(<parameters>){
//     statement
// }

// function greetings(name){
//     console.log("Hello! "+name);
// }
// // greetings("AB");
// // greetings("Kanagu");
// // greetings("Viswa")
// function add(a,b){
//     let radius=4
//     console.log("Inner",PI*(radius*radius))
//     return a+b;
// }
// add(20,55)

// let result=`Sum of 10+20 is ${add(10,20)}, sum of 30+45 is ${add(30,45)} and sum of 100+200 is ${add(100,200)}`
// console.log(result)



// const subract = function (){
// return 10-5;
// }
// console.log(subract())

// Arrow Function

// const subtract =(a,b)=>{
// return a-b;
// }

// const subtract =(a,b)=>a-b;
// console.log(subtract(20,10))

// console.log("Outer",PI*(radius*radius))

// if(true){
//     var z=1000
//     let x=100
//     const y=10000
//     // console.log(x)
// }
// console.log(z)
// console.log(x)
// console.log(y)

// function outer (){
//     console.log("Outer")
//     let age = 26
//     function inner(){
//         console.log("Inner",age)
//     }
//     inner()
// }

// outer()

// console.log(square1(8),addition(10,20))


// 14/07/2026

// function outer (){
// let count=0
// return function (){
//     count ++;
  
//     console.log(count)
// }
// }

// const counter =outer();

// counter();
// counter();
// counter();
// counter();
// sayHello();
// // function sayHello(){
// //     console.log("Hello")
// // }

// const sayHello= function(){
// console.log("Hello")
// }



// let students=["John","David","Sam"]
// console.log(students[2])
// let staffs= new Array("AB","Kanagu","Viswa")
// // console.log(staffs)
// // console.log(staffs[1])


// students[1]="Ramesh"
// // console.log(students)
// // console.log(students.length)
// let data=[
//     "John",25,true,95.5,null,{a:1}
// ]
// // console.log(data)

// // let numbers=[[1,2],
// //              [3,4],
// //              [5,6]  ]

// // console.log(numbers[1][1])


// let colors=["Red","Yellow","Green"]
// colors.push("Blue")

// // console.log(colors)
// // console.log(colors.pop(),colors)
// // colors.unshift("Blue")
// // console.log(colors)
// // colors.shift()
// // console.log(colors)
// console.log(colors.indexOf("Yellow"))

// console.log(colors.includes("Red"))
// console.log(colors.join(""))
// console.log(colors.reverse())
// console.log(colors.sort())
// console.log(students.concat(colors))


// for(let index=0;index<colors.length;index++){
//     console.log(index,":",colors[index])
// }


// // for of 

// // for (const color of colors ){
// //     console.log(color)
// // }

// // ForEach

// let foeachRes=colors.forEach((each,index)=>{
//     // console.log(each,index)
//     return each;
// })
// console.log(foeachRes)

// //  MAP
// let numbers=[1,2,3,4,5,6,7,8,9,10,11,12]
// let mapRes = numbers.map((num)=>{
//     return num*2
// })
// console.log(mapRes,numbers)

// let even =numbers.filter((num)=>num>9)
// console.log(even,numbers)
// console.log(numbers.find((num=>num>9)))


// let userData={

//     "John":{
//         age:45,
//         score:97,
//     },
//      "Ab":{
//         age:30,
//         score:100,
//     }
// }
// console.log(userData["John"])


// 16/07/2026

// {key:Value}

let students={
   1:{ name:"John",
    age:22,
    course: "javascript",
    },
    2:{
         name:"AB",
    age:25,
    course: "javascript",
    grade:[95,23,56,78,99],
    greet:function(){
        console.log("hello",this.name)
    }
  
    },
 greet:function(){
        // console.log("hello",this)
    }
  
}
// students.John.isSports=true
// students["AB"]["age"]=56

// {
//     prop1:propValue
//     prop2:prop2Value
// }
// {dataKey,data2Key}

let person = new Object()
person.name="Kanagu"
person.age=26
person.isSports=true
person.phone=9876543210

let {name,...restData}=person
console.log(name,restData)

students.greet()

// FOR IN

for (let key in students){
    if(students[key].name=="AB")
        console.log(students[key])
}

// console.log(Object.keys(students))
// console.log(Object.values(students))
console.log(Object.entries(students))

const arr=[1,2,3,4,5]
let [a,b,...rest]=arr
console.log(a,b,rest)