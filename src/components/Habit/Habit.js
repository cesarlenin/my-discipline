import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export class Habit extends Component {
  render() {
    return ( 
        <section className= "habit">
        <header>
            <h2>Read a book</h2>
        </header>
        <p>7 day calendar goes here</p>
        <button>Edit</button>{/* button turn to link */}
        <button>Delete</button>{/* button turn to link */}
        <Link to='/AddAction'>
        Add Action
        </Link>
      </section>

    )
  }
}

export default Habit