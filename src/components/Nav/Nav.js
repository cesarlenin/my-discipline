import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export class Nav extends Component {
  render() {
    return (
    <nav className='Header'>
      
          <NavLink to='/'>
          <h2>MY DISCIPLINE</h2>
          </NavLink>
      <section className='Navlinks'>
        <NavLink to='/Home'>
          Home
        </NavLink>
      </section>
    </nav>
    )
  }
}

export default Nav