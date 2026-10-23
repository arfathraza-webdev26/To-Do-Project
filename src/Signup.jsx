import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const Signup = () => {
let [user, setUser]= useState({
    username:"",
    email:'',
    password:"",
    
})
let navigate = useNavigate();
let handleChange=(e)=>{
     
    setUser({...user, [e.target.name] :e.target.value });
}

let handleSubmit = (e) =>{
    
    e.preventDefault();
    let payload = user;
    axios.post("http://localhost:4000/users",payload);
    alert(`To do list for ${user.username} created successfully`);
    navigate("/")
    

}

  return (
    <div id='signupPage'>
        <label htmlFor="username">Username:</label>
        <input type="text" name='username' id="username" onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" onChange={handleChange} />

        <label htmlFor="pass">Passowrd:</label>
        <input type="password" name='password' id="pass" onChange={handleChange}/>

        <button onClick={handleSubmit}>Signup</button>
        <button>Reset</button>

         <Link to="/">I have an Account!</Link>
    </div>
  )
}

export default Signup
