import React from 'react'
import SideBar from '../../../adminComponent/component/sideBar/SideBar'
import AdminDashboard from '../../../adminComponent/component/dashBoard/AdminDashboard'
import AdminHeader from '../../../adminComponent/component/header/AdminHeader'

function AdminDashBoardPage() {
  return (
    <div>
      <AdminHeader/>
      <SideBar/>
      <AdminDashboard/>
      
    </div>
  )
}

export default AdminDashBoardPage
