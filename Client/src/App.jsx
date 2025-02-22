
import './App.css'
import Login from './userComponent/components/Login/Login'
import { BrowserRouter, Routes, Route, Link, } from "react-router";
import HomePage from './Pages/userPage/HomePage';
import EditProfile from './Pages/userPage/EditProfile';
import PageChangePassword from './Pages/userPage/PageChangePassword';
import Register from './userComponent/components/Register/Register';
import Otp from './userComponent/components/Otp/Otp';
import AdminDashBoardPage from './Pages/adminPage/dashBoardPage/AdminDashBoardPage';
import ForgotPassword from './userComponent/components/ForgotPassword/ForgotPassword';
import { useState } from 'react';
import { UrlContextProvider } from './ContextApi/Url';
import UserForm from './adminComponent/component/EditUser/UserForm';
import Adduser from './adminComponent/component/Adduser/Adduser';

function App() {
let [url,Seturl] = useState()
let data = (res)=>{
Seturl(res)
}

  return (
    <>
      <BrowserRouter>
      <UrlContextProvider>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={< Login />}></Route>
          <Route path='/edit' element={< EditProfile data={data} />}></Route>
          <Route path='/changepassword' element={< PageChangePassword />}></Route>
          <Route path='/register' element={< Register />}></Route>
          <Route path='/otp' element={< Otp />}></Route>
          <Route path='/forgotpassword' element={< ForgotPassword />}></Route>
          <Route path='/admin' element={< AdminDashBoardPage /> }></Route>
          <Route path='/editform'element={<UserForm/>}></Route>
          <Route path='/adduser'element={<Adduser/>}></Route>
        </Routes>
        </UrlContextProvider>
      </BrowserRouter>




    </>
  )
}

export default App
