import './App.css';
import React from 'react';

import { Home } from './components/Home';
import { Aboutus } from './components/navElements/Aboutus';
import { Pricing } from './components/navElements/Pricing';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Datainput } from './components/Datainput';
import { Login } from './components/Login';
import { Landing } from './components/Landing';
import { Intro } from './components/Intro';
import { Custdisplay } from './components/Custdisplay';
import { Viewprofile } from './components/Viewprofile';



function App() {

  let tableData=[{
    tableNo: 1,name:'',phone:'00000000000',startTime:'000',countdown:0,amount:0},{
    tableNo: 2,name:'',phone:'00000000000',startTime:'',countdown:0,amount:0},{
    tableNo: 3,name:'',phone:'00000000000',startTime:'',countdown:0,amount:0},{
    tableNo: 4,name:'',phone:'00000000000',startTime:'',countdown:0,amount:0},{
    tableNo: 5,name:'',phone:'00000000000',startTime:'',countdown:0,amount:0},{
    tableNo: 6,name:'',phone:'00000000000',startTime:'',countdown:0,amount:0},{
    tableNo: 7,name:'',phone:'00000000000',startTime:'',countdown:0,amount:0}]

    if(!localStorage.getItem("tableData"))
    {
      localStorage.setItem("tableData",JSON.stringify(tableData))
    }

   // startTime() shows 32 or 31 or some number
   //I want to print current time here
  //  console.log('TIME', startTime())
  return (
    <Router>
      <div className='App'>
      <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='intro' Component={Intro}/>
       <Route path='/login' Component={Login}/>
       <Route path='/custdisplay' element={<Custdisplay/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/aboutus' Component={Aboutus}/>
       <Route path='/pricing' Component={Pricing}/>
       <Route path='/input/:id' element={<Datainput data={tableData}/>}/>
       <Route path='/view' Component={<Viewprofile/>}/>

      </Routes>
      </div>
    </Router>
  );
}

export default App;
