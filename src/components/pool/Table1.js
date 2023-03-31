import React from 'react'
import { Link } from 'react-router-dom'

export const Table1 = (props) => {
    const mystyle ={
        width: "300px",
        height: "350px",
        color: "Red",
        alignItems: "center",
        marginTop: "15px",
        marginRight: "20px",
        backgroundImage: `url("https://tse4.mm.bing.net/th?id=OIP.QOMY5e1YBXTKhlyAwz6l4wHaHa&pid=Api&P=0")`,
        
      }
      return (
      
        <div className='' style={mystyle}>
          <div style={{ 
            backgroundColor: "rgb(0,0,0,0.8)",
            height: '100%',
            marginTop: "-24px",
}}>
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
              <button className='btn btn-info '>Start The Clock</button>              </Link>
            </center>
          </section>
          </div>
          </div>
        </div>
    
      )
}
