import React from 'react'
import "./Login.css"
import { Mail, Lock } from 'lucide-react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link,useNavigate } from "react-router";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser, updateUser } from '../../../../app/userSlice';

function Login() {
let navigate=useNavigate()
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  let [user,setUser]=useState()
  let [token,setToken]=useState()
    let [email,setEmail]=useState()
    let [error,setError]=useState()
    let [password,setPassword]=useState()
    const handleSubmit = (e) =>{
e.preventDefault()
        console.log("working",email,password)

axios.post("http://localhost:3000/login",{
  email,
  password
}).then((resp)=>{
  console.log(resp.data,"adminnnnnnn")
  if(resp.data.respose.admin){
    let admin=resp.data.respose.admin
    let token=resp.data.respose.token
    let newUser={id: Date.now(), admin, token }
    setToken(token)
    dispatch(addUser(newUser))
    setUser(admin)
    navigate("/admin")
  }else{
  setUser(resp.data.respose.user)
  let user1=resp.data.respose.user
  let token1=resp.data.respose.token
  setToken(resp.data.respose.token)
  const newUser = { id: Date.now(), user1, token1 };
    dispatch(addUser(newUser));
    navigate("/")
  }
}).catch((error)=>{
  console.log(error.response.data.message)
   setError(error.response.data.message)
})



    }
    console.log(token,"tojken")
    console.log(user,"uxxxxxxxxx")
    return (
        <div className="login-container">
          <div className="overlay" />
          
          <div className="login-card">
            <div className="card-header">
              <h2 className="card-title">Welcome Back</h2>
              <p>{error}</p>
              <p className="card-subtitle">Please sign in to continue</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <Mail className="input-icon" />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="input-group">
                <Lock className="input-icon" />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
    
              <div className="remember-forgot">
                <label className="remember-me">
                  <input type="checkbox" className="checkbox" />
                  <span>Remember </span>
                </label>
                <a href="#" className="forgot-link">
                  
                  <Link to="/forgotpassword">Forgot password?</Link>
                </a>
              </div>
    
              <button type="submit" className="submit-button">
                Sign In
              </button>
    
              <p className="signup-text">
                Don't have an account?{' '}
                <a  className="signup-link">
                 <Link to="/register"> Sing up</Link>
                </a>
              </p>
            </form>
          </div>
        </div>
      );
  
}

export default Login
