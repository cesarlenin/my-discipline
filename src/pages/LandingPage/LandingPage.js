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
        <section>
        <LogInform/>
        </section>
    </section>
    )
  }
}

export default LandingPage