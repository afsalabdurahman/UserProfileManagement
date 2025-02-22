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
              
              className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
            >
              <div className="flex items-center gap-2">
                <Home size={18} />
                <Link to="/">Home</Link>
              </div>
            </a>
    
           
    
            <p 
            
              className={`nav-link ${currentPath === '/edit' ? 'active' : ''}`}
            >
              <div className="flex items-center gap-2">
                <UserCog size={18} />
                <span></span>
                <Link to='/edit'>Upload Image</Link>
              </div>
            </p>
          </div>
          <a 
         
              className={`nav-link ${currentPath === '/login' ? 'active' : ''}`}
            >
              <a  href='/login'>
              <div className="flex items-center gap-2">
                <LogOutIcon size={18} />
                <span></span>
                Logout
              </div>
              </a>
            </a>
        </header>
      );
}

export default Header
