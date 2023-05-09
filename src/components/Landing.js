import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export const Landing = () => {
  return (
    <>
    <div className='landingPage'>
    <center>
    <div id='container'>
        Make 
        <div id='flip'>
            <div><div>PlAy</div></div>
            <div><div>Challenge</div></div>
            <div><div>Make Friends</div></div>
        </div>
        AweSoMe!<br></br><br></br>
        <Link to='./intro'>
        <button className='btn btn-primary btn-lg'>continue</button>
        </Link>
    </div>
    </center>
    </div>
    </>
  )
}
