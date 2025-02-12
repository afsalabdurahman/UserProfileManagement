import React from 'react'
import { Home, Lock, UserCog, Layout,LogOutIcon } from 'lucide-react';
import './Header.css';
import { BrowserRouter, Routes, Route, Link } from "react-router";
function Header() {
    const currentPath = window.location.pathname;
    return (
        <header className="header">
          <div className="nav-links">
            <a 
              href="/" 
              className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
            >
              <div className="flex items-center gap-2">
                <Home size={18} />
                <span>Home</span>
              </div>
            </a>
    
            <a 
           
              className={`nav-link ${currentPath === '/change-password' ? 'active' : ''}`}
            >
              <div className="flex items-center gap-2">
                <Lock size={18} />
                
                <Link to='/changepassword'>Change Password</Link>
              </div>
            </a>
    
            <a 
            
              className={`nav-link ${currentPath === '/edit' ? 'active' : ''}`}
            >
              <div className="flex items-center gap-2">
                <UserCog size={18} />
                <span></span>
                <Link to='/edit'>Edit Profile</Link>
              </div>
            </a>
          </div>
          <a 
         
              className={`nav-link ${currentPath === '/login' ? 'active' : ''}`}
            >
              <div className="flex items-center gap-2">
                <LogOutIcon size={18} />
                <span></span>
                <Link to='/login'>Logout</Link>
              </div>
            </a>
        </header>
      );
}

export default Header
