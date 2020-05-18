import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export class Nav extends Component {
  render() {
    return (
    <nav className='Header'>
      <h1>
          <Link to='/'>
            MY DISCIPLINE
          </Link>
      </h1>
      <section className='links'>
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