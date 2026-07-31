import Counter from "./component/Counter"
import ColorList from "./component/List"

function App() {
const isLoggedIn=true
let colorList=["White","Navy","Black","Brown"]
console.log(colorList)

  return (
    <>
    {isLoggedIn?<>
    
     <ColorList colors={colorList}  isLoggedIn counter={ <Counter/>}/>
     <ColorList />
    </>:<h1>Please login</h1>}
    </>
  )
}

export default App
