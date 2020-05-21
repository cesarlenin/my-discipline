import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import HabitList from '../components/HabitList';
import UserContext from '../components/UserContext';
import HabitsApiService from '../services/my-discipline-api-service'

export class HomePage extends Component {
  static contextType = UserContext;

  componentDidMount() {
    if(this.context.authToken){
      this.context.clearError()
      HabitsApiService.getHabits()
      .then(data=>this.context.setHabits(data))
      .catch(error=>this.context.setError(error))
  
      this.context.clearError()
      HabitsApiService.getActions()
      .then(data=>this.context.setActions(data))
      .catch(error=>this.context.setError(error))
    }
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