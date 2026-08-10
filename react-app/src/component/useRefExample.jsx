import { useContext, useRef } from "react"
import { UserContext } from "../UserContext"


const UseRefExample=()=>{
    const inputRef=useRef(null)
    const countRef=useRef(0)
    return (
        <>
        <input ref={inputRef}/>
        <button onClick={()=>{
            console.log(inputRef.current)
            inputRef.current.value="HI"
            inputRef.current.focus()
        }}>
            Focus
        </button>
        <h1>{countRef.current}</h1>
        <button onClick={()=>{
            countRef.current++
            console.log(countRef.current)
        }}>
            Increase
        </button>
        
        </>
    )

}
export default UseRefExample;