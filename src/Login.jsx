import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let [userData, setData] = useState({
        username: '',
        password: '',
        
    });

    let [auth, setAuth] = useState([]);

    let handleChange = (e) => {
        let { name, value } = e.target;
        setData({ ...userData, [name]: value });
        
    }

    useEffect(
        ()=>{
            axios.get("http://localhost:4000/users")
            .then(x=> setAuth(x.data))
            .catch((err)=> alert("network error"));
             console.log(auth);
             
            
        } , []
    )
 let navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        let userDB = auth.find(
            (x)=>{ return (x.username === userData.username 
                || x.email === userData.username) && x.password === userData.password}
       
        );
   
        if(userDB)
        {
            alert("login success");
            navigate(`/mainparent/${userDB.id}`);
        }
        else{
            alert("invalid username or password");
        }
    
    }



    return (
        <div id='login'>

            <label htmlFor="username">Username:</label>
            <input type="text" name='username' id="username" onChange={handleChange} placeholder='Username or Email' />


            <label htmlFor="pass">Passowrd:</label>
            <input type="password" name='password' id="pass" onChange={handleChange} placeholder='Enter Password' />

            <button onClick={handleSubmit}>Login</button>
            <button>Reset</button>

             
            <Link to="/signup">New User / Signup</Link>

        </div>
    )
}

export default Login
