import { useState } from "react"




export const UserProfile=()=>{
    const [user,setUser]=useState({
        name:"AB",
        age:29,
    })
    return(
        <>
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
        <button onClick={()=>{
            setUser({
                ...user,
                age:user.age+1
            })
        }}>Increase Age</button>
        </>
    )
}

const NameInput=()=>{
    
    const [text,setText]=useState("")
    // SYNTAX: const [variableName,setVariableName]=useState(initialValue)

    return (
        <>
        <input type="text" value={text}  onChange={(e)=>{
            setText(e.target.value)
        }} />
        <h2>Hello, {text}</h2>
        </>
    )
}
export default NameInput;