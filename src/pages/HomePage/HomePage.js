import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HabitList from '../../components/HabitList/HabitList';
import UserContext from '../../components/UserContext/UserContext';
import HabitsApiService from '../../services/my-discipline-api-service';
import TokenService from '../../services/token-service';
import './HomePage.css';

export class HomePage extends Component {
  static contextType = UserContext;

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.context.clearError();
      HabitsApiService.getHabits()
        .then(data => this.context.setHabits(data))
        .catch(error => this.context.setError(error))

      this.context.clearError();
      HabitsApiService.getActions()
        .then(data => this.context.setActions(data))
        .catch(error => this.context.setError(error))
    }
  }

  render() {
    return ( 
      <section >
        <header >
          <h1 > My Habits </h1> 
        </header>

        <section className = 'create' >
          <Link to = '/createHabit' >
          Create Habit 
          </Link> 
        </section>
        
        <HabitList {...this.props}/> 
      </section>
    )
  }
}

export default HomePage;