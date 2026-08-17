import { useRef, useState } from "react"

const UnControlledLoginForm=()=>{
    // const [name,setName]=useState("AB");
//    const emailRef=useRef(null)
//    const pwdRef=useRef(null)
    const formRef=useRef({})
  

    return (
        <form onSubmit={(e)=>{
e.preventDefault()
console.log(
    formRef.current,
    {
        email:formRef.current.email.value,
        pwd:formRef.current.pwd.value
    }
)
        }}>
            <label>Email:</label>
            <input type="email"  ref={(element)=>(formRef.current.email=element)} />
             <label>Password:</label>
             <input type="password" ref={(element)=>(formRef.current.pwd=element)} />
            <button type="submit">Submit</button>
        </form>
    )
}
export default UnControlledLoginForm