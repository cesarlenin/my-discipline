import React, { Component } from 'react'
import ThreeButtons from '../components/ThreeButtons';

export class DetailPage extends Component {
  render() {
    return (
        <main>
          <header>
              <h2>Read a book</h2>
          </header>
          <section>
          <p>month calendar goes here</p>
          </section>
        <section>
              <h3>description</h3>
          <p>read a book for 5 minutes</p>
        </section>
        <section>
            <h3>goal</h3>
          <p>every 2 days</p>
        </section>
        <section className= "aButton">
        <ThreeButtons/>
        </section>
      </main>
    )
  }
}

export default DetailPage