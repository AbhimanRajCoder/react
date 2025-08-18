import React, { useInsertionEffect } from 'react'
import { useState,useEffect,useRef } from 'react'

import './Navbar.css'
import logo from '../Images/logohead.png'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

const [navbar,Setnavbar] = useState(0)


  return (
<div className="header">
<nav>
<NavLink to="/"> <img src={logo} className="logoimg" alt="logo" /></NavLink>
  <div className='menu'>
    <NavLink to="/"  className="menu-item" >Home</NavLink>
<NavLink   to="/project" className="menu-item" id="project" >Project </NavLink>
<NavLink  to="/login" className="menu-item">Login </NavLink>
</div>
</nav>
</div>
  )
}

export default Navbar
