import React from 'react'
import { useNavigate } from 'react-router-dom'
function PageNotFound() {
    const navigate = useNavigate()
  return (
      <>
    <h1>Error Code 404</h1>
    <h2>Page Not Found!!! Please check Url</h2>
    <button style = {{height:"50px", backgroundColor: "green", color: "red", fontSize: "32px", fontWeight: "600"}} onClick={() => navigate("/")}>Click here to go to Home Page</button>
    </>
  )
}

export default PageNotFound