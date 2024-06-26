import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Login.scss'


const Login = () => {

    const [id,setId] = useState(0)
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const handleChange = (e) =>{
        if(e.target.name === "id")
          setId(e.target.value)
        if(e.target.name === "password")
          setPassword(e.target.value)
        console.log(id,password)
    }

    const handleLogin = async () =>{
        try {
            const res = await axios.post(`/login`, {
                id:id,
                password:password
            });

            navigate(`/coursespage/${id}`);
        } catch(err){
            setError("Incorrect login or password entered")
        }
    }

  return (
      <div className='background'>
          <div className='login'>

              <h1 style={{ backgroundColor: 'white' }}> Student Course Registration</h1>
              <h2>Student Login</h2>
              <h2>{error}</h2>
              <input type="text" placeholder='UserID' onChange={handleChange} name='id' required/>
              <input type="password" placeholder='Password' onChange={handleChange} name='password' required/>
              <button onClick={()=>handleLogin()}>Login</button>
              <p><Link to="/adminlogin">Admin Login</Link></p>
              <p><Link to="/registration">Sign up</Link></p>
          </div>
      </div>

  )
}

export default Login