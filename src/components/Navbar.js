import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link to='/home'><a className="navbar-brand mx-5">Cue Stick</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <Link to='/pricing'>
            <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
            </li>
            </Link>
            
            <Link to='./view'>
            <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
            </li>
            </Link>
            
            </ul>
        </div>
        </div>
  </nav>
  </div>
  )
}

export default Navbar