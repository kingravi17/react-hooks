import React from 'react'
import {useNavigate} from 'react-router-dom'

function Contact() {
    const nibaaaa = useNavigate()
  return (
    <>
        <h1>Contact Us : </h1>
        <form>
            <label>Name : </label><input />
            <br></br>
            <label>Email : </label><input />
            <br></br>
            <label>Message : </label><input />
            <br></br>
            <button type="submit">Submit</button>
        </form>
        <button onClick={() => nibaaaa('/confirm')}>Go To Confirm</button>
    </>
  )
}

export default Contact