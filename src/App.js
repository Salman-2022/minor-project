import './App.css';
import React, { useState, useEffect} from 'react';

import { Home } from './components/Home';
import { Aboutus } from './components/navElements/Aboutus';
import { Pricing } from './components/navElements/Pricing';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Datainput } from './components/Datainput';
import { Login } from './components/Login';



function App() {

  return (
    <Router>
      <div className='App'>
      <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/home' Component={Home}/>
       <Route path='/aboutus' Component={Aboutus}/>
       <Route path='/pricing' Component={Pricing}/>
       <Route path='/input' Component={Datainput}/>
       <Route path='/login' Component={Login}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
