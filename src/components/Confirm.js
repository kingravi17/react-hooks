import React from 'react'
import { useNavigate } from 'react-router-dom'
function Confirm() {
    const navigate = useNavigate()
  return (
    <>
        <h1>Sample click confirmation Page</h1>
        <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}

export default Confirm