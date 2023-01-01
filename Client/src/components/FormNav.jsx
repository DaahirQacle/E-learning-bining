import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Styles/nav.css'
function FormNav() {
  return (
    <div>
   <div className="main-bar">
        <div className="logo">
            <h1>SomTech</h1>
        </div>

        <div className="menu-bars">
   
        <NavLink to='/'> Home  </NavLink>
            <NavLink to='/courses'> Courses  </NavLink>
            <NavLink to='/about'> About  </NavLink>
            <NavLink to='/contact'>  Contact  </NavLink>
        </div>
        <div className='end-bars'>
            <NavLink to='/signin'>  Sign In  </NavLink>
            <NavLink to='/signup'>  Sign Up  </NavLink>
            </div>
    </div>
    </div>
  )
}

export default FormNav