import React, { Component } from 'react'

export class Habit extends Component {
  render() {
    return ( 
        <section>
        <header>
            <h2>Read a book</h2>
        </header>
        <p>7 day calendar goes here</p>
        <button>Edit</button>{/* button turn to link */}
        <button>Delete</button>{/* button turn to link */}
        <button>Add Action</button>{/* button turn to link */}
      </section>

    )
  }
}

export default Habit