import React, { cloneElement, useEffect, useState } from 'react';
import { Search, Bell, Settings, Menu, User, Users, Box, LogOut } from 'lucide-react';
import './AdminDashboard.css';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { addUser } from '../../../../app/userSlice';
import { findUser } from '../../../../app/searchquery';
import { add_all_users } from '../../../../app/alluserSlice';
import { useNavigate } from 'react-router';

import { data } from 'react-router';
const AdminDashboard = () => {
    let navigation1 = useNavigate()
    let [state1, setState] = useState(1)
    const dispatch = useDispatch();
    let navigation = useNavigate()
    let navigate = useNavigate()
    //edit user
    const editUser = (e) => {
        console.log(e)
        dispatch(findUser(e))
        navigate('/editform')
    }
    ///
    let [Data, setData] = useState([])
    let [result, setResult] = useState({ name: "" })
    let token = useSelector((state) => {
        return state.users[0].token
    })
   // const searchQuery = useSelector((state) => state.search.searchQuery);
   // console.log(searchQuery)
   const allUsers = useSelector((state) => state.alluser);
    // async function alluserData() {
    //     useSelector((state) => state.alluser);
    // }
    useEffect(() => {
        // If there's no search query, reset the result
        // alluserData()
        // if (!searchQuery) {
        //     setResult(null);
        //     return;
        // }

        // Find the user whose FirstName matches the search query
        const foundUser = allUsers.map((user) => {
            console.log(user, "yyyyyyyyyyyyyyrr")
            user.forEach((e) => {
                if (e.FirstName == searchQuery) {
                    setResult({ name: e.FirstName })
                    console.log(e, "000000000000000000000")
                }
            })
        })

        console.log(result, "fiondddddddd")
        if (foundUser) {
            console.log(foundUser, "find users");
            setResult(foundUser);
        } else {
            console.log("No user found");
            setResult(null);
        }
    }, [searchQuery, allUsers, state1]); // Runs whenever searchQuery or allUsers change

    console.log(result, "finalllllllllllll")
    // let serach = useSelector((state) => {
    //     let userName = state.search.searchQuery
    //     console.log(state.alluser, "staeeeeeee")
    //     state.alluser.map((user) => {
    //         user.map((e) => {
    //             if (e.FirstName == userName) {
    //                 console.log(e, "find users")

    //                 setResult(e)

    //             }
    //         })
    //     })
    // })
    // console.log(result, "secsrcseeh")


    console.log(result, "resulttttttt")




    useEffect(() => {
        fetchDta()
    }, [Data])
    const fetchDta = async () => {
        axios.get('http://localhost:3000/admin').then((data, response) => {
            console.log(data.data.datas, "dataaaa")
            setData(data.data.datas)
            dispatch(add_all_users(data.data.datas))

        })
    }




    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // delete
    let deleteUser = (id) => {
        console.log(id)
        setState(state1 + 1)
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to proceed?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://localhost:3000/admin/deleteuser', { id: id }).then((res) => {
                    Swal.fire('Confirmed!', 'You have confirmed the action.', 'success');
                    setState(state1 + 1)
                    fetchDta()
                    // navigation1('/admin')
                })
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


                {/* User Management Section */}
                <section className="content-section">
                    <div className="section-header">
                        <h2>User Management</h2>
                        <p>{state1}</p>
                        <button className="add-user-btn" onClick={(() => navigation('/adduser'))}>Add New User</button>
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
                                {Data.map(user => (
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