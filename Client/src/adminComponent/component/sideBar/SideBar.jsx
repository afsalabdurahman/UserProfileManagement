import React from 'react'
import '../dashBoard/AdminDashboard.css'
import { Search, Bell, Settings, Menu, User, Users, Box, LogOut } from 'lucide-react';
import { useState } from 'react';
function SideBar() {
        const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div>
       <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h2>Admin Panel</h2>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li className="active">
                            <Users size={20} />
                            <span>User Management</span>
                        </li>
                        <li>
                            <Box size={20} />
                            <span>Products</span>
                        </li>
                        <li>
                            <Settings size={20} />
                            <span>Settings</span>
                        </li>
                        <li className="logout">
                            <LogOut size={20} />
                            <span>Logout</span>
                        </li>
                    </ul>
                </nav>
            </aside>
    </div>
  )
}

export default SideBar
