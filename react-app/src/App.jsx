import { useState } from "react"
import Counter from "./component/Counter"
import ColorList from "./component/List"
import NameInput, { UserProfile } from "./component/State"
import CountWithEffect from "./component/CountWithEffect"

function App() {

let colorList=["White","Navy","Black","Brown"]
 const [isLoggedIn,setIsLoggedIn]=useState(true)
 

  return (
    <>
    {/* {isLoggedIn?<>
    
     <ColorList colors={colorList}  isLoggedIn counter={ <Counter/>}/>
     <ColorList />
    </>:<h1>Please login</h1>} */}

    {/* 04/08/2026 */}

    {/* <NameInput/>
    <UserProfile/> */}
    <button onClick={()=>{
      setIsLoggedIn(!isLoggedIn)
    }}>Toggle Is Logged In</button>
    {isLoggedIn?<CountWithEffect/>:""}
    </>
  )
}

export default App
