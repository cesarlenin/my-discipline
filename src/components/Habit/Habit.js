import React, { Component } from 'react'
import ThreeButtons from '../ThreeButtons';

export class Habit extends Component {
  render() {
    return ( 
        <section className= "habit">
        <header>
            <h2>Read a book</h2>
        </header>
        <p>7 day calendar goes here</p>
        <ThreeButtons/>
      </section>

    )
  }
}

export default Habit