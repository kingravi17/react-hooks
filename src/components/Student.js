import React from 'react'
import { Outlet } from 'react-router-dom'

function Student() {
  return (
      <>
    <h1>Student Page</h1>
    <Outlet/>
    </>
  )
}

export default Student