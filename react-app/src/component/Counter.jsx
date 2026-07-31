import React, { useState } from "react";

function Counter (){
    const [count,setCount]=useState(0)
    
    const element = React.createElement("div",null,React.createElement("h1",null,"title"),React.createElement("p",null,"paragrapg"))
//     return (
//   <>
//      <div>
//          <h1>Title</h1>
//         <p>Paragraph</p>
//    </div>
//    <div>
//          <h1>Title</h1>
//         <p>Paragraph</p>
//    </div>
//   </>
//     )
    return <>
    

    <h1 className="test">{count==0?"Zero":count}</h1>
    <button onClick={
       ()=>{
         setCount(count+1)
       }
    }>Count ++</button>
    </>
}

export default Counter