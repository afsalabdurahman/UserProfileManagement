import React from 'react'
import { useState } from 'react'
import '../Login/Login.css'
import { Mail, Lock } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link } from "react-router";
function ForgotPassword() {
      let [email,setEmail]=useState()
   
        const handleSubmit = (e) =>{
    e.preventDefault()
            console.log("working",email)
        }
  return (
    <div className="login-container">
    <div className="overlay" />
    
    <div className="login-card">
      <div className="card-header">
        <h2 className="card-title">Reset Password</h2>
        <p className="card-subtitle">Please enter  to continue</p>
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
        
        

      

        <button type="submit" className="submit-button">
        
          <Link to='/otp'>Get Otp</Link>
        </button>

      </form>
    </div>
  </div>
  )
}

export default ForgotPassword
