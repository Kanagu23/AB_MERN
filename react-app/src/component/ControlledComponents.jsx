import { useState } from "react"

const LoginForm=()=>{
    // const [name,setName]=useState("AB");
    const [userData,setUserData]=useState({
        emailId:"",
        pwd:""
    })
    const handleFieldChange=(e)=>{
        console.log({ [e.target.name]:e.target.value})
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }

    return (
        <form onSubmit={(e)=>{
e.preventDefault()
console.log(userData)
        }}>
            <label>Email:</label>
            <input type="email" value={userData.emailId} name="emailId" onChange={handleFieldChange}/>
             <label>Password:</label>
             <input type="password" value={userData.pwd} name="pwd" onChange={handleFieldChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default LoginForm