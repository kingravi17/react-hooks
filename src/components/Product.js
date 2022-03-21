import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Product() {
  return (
    <>
       <h1> Product Page </h1>

       <nav>
            <NavLink to="first" >First</NavLink>
            <NavLink to="second" >Second</NavLink>
       </nav>
        <Outlet/>
    </>
  )
}

export default Product