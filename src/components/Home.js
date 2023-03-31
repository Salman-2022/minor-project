import React from 'react'
import { About } from './About';
import { Table1 } from './pool/Table1';
import { Table2 } from './pool/Table2';
import { Table3 } from './pool/table3';
import { Minitable1 } from './mini/Minitable1';
import { Minitable2 } from './mini/Minitable2';
import { Snooker1 } from './snooker/Snooker1';
import { Snooker2 } from './snooker/Snooker2';
import Navbar from './Navbar';

export const Home = () => {
  return (
    <>
  <Navbar/>
    <div>
    <div className='d-flex flex-wrap justify-content-around'>
      <About/>
      <Table1 tableNo='1'/>
      <Table2 tableNo='2'/>
      <Table3 tableNo='3'/>
    </div>
    <section className='d-flex flex-wrap justify-content-around'>
    <section>
      <Minitable1  tableNo='4'/>
      <Minitable2 tableNo='5'/>
      </section>
      <section className='d-flex flex-wrap justify-content-around my-4'>
        <Snooker1  tableNo='6'/>
        <Snooker2  tableNo='7'/>
      </section>
      </section>
    </div>
    </>
  )
}
