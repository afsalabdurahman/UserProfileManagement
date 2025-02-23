import React, { cloneElement, useEffect, useState } from 'react';
import { Search, Bell, Settings, Menu, User, Users, Box, LogOut } from 'lucide-react';
import './AdminDashboard.css';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { findUser } from '../../../../app/searchquery';
import { add_all_users } from '../../../../app/allUserSlice';
import {  useNavigate } from 'react-router';
const AdminDashboard = () => {
    let [data,setData]=useState([])
    const [isConditionMet, setIsConditionMet] = useState(1);
    const dispatch = useDispatch();
    let navigate = useNavigate()

   

    useEffect(() => {
    
    
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/admin');
                
                    setData(response.data.datas);
            
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    
        fetchData();
    
      
    }, [isConditionMet]); // Empty dependency array to run only on mount and unmount
    
    console.log(data,"statesss")
    // delete
    let deleteUser = (id) => {
        let deleteval=data.filter((users)=>{
            return users._id!==id
            })
            console.log(deleteval,"delete values")
            setData(deleteval)
        axios.post('http://localhost:3000/admin/deleteuser', { id: id }).then((res) => {
            console.log(res,"after dete reposnse")
          console.log(data,"state")
          console.log(id,"id")


             
             setIsConditionMet(isConditionMet+1)
         })
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to proceed?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
               
            } else {
                Swal.fire('Cancelvled!', 'Yuuou cancelled the action.', 'error');
            }
        })
    }

    //delete


    return (
        <div className="admin-container">



            {/* Main Content */}
            <main className="main-content">
                {/* Header */}


                {/* User Managementt Section */}
                <section className="content-section">
                    <div className="section-header">
                        <h2>User Management</h2>
                        
                        <button className="add-user-btn" onClick={(() => navigate('/adduser'))}>Add New User</button>
                    </div>

                    <div className="users-table-container">
                        <table className="users-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(user => (
                                    <tr key={user._id}>
                                        <td>{user.FirstName}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <span className={`role-badge `}>
                                                {user.isAdmin ? "Admin" : "User"}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`status-badge `}>
                                                {"Active"}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="edit-btn" onClick={() => editUser(user._id)}>Edit</button>
                                                <button className="delete-btn" onClick={() => deleteUser(user._id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;