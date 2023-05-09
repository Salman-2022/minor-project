import React, { useEffect, useState } from 'react'
import { About } from './About';
import { Table1 } from './pool/Table1';
import { Table2 } from './pool/Table2';
import { Table3 } from './pool/table3';
import { Minitable1 } from './mini/Minitable1';
import { Minitable2 } from './mini/Minitable2';
import { Snooker1 } from './snooker/Snooker1';
import { Snooker2 } from './snooker/Snooker2';
import Navbar from './Navbar';
import tableData from '../App'

export const Home = (props) => {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    let data = localStorage.getItem("tableData")
    data = JSON.parse(data)
    setTableData(data)
  }, [])
  return (
    <>
      <Navbar />
      {
        tableData.length == 0 ?
          <></>
          :
          <div>
            <div className='d-flex flex-wrap justify-content-around'>
              <About />
              <Table1 data={tableData} />
              <Table2 data={tableData} />
              <Table3 data={tableData} />
            </div>
            <section className='d-flex flex-wrap justify-content-around'>
              <section>
                <Minitable1 data={tableData} />
                <Minitable2 data={tableData} />
              </section>
              <section className='d-flex flex-wrap justify-content-around my-4'>
                <Snooker1 data={tableData} />
                <Snooker2 data={tableData} />
              </section>
            </section>
          </div>
      }
    </>
  )
}
