import React from 'react'
import "./Login.css"
import { Mail, Lock } from 'lucide-react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router";




function Login() {
    let [email,setEmail]=useState()
    let [password,setPassword]=useState()
    const handleSubmit = (e) =>{
e.preventDefault()
        console.log("working",email,password)
    }
    return (
        <div className="login-container">
          <div className="overlay" />
          
          <div className="login-card">
            <div className="card-header">
              <h2 className="card-title">Welcome Back</h2>
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
