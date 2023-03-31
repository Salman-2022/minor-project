import React from 'react'
import logo from "./cueStick.png"

export const About = () => {
  const mystyle ={
    width: "300px",
    height: "350px",
    backgroundColor: "rgb(255, 255, 255,0.6)",
    color: "Red",
    alignItems: "center",
    marginTop: "15px",
    marginRight: "20px"
  }
  return (
    <>
    <div className='mx-4' style={mystyle}>
      <center>
      <h1 className="my-4">Cue Stick</h1>
      <p>Current time</p>
      <img src={logo}
      className="w-50 p-4"
       alt="Cue Stick Logo"/><br></br>
       <button>View Profile</button>
      </center>
    </div>
    </>
  )
  
}
