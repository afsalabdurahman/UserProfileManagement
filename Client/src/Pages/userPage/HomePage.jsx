import React, { useEffect } from 'react'
import Home from '../../userComponent/components/Home/Home'
import Header from '../../userComponent/components/Header/Header'
import Footer from '../../userComponent/components/Footer/Footer'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router";
function HomePage() {
  let navigate = useNavigate()
  useEffect(() => {
    if (false) {
      navigate('/login')
    }
  })

  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default HomePage
