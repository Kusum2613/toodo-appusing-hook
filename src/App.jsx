import React from 'react'
import Nav from './source/Nav'
import Footer from './source/Footer'
import { MdEdit } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import Useref from './Useref';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Usecallback from './Usecallback';
import Useeffect from './source/Useeffect';
import Customhook from './Customhook';

import Usememo from './Usememo';
import Usereducer from './Usereducer';
import Usestate from './Usestate';

function App() {
  
  
  return (
    <div>
      <Nav/>
     
      <div className='route'>
        
        <Routes>
          <Route path='/' element={<Usecallback/>}/>
          <Route path='/useEffect' element={<Useeffect/>}/>
          <Route path='/custom' element={<Customhook/>}/>
          
          <Route path='/memo' element={<Usememo/>}/>
          <Route path='/reducer' element={<Usereducer/>}/>
          <Route path='/ref' element={<Useref/>}/>
          <Route path='/state' element={<Usestate/>}/>

        </Routes>
        
      </div>
      
    </div>
  )
}

export default App