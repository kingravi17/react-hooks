import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function User() {
  return (
    <>
    <h1> USer Page</h1>
    <NavLink to="user">New</NavLink>
    <NavLink style={{paddingLeft : "30px"}} to=":user">Featured</NavLink>
    <Outlet></Outlet>
    </>
  )
}

export default User