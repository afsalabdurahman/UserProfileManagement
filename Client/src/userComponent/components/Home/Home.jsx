import React from 'react'
import './Home.css'
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
function Home() {
    const profileData = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Tech Street, Silicon Valley, CA 94025",
        image: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png",
        social: {
          github: "https://github.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          twitter: "https://twitter.com/johndoe",
          website: "https://johndoe.com"
        }
      };
    return (
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-image-container">
              <img 
                src={profileData.image} 
                alt={profileData.name} 
                className="profile-image"
              />
            </div>
            
            <div className="profile-info">
              <h1 className="profile-name">{profileData.name}</h1>
              
              <div className="profile-details">
                <div className="detail-item">
                  <Mail className="detail-icon" />
                  <span>{profileData.email}</span>
                </div>
                
                <div className="detail-item">
                  <Phone className="detail-icon" />
                  <span>{profileData.phone}</span>
                </div>
                
                <div className="detail-item">
                  <MapPin className="detail-icon" />
                  <span>{profileData.address}</span>
                </div>
              </div>
            </div>
          </div>
    
          <div className="social-links">
            <a 
              href={profileData.social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Github className="social-icon" />
              <span>GitHub</span>
            </a>
            
            <a 
              href={profileData.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Linkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href={profileData.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <Twitter className="social-icon" />
              <span>Twitter</span>
            </a>
            
            <a 
              href={profileData.social.website} 
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
