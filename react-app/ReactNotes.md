#PRODUCTION
        CODE PULLING
            |
        DELETE OLDER FILES
            |
        PLUGIN INSTALLATION
            |
        CODE BUILD -> index.html
            |
        (NPM START) --> running Server

#DEVELOPERS
        CODE PULLING
            |
        PLUGIN INSTALLATION (npm install / npm i)
            |
        RUN DEVELOPMENT SCRIPT CMD





30-07-2026

Virtual DOM
APP
|- h1 
|   0
|
|_ button

count ++
count = 1


OLD Virtual DOM
h1
0

New Virtual DOM
h1
1

reconsiliation



JSX - JAVASCRIPT XML
Javascript syntax that looks like html

JSX return only one parent element
    -use `div`
    -Fragment - Don't extra html
    - Close Every Tag
        -<img src="logo.png" />
    
onclick-->onClick

04/08/2026

# Hooks in React
- Hooks are special functions introduced in react 16.8
- let you use reac features like
    - State
    - lifeCyles methods
    - Context
    - Refs
    - Performance Optimizations
inside the functional component

# STATES IN REACT (useState)
Data managed by React that can change, causing the component to re-render automatically.



"NOTES: 
# Class component

Class App extends React.Component{
    state={
        count:0
    }

    render(){
        return <h1>{this.state.count}</h1>
    }
}

# Functional Component

``` 
import {useState} from "react";

function App(){
    const [count,setCount]=useState(0)
    return <h1>{count}</h1>
}

```
# 2.Hooks : useEffect
1. Runs code after rendering
    - **Syntax**
    ```useEffect(() => {
     <statements>
    },[dependencyArray])```


# 3. Hooks : useRef
# 4. Hooks : useContext()
# 5. Hooks : useReducer
    const [state,distpatch]=useReducer(reducer,initialState)

    example: const [count,setCount]=useState(0)
    {
        userName:
        age:
        email:
        phone:
        isLogged:
    }
    
# 6. Hooks : useMemo
 Render
  ↓
Did search/category/sort change?
  │
  ├── NO → use previous result
  │
  └── YES → filter + sort


# FORMS:
    1. Controlled Components
    2. UnControlled Components
# FORMS CONTROLLED COMPONENTS
 Form element whose value is controlled by states