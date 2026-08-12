import { useReducer } from "react"



const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return state+ action.payload
        case "decrement":
            return state-1
        case "reset":
            return 0
        default:
            return state

    }
    
}

const UserReducerExample=()=>{
console.log("h")
    const [count,dispatch]=useReducer(reducer,0)

    return (<>
    <h2>Count: {count}</h2>
    <div>
        <button onClick={()=>dispatch({type:"decrement"})}>
    -
</button>
<button onClick={()=>dispatch({type:"reset"})}>
    Reset
</button>
<button onClick={()=>dispatch({type:"increment",payload:5})}>
    +
</button>
    </div>
    
    </>)
}
export default UserReducerExample