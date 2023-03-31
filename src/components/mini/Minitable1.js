import React from 'react'
import { Link } from 'react-router-dom'

export const Minitable1 = (props) => {
    const mystyle ={
        width: "600px",
        height: "200px",
        // backgroundColor: "rgb(0,0,0,0.6)",
        color: "Red",
        alignItems: "center",
        marginTop: "5px",
        marginRight: "20px",
        backgroundImage: `url("https://cdn.wallpapersafari.com/51/42/LhluY3.jpg")`,
      }
  return (
    <div className='mx-5'>
         <div className='' style={mystyle}>
          <center>
                     <h3 className='my-5'>TABLE {props.tableNo}</h3>
          </center>
          <div className='d-flex justify-content-around'>
          <section>
          <section>User_name</section>
          <section>Phone_number</section>
          <section>
            <spam>starting time</spam><span>Ending time</span>
          </section>
          </section>
         <section>
         <section><h2>Countdown</h2></section>
          <section><h4>Payable Amount</h4>
          </section>
          <section className=''>
            <center>
              <Link to='/input'>
              <button className='btn btn-info '>Start The Clock</button>              </Link>
            </center>
          </section>
         </section>
          </div>
        </div>
    </div>
  )
}

