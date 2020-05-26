import React, { Component } from 'react'
import LogInform from '../../components/LogInform/LogInform'
import './LandingPage.css'
export class LandingPage extends Component {
  render() {
    return (
    <section className='landingPage'>
        <header className='landingPage_header'>
            <h1 className= 'smallerH1'>Be Organized<br/> 
            Be Disciplined<br/> 
            Be A Better You</h1>
        </header>
        <p className= 'appInfo'>My Discipline helps you keep track of your habits.<br/>
        Set goals you want to meet.
        Build a collection of habits you want to have.
        Quickly see the actual frequency of your habits in a calendar.
        </p>
        <section className='log-in'>
        <LogInform/>
        </section>
    </section>
    )
  }
}

export default LandingPage