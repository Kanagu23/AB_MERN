
const ColorList=({colors=["Red","Blue","Green","Orange"],isLoggedIn=false,counter})=>{

    // console.log(colors,isLoggedIn)
return (

    <>
    {counter}
     <ul>
        {colors.map((color,index)=><li key={`${index}_${color}`}>{color}</li>)}
    </ul>
    </>
   
)

}
export default ColorList


// [
//     <li>Red</li>,
//     <li>Blue</li>,
//     <li>Green</li>,
//     <li>Orange</li>
    
// ]