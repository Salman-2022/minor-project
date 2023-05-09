import React from 'react'
import { Link } from 'react-router-dom'

export const Minitable2 = (props) => {
  const mystyle ={
    width: "600px",
    height: "200px",
    backgroundColor: "rgb(0,0,0,0.6)",
    color: "Red",
    alignItems: "center",
    marginTop: "70px",
    marginLeft: "50px"
  }
  return (
  
    <div className='' style={mystyle}>
      <div style={{ 
        backgroundColor: "rgb(0,0,0,0.8)",
        height: '100%',
        marginTop: "-24px",
}}>
      <center>
                 <h3 className='my-4'>TABLE {props.data[4].tableNo}</h3>
      </center>
      <div className='mx-'>
      <section>{props.data[4].name}</section>
      <section>{props.data[4].phone}</section>
      <section>
        <spam>starting time:-{props.data[4].startTime}<br></br></spam>
      </section>
      <section className='my-5'>Countdown:-{props.data[4].countdown}</section>
      <section><h4>Payable Amount:-{props.data[4].amount}</h4>
      </section>
      <section className=''>
        <center>
          <Link to={`/input/${props.data[4].tableNo}`}>
          <button className='btn btn-info '>Start The Clock</button>
          </Link>
        </center>
      </section>
      </div>
      </div>
    </div>

  )
}

