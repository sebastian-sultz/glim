import './App.css'

import About from './Components/About';
import Background from './Components/Background';
import Home from './Components/Home';
import Era from './Components/Era';
import Subscription from './Components/Subscription';
import Navbar from './Components/Navbar';
import EraSeventy from './Components/EraSeventy';
import FutureNote from './Components/FutureNote';
import React, { useEffect, useState } from 'react'

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../src/Components/Login';
import Signup from '../src/Components/Signup';
import { UserProvider } from './Components/UserContext';

function App() {



  


  return (
    <><Background/>

    <UserProvider>
    <Router>
      
    

<Navbar/>

      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/era" element={<Era />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/era/eraseventy" element={<EraSeventy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/letterPage' element={<FutureNote />} />

      </Routes>
      </Router>
      </UserProvider>
    </>
  );
}

export default App;
