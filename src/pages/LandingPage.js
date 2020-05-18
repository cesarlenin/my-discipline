import React, { Component } from 'react'
import LogInform from '../components/LogInform/LogInform'

export class LandingPage extends Component {
  render() {
    return (
    <div className='landingPage'>
        <header className='landingPage_header'>
            <h1>MyDiscipline</h1>
            <h3>Be Organized Be Discipline</h3>
        </header>
        <section>
        <LogInform/>
        </section>
    </div>
    )
  }
}

export default LandingPage