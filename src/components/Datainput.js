import React,{useState} from 'react'
import '../App.css'
import Navbar from './Navbar'

export const Datainput = () => {
  
  return (
    <>
    <Navbar/>
    <center>
      <div className='inputsection'>
        <form>
  <div className="mb-3 mx-2">
    <label for="exampleInputEmail1" className="form-label">Customer's Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 mx-2">
    <label for="exampleInputEmail1" className="form-label">Phone Number</label>
    <input type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">30 min</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">1 Hr</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">1.5 Hrs</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">2 Hrs</label>
</div><br></br>
  <button type="submit" className="btn btn-primary my-4">Submit</button>
</form>
    </div>
    </center>
    </>
  )
  }
