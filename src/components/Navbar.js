import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        <ul>
            <l1><NavLink to='/'>Home</NavLink></l1>
            <l1><NavLink to='/about'>About</NavLink></l1>
            <l1><NavLink to='/contact'>Contact</NavLink></l1>
            <l1><NavLink to='/item'>Item</NavLink></l1>
            <l1><NavLink to='/user'>User</NavLink></l1>
            <l1><NavLink to='/product'>Product</NavLink></l1>
            <l1><NavLink to='/student'>Student</NavLink></l1>
        </ul>
    </nav>
  )
}

export default Navbar