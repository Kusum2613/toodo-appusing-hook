import React from 'react'
import Useref from '../Useref'
import Usestate from '../Usestate'
import Useeffect from './Useeffect'
import Usecallback from '../Usecallback'
import Usereducer from '../Usereducer'

import Customhook from '../Customhook'
import Usememo from '../Usememo'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <h1>ReactJS TodoList  <span style={{color:"red"}}>App</span></h1>
      <ul className='tag'>
      <NavLink to='/'><li>Usecallback</li></NavLink>
          
          <NavLink to='/custom'><li>Customhook</li></NavLink> 
          
          <NavLink to='/memo'><li>Usememo</li></NavLink> 
          <NavLink to='/reducer'><li>Usereducer</li></NavLink> 
          <NavLink to='/ref'><li>Useref</li></NavLink>
          <NavLink to='/state'><li>Usestate</li></NavLink> 
    </ul>
    </div>
  )
}

export default Nav