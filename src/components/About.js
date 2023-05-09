import React from 'react'
import logo from "./cueStick.png"
import styles from "../stylesheet/about.module.css"
import { Link } from 'react-router-dom'

export const About = () => {
  const mystyle ={
    width: "300px",
    height: "350px",
    backgroundColor: "rgb(30, 144, 255,0.6)",
    color: "Red",
    alignItems: "center",
    marginTop: "15px",
    marginRight: "20px"
  }
  return (
    <>
    <div className={styles['about-container']}>
      <h1>Cue Stick</h1>
      <img src={logo} />
      <Link to='./viewprofile'>
      <button>View Profile</button>
      </Link>
    </div>
    {/* <div className='mx-4' style={mystyle}>
      <center>
      <h1 className="my-4">Cue Stick</h1>
      <p>Current time</p>
      <img src={logo}
      className="w-50 p-4"
       alt="Cue Stick Logo"/><br></br>
       <button>View Profile</button>
      </center>
    </div> */}
    </>
  )
  
}
