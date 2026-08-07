import { useEffect, useState } from "react"
import MemberCard from "./MemberCard"

const MemberList=({members,searchTerm})=>{
    const [userData,setUserData]=useState(members)
    const handleDataFilter=()=>{
      
        if(searchTerm=="" || !searchTerm){
            setUserData(members)
            return;
        }
        const result=userData.filter(user=>{
           return user.name.toUpperCase().includes(searchTerm.toUpperCase()) ||  user.role.toUpperCase().includes(searchTerm.toUpperCase()) ||    user.id.toString().includes(searchTerm)
        })

        setUserData(result)
    }

    useEffect(()=>{
       handleDataFilter()
    },[searchTerm])
    return <ul style={{display:"flex",gap:"2rem"}}>
        { userData.map(member=><MemberCard key={member.id} member={member}/>)}
    </ul>
}
export default MemberList