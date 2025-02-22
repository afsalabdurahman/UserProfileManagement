import React, { useEffect, useState } from 'react'
import Home from '../../userComponent/components/Home/Home'
import Header from '../../userComponent/components/Header/Header'
import Footer from '../../userComponent/components/Footer/Footer'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function HomePage() {
  const [user, setUser] = useState(false)
  const users = useSelector((state) => state.users); // Directly grab users from the redux state

  let navigate = useNavigate();

  // Check for user and navigate on first render or if users change
  useEffect(() => {
    if (users.length > 0) {
      setUser(true); // Set user as true if there are users
    } else {
      navigate('/login'); // Navigate to login if no users
    }
  }, [users, navigate]); // Dependency on users to trigger useEffect when users change

  return (
    <div>
      {user ? (
        <div>
          <Header />
          <Home />
          <Footer />
        </div>
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
}

export default HomePage;
