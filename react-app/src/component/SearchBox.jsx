import { useContext } from "react"
import { UserContext } from "../UserContext"

const SearchBox=({handleSearch})=>{
    const members=useContext(UserContext)
    console.log("SEARCH",members.userData)
    return <input type="text" placeholder="Search" onChange={handleSearch}/>
}
export default SearchBox