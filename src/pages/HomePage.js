import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import HabitList from '../components/HabitList';
import UserContext from '../components/UserContext';
import HabitsApiService from '../services/my-discipline-api-service'
import config from '../config';

export class HomePage extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.context.clearError()
    HabitsApiService.getHabits()
    .then(this.context.setHabits)
    .catch(this.context.setError)

    this.context.clearError()
    HabitsApiService.getActions()
    .then(this.context.setActions)
    .catch(this.context.setError)
  }

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