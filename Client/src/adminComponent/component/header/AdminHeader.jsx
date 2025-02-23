import React, { useEffect } from 'react'
import '../dashBoard/AdminDashboard.css'
import { useState,useCallback } from 'react';
import {searchUser} from '../../../../app/searchquery'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Search, Bell, Settings, Menu, User, Users, Box, LogOut, } from 'lucide-react';
function AdminHeader() {

    let adminName=useSelector((state)=>{
        console.log(state,"stateeesss")
        if(state.users[0]){
            return state.users[0].admin.FirstName
        }else{
            return null
        }


    })
  return (
    <div>
       <header className="dashboard-header">
                    <div className="header-left">
                        <button className="menu-toggle" >
                            <Menu size={24} />
                        </button>
                        {/* <div className="search-bar">
                            <Search size={20} />
                            <input 
                                type="text" 
                                placeholder="Search users..."
                                value={searchQuery}
                                onChange={(e)=>setSearchQuery(e.target.value)}
                            />
                            
                        </div> */}
                        {/* <button onClick={search}  >Search</button> */}
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
                            <span>Admin {adminName?adminName:null}</span>
                        </div>
                    </div>
                </header>
    </div>
  )
}

export default AdminHeader
