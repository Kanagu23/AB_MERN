import { useState } from "react"
import Counter from "./component/Counter"
import ColorList from "./component/List"
import NameInput, { UserProfile } from "./component/State"
import CountWithEffect from "./component/CountWithEffect"
import SearchBox from "./component/SearchBox"
import MemberList from "./component/MemberList"
const DATA=[
  {name:"AB",role:"Software Developer",id:123},
  {name:"Kanagu",role:"Team Lead",id:456},
  {name:"Raj",role:"Trainee",id:789},
  {name:"Viswa",role:"Software Tester",id:101},
  {name:"Saro",role:"GO Developer",id:102},
  {name:"Muthu",role:"Backend Developer",id:103},
  {name:"Dhanush",role:"MERN Developer",id:104},
  {name:"Subash",role:"Full stack Developer",id:105}

]

function App() {
// let colorList=["White","Navy","Black","Brown"]
//  const [isLoggedIn,setIsLoggedIn]=useState(true)
const [searchTerm,setSearchTerm] = useState("")

const handleSearch=(e)=>{
const searchValue=e.target.value
setSearchTerm(searchValue)
}
 

  return (
    <>
    {/* {isLoggedIn?<>
    
     <ColorList colors={colorList}  isLoggedIn counter={ <Counter/>}/>
     <ColorList />
    </>:<h1>Please login</h1>} */}

    {/* 04/08/2026 */}

    {/* <NameInput/>
    <UserProfile/> */}
    {/* <button onClick={()=>{
      setIsLoggedIn(!isLoggedIn)
    }}>Toggle Is Logged In</button>
    {isLoggedIn?<CountWithEffect/>:""} */}
    <SearchBox handleSearch={handleSearch}/>
    <MemberList members={DATA} searchTerm={searchTerm}/>
    </>
  )
}

export default App
