import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
function Item() {
  return (
   <>
    <h1> Item Page</h1>
    <div >
        <NavLink  to="new">New</NavLink>
        <NavLink style={{paddingLeft : "30px"}} to="featured">Featured</NavLink>
    </div>
    <Outlet/>
   </>
  )
}

export default Item