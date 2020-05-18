import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import './LogInform.css'

export class LogInform extends Component {
  render() {
    return ( 
        <form className='logIn-form'>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <Link to='/Home'>
            Log In
            </Link>
        </form>
    )
  }
}

export default LogInform