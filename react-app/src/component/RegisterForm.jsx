import { useState } from "react"

const RegisterForm=()=>{
    const [formData,setFromData]=useState({
        name:"",
        email:"",
        pwd:""
    })
    const [errors,setErrors]=useState({});
    const handleChange=(e)=>{
        validate()
        setFromData({
            ...formData,
            [e.target.name]:e.target.value
        })

    }
    const validate=()=>{
        const newErrors={}
        if(!formData.name || formData.name==""){
            newErrors.name="Name is required"
        }
         if(!formData.email || formData.email==""){
            newErrors.email="Email is required"
        }
         if(!formData.pwd || formData.pwd==""){
            newErrors.pwd="Password is required"
        }
        if(formData.pwd && formData.pwd.length<6){
            newErrors.pwd="Minimum 6 character required for password"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length==0
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(validate()){
            alert("!Registration Successful")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
           <input  type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} /> 
           <p>{errors.name}</p>
           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} /> 
           <p>{errors.email}</p>
           <input type="password" name="pwd" placeholder="Password" value={formData.pwd} onChange={handleChange} /> 
           <p>{errors.pwd}</p>
           <button type="submit">
            Register
           </button>
        </form>
    )
}
export default RegisterForm