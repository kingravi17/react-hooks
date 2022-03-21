import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
  return (
    <>
        <h1>
            Home 
        </h1>
        <button onClick={() => navigate('confirm', {replace:true})}>Confirm</button>
    </>
  )
}

export default Home