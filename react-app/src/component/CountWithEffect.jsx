import { useEffect, useState } from "react"

const CountWithEffect =()=>{
    const [count,setCount]=useState(0)
    const [name,setName] =useState("Kanagu")
    useEffect(() => {
      const timer =setInterval(()=>{
        console.log("Running")
      },1000)
    
      return () => {
        clearInterval(timer)
      }
    }, [])
    
    useEffect(() => {
     console.log(count)
    },[name])

    return <>
    <h1>{count}</h1>

    <button onClick={()=>{
        setCount(count+1)
    }}>Count + 1</button>

     <div style={{marginTop:"20px"}}>
         <input type="text" value={name}  onChange={(e)=>{
            setName(e.target.value)
        }} />
        <h2>Hello, {name}</h2>  
     </div>
    
    </>


}
export default CountWithEffect