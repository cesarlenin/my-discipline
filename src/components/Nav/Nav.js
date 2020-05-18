import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export class Nav extends Component {
  render() {
    return (
    <nav className='Header'>
      <h2>
          <Link to='/'>
            MY DISCIPLINE
          </Link>
      </h2>
      <section className='Navlinks'>
        <Link
          to='/Home'>
          Home
        </Link>
      </section>
    </nav>
    )
  }
}

export default Nav