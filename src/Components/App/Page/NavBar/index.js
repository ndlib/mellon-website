import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const NavBar = () => {
  return (
    <div id='MenuBar' className='MenuBar'>
      <p>Digital Repository Collection</p>
      <nav className='navBar'>
        <NavLink to='/'>Browse</NavLink><a href='*'>Exhibitions</a><a href='*'>About</a><a href='*'>Learn</a>
        <NavLink to='/help'>Help</NavLink>
      </nav>
      <div id='LoginButton' className='LoginButton'><button>Login</button></div>
    </div>
  )
}

export default NavBar
