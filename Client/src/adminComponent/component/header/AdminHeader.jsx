import React from 'react'
import '../dashBoard/AdminDashboard.css'
import { useState } from 'react';
import { Search, Bell, Settings, Menu, User, Users, Box, LogOut } from 'lucide-react';
function AdminHeader() {
        const [searchQuery, setSearchQuery] = useState('');
        const toggleSidebar = () => {
            setSidebarOpen(!sidebarOpen);
        };
        const handleSearch = (e) => {
            setSearchQuery(e.target.value);
        };
    
  return (
    <div>
       <header className="dashboard-header">
                    <div className="header-left">
                        <button className="menu-toggle" onClick={toggleSidebar}>
                            <Menu size={24} />
                        </button>
                        <div className="search-bar">
                            <Search size={20} />
                            <input 
                                type="text" 
                                placeholder="Search users..."
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                    <div className="header-right">
                        <button className="notification-btn">
                            <Bell size={20} />
                            <span className="notification-badge">3</span>
                        </button>
                        <div className="user-profile">
                            <div className="profile-image">
                                <User size={20} />
                            </div>
                            <span>Admin User</span>
                        </div>
                    </div>
                </header>
    </div>
  )
}

export default AdminHeader
