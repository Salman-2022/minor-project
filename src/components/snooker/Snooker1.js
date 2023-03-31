import React from 'react'
import { Link } from 'react-router-dom'

export const Snooker1 = (props) => {
    const mystyle ={
        width: "400px",
        height: "450px",
        backgroundColor: "rgb(0,0,0,0.6)",
        color: "Red",
        alignItems: "center",
        marginTop: "15px",
        marginRight: "20px",
        backgroundImage: `url("https://www.betting-offers.com/wp-content/uploads/Snooker-Table-Set-Up-695px.jpg")`
      }
      return (
      
        <div className='' style={mystyle}>
          <div style={{backgroundColor: "rgb(0,0,0,0.6)", height: "100%", marginTop: "-24px"}}>
          <center>
                     <h3 className='my-4'>TABLE {props.tableNo}</h3>
          </center>
          <div className='mx-4'>
          <section>User_name</section>
          <section>Phone_number</section>
          <section>
            <spam>starting time</spam><span>Ending time</span>
          </section>
          <section><h2>Countdown</h2></section>
          <section><h4>Payable Amount</h4>
          </section>
          <section className='my-5'>
            <center>
              <Link to='/input'>
              <button className='btn btn-info '>Start The Clock</button>
              </Link>
            </center>
          </section>
          </div>
          </div>
        </div>
    
      )
}
