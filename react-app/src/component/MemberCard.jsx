const MemberCard=({member})=>{
    return <li>
        <p style={{margin:"0px"}}>
            ID:{member.id}
        </p>
        <p style={{margin:"0px"}}>
            Name:{member.name}
        </p>
        <p style={{margin:"0px"}}>
            Role:{member.role}
        </p>
    </li>
}
export default MemberCard