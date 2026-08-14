import { useRef, useState } from "react"

const UnControlledLoginForm=()=>{
    // const [name,setName]=useState("AB");
   const emailRef=useRef(null)
   const pwdRef=useRef(null)
  

    return (
        <form onSubmit={(e)=>{
e.preventDefault()
console.log(
    {
        email:emailRef.current.value,
        pwd:pwdRef.current.value
    }
)
        }}>
            <label>Email:</label>
            <input type="email"  ref={emailRef} />
             <label>Password:</label>
             <input type="password" ref={pwdRef} />
            <button type="submit">Submit</button>
        </form>
    )
}
export default UnControlledLoginForm