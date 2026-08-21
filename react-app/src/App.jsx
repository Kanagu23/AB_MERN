// import { useState } from "react"
// import Counter from "./component/Counter"
// import ColorList from "./component/List"
// import NameInput, { UserProfile } from "./component/State"
// import CountWithEffect from "./component/CountWithEffect"
// import SearchBox from "./component/SearchBox"
// import MemberList from "./component/MemberList"
// import UseRefExample from "./component/useRefExample"
// import { UserContext } from "./UserContext"
// import UserReducerExample from "./component/UseReducerExample"
// import Login from "./component/UseReducerExample2"
// import UseMemoExample from "./component/UseMemo"
import useFetch from "./useFetch"
import { Button, DatePicker, Flex } from 'antd';
import LoginForm from './component/ControlledComponents';
import UnControlledLoginForm from './component/UnControlled';
import RegisterForm from './component/RegisterForm';
import DataTable from './component/Datatable';
import Gallery from './component/Gallery';
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
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "User",
    status: "Active",
  },
];

const columns = [
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "email",
    label: "Email",
    sortable: true,
  },
  {
    key: "role",
    label: "Role",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (value) => (
      <span
        className={
          value === "Active"
            ? "status-active"
            : "status-inactive"
        }
      >
        {value}
      </span>
    ),
  },
];


function App() {
// let colorList=["White","Navy","Black","Brown"]
//  const [isLoggedIn,setIsLoggedIn]=useState(true)
//  const [userData,setUserData]=useState(DATA)
// const [searchTerm,setSearchTerm] = useState("")
const [data]=useFetch("http://localhost:3000/")
console.log(data)

// const handleSearch=(e)=>{
// const searchValue=e.target.value
// setSearchTerm(searchValue)
// }
 

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
    {/* <UserContext.Provider value={{userData,setUserData,members:DATA}}>
        <SearchBox handleSearch={handleSearch}/>
        <MemberList  searchTerm={searchTerm}/>
    </UserContext.Provider>
   */}

    {/* <UseRefExample/> */}
    {/* <UserReducerExample/> */}
    {/* <Login/> */}
    {/* <UseMemoExample/> */}


    {/* <Flex gap="small" wrap>
      <Button type="primary" size="small" loading>
          Loading
        </Button>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    <DatePicker/>
  </Flex> */}
  {/* <LoginForm/> */}
  {/* <UnControlledLoginForm/> */}
  {/* <RegisterForm/> */}
     {/* <DataTable
      data={users}
      columns={columns}
      pageSize={10}
      selectable={true}
    /> */}
    <Gallery/>
    </>
  )
}

export default App
