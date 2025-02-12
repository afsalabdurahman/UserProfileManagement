
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

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={< Login />}></Route>
          <Route path='/edit' element={< EditProfile />}></Route>
          <Route path='/changepassword' element={< PageChangePassword />}></Route>
          <Route path='/register' element={< Register />}></Route>
          <Route path='/otp' element={< Otp />}></Route>
          <Route path='/forgotpassword' element={< ForgotPassword />}></Route>
          <Route path='/admin' element={< AdminDashBoardPage /> }></Route>
        </Routes>

      </BrowserRouter>




    </>
  )
}

export default App
