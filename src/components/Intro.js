import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export const Intro = () => {
  
  return (
   <>
   <div className='main position-absolute top-50 start-50 translate-middle'>
        <div className="row">
   <div className="intro">
    <div className=''>
    <h1>CueStick</h1>
    </div>
    <h6 className="first">Whoever called snooker 'Chess with Balls' was rude but right!</h6>
    <form>
    <Link to='/login'>
    <button className="button button1" value='admin'>Login as Admin</button>
    </Link>
    <Link to='/custdisplay'>
    <button className="button button2" value='client'>Login as Client</button>
    </Link>
    </form>
   </div> 
   <div className='images'>
   <div className="card card1"></div>
    <div className="card card2"></div>
    <div className="card card3"></div>
   </div>
  </div> 
    </div>
    </>
  )
}
