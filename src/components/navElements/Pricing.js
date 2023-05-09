import React from 'react'
import './style.css'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import Navbar from '../Navbar';

export const Pricing = () => {
  return (
    <>
    <Navbar/>
    <div className='d-flex flex-wrap justify-content-around my-5'>
        <div className='card'>
        <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://cdn.shopify.com/s/files/1/0696/2897/files/Fotolia_103396516_Subscription_Monthly_M_2048x2048.jpg?v=1513206819' />
      <MDBCardBody>
        <MDBCardTitle>Pool Table</MDBCardTitle>
        
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Price</MDBListGroupItem>
        <MDBListGroupItem>80 Rs for 30 min</MDBListGroupItem>
        <MDBListGroupItem>140 Rs for an Hour</MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
        </div>
        <div className='card'>
        <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://www.games-eshop.com/wp-content/uploads/2020/07/snooker-2.jpg' />
      <MDBCardBody>
        <MDBCardTitle>Mini Snooker</MDBCardTitle>
        
      </MDBCardBody>
      <MDBListGroup flush>
      <MDBListGroupItem>Price</MDBListGroupItem>
        <MDBListGroupItem>100 Rs for 30 min</MDBListGroupItem>
        <MDBListGroupItem>170 Rs for an Hour</MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
        </div>
        <div className='card'>
        <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://blog.playo.co/wp-content/uploads/2017/10/hand-eye-coordination-snooker.jpg' />
      <MDBCardBody>
        <MDBCardTitle>Snooker</MDBCardTitle>
        
      </MDBCardBody>
      <MDBListGroup flush>
      <MDBListGroupItem>Price</MDBListGroupItem>
        <MDBListGroupItem>120 Rs for 30 min</MDBListGroupItem>
        <MDBListGroupItem>200 Rs for an Hour</MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
        </div>
    </div>
    </>
  );
}
