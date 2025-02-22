import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux';


import { 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Github, 
    Linkedin, 
    Twitter, 
    Globe 
  } from 'lucide-react';
  import { useState,useEffect } from 'react';
  import { useContext } from 'react';
import { UrlContext } from '../../../ContextApi/Url';

function Home() {
  let [user,setUser]=useState()
  let {data}=useContext(UrlContext)
  console.log(data,"................data home")

  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (users && Object.keys(users).length > 0) {
      // Access the first user or whichever user you want from the state
      const firstUser = users[Object.keys(users)[0]]; // Get the first user from the object
      setUser(firstUser);
      console.log(user,"userssssss")
    }
  }, [users]);


      if (!user) {
        return <div>Loading...</div>; // Show loading if there's no user yet
      }
    return (
     
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-image-container">
              <img 
                src={data?data:"https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png"} 
                alt={name} 
                className="profile-images"
              />
            </div>
            
            <div className="profile-info">
              <h1 className="profile-name">{user.user1.FirstName}</h1>
              
              <div className="profile-details">
                <div className="detail-item">
                  <Mail className="detail-icon" />
                  <span>{user.user1.email}</span>
                </div>
                
                <div className="detail-item">
                  <Phone className="detail-icon" />
                  <span>{user.user1.mobile}</span>
                </div>
                
                <div className="detail-item">
                  <MapPin className="detail-icon" />
                  <span>{user.user1.address}</span>
                </div>
              </div>
            </div>
          </div>
    
          <div className="social-links">
            <a 
              href={""} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Github className="social-icon" />
              <span>GitHub</span>
            </a>
            
            <a 
              href={""} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Linkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href={""} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Twitter className="social-icon" />
              <span>Twitter</span>
            </a>
            
            <a 
              href={""} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Globe className="social-icon" />
              <span>Website</span>
            </a>
          </div>
        </div>
      );
}

export default Home
