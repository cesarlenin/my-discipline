import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import Habit from '../components/Habit/Habit';

export class HomePage extends Component {
  render() {
    return (
    <main>
      <header>
        <h1>Habit Collection</h1>
      </header>

      <section className= "aButton">
      <Link to='/createHabit'>
      create habit
      </Link>
      </section>
      <Habit/>
    </main>
    )
  }
}

export default HomePage