import { Link } from 'react-router-dom';
import logoSunflower from '../assets/images/logosunflower.jpg';

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { FaUserAstronaut } from "react-icons/fa";
import { useUser } from './UserContext';

const Navbar = () => {
  const { loggedInUser, setLoggedInUser } = useUser();
  // const [loggedInUser, setLoggedInUser] = useState('');
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setLoggedInUser(localStorage.getItem('loggedInUser'));
  // }, [loggedInUser])
  // console.log(loggedInUser);

  // const [loggedInUser, setLoggedInUser] = useState('');
   const navigate = useNavigate();

  // // Fetch the logged-in user from localStorage when the component mounts or when it's updated
  // useEffect(() => {
  //   const user = localStorage.getItem('loggedInUser'); // Fetch the logged-in user's name from localStorage
  //   if (user) {
  //     setLoggedInUser(user); // Set the logged-in user in the state
  //   }
  // }, [loggedInUser]); 

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout');
    setLoggedInUser(''); 
    setTimeout(() => {
      navigate('/login');
    }, 1000)
  }

//login user check
  const handleUnlockPast = () => {
    // If the user is logged in, redirect to the 'UnlockPast' page, otherwise, redirect to login
    if (loggedInUser) {
      navigate('/saved-notes'); // This should be a new component you create
    } else {
      navigate('/login'); // If not logged in, redirect to login page
    }
  };


  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logoSunflower} alt="Logo Sunflower" className="logo-image" />
          </Link>
        </li>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/era" className="nav-link">Era</Link></li>
        <li>

          <div className="popover__wrapper">
            <a href="#">
              <span > <FaUserAstronaut className='userButton' />      </span>
            </a>
            <div className="popover__content">
              <div className="modal-area">
                <div className="welcomeMsg">
                  <p>Welcome {loggedInUser}</p>
                </div>
              {loggedInUser ? (
                  <button onClick={handleLogout}>Logout</button> // If logged in, show Logout
                ) : (
                  <button onClick={() => navigate('/login')}>Login</button> // If not logged in, show Login
                )}

                {/* Unlock the Past Button */}
                <button onClick={handleUnlockPast}>Unlock the Past
                  {/* {loggedInUser ? 'Unlock the Past' : 'Login to Unlock'} */}
                </button>
              </div>

            </div></div>
        </li>
        {/* <li><Link to="/era" className="nav-link">{loggedInUser}</Link></li> */}
        {/* {loggedInUser ? (
          <li><Link to="/era" className="nav-link">{loggedInUser}</Link></li>
        ) : (
          <li><Link to="/login" className="nav-link">Login</Link></li>
        )} */}
        
      </ul>












    </nav>
  );
};

export default Navbar;
