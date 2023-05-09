import React, { useState, useEffect } from 'react'
import { Link, json } from 'react-router-dom'

export const Table1 = (props) => {

  const [data, setData] = useState(JSON.parse(localStorage.getItem("tableData")))
  const [reRender, setReRender] = useState(false)
  const [countdown, setCountdown] = useState(JSON.parse(localStorage.getItem("tableData"))[0].countdown)


  useEffect(() => {
    if(countdown==0)
    {
      data[0] = { tableNo: 1, name: '', phone: '00000000000', startTime: '000', countdown: 0, amount: 0 }
      localStorage.setItem("tableData", JSON.stringify(data))
      setData(data)
      setReRender(!reRender)
      const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

      // Clear any timeout/interval up to that id
      for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
      }
    }
  }, { reRender,countdown})

  const mystyle = {
    width: "300px",
    height: "350px",
    color: "Red",
    alignItems: "center",
    marginTop: "15px",
    marginRight: "20px",
    backgroundImage: `url("https://tse4.mm.bing.net/th?id=OIP.QOMY5e1YBXTKhlyAwz6l4wHaHa&pid=Api&P=0")`,

  }

  const handleCountdown = () => {
    const interval = setInterval(() => {
      if (countdown == 0) {
        data[0] = { tableNo: 1, name: '', phone: '00000000000', startTime: '000', countdown: 0, amount: 0 }
        localStorage.setItem("tableData", JSON.stringify(data))
        setData(data)
        setReRender(!reRender)
      }
      console.log(countdown)
      data[0].countdown = data[0].countdown-1
      setCountdown(data[0].countdown)
      console.log(countdown)
      localStorage.setItem("tableData", JSON.stringify(data))
      setData(data)
      setReRender(!reRender)
    }, 1000)
  }

  return (

    <div className='' style={mystyle}>
      <div style={{
        backgroundColor: "rgb(0,0,0,0.8)",
        height: '100%',
        marginTop: "-24px",
      }}>
        <center>
          <h3 className='my-4'>TABLE {props.data[0].tableNo}</h3>
        </center>
        <div className='mx-4'>
          <section>{data[0].name}</section>
          <section>{data[0].phone}</section>
          <section>
            <spam>starting time:-{data[0].startTime}<br></br></spam>
          </section>
          <section className='my-5'>Countdown:-{countdown}</section>
          <section><h4>Payable Amount:-{data[0].amount}</h4>
          </section>
          <section className=''>
            {
              props.data[0].name == "" ?
                <center>
                  <Link to={`/input/${props.data[0].tableNo}`}>
                    <button className='btn btn-info '>Start The Clock</button>
                  </Link>
                </center>
                :
                <center>
                  <button className='btn btn-info ' onClick={() => { handleCountdown() }}>Start Countdown</button>
                </center>
            }
          </section>
        </div>
      </div>
    </div>

  )
}
