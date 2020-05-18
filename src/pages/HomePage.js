import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import HabitList from '../components/HabitList';

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

      <HabitList/>
    </main>
    )
  }
}

export default HomePage