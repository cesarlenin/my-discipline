import React, { Component } from 'react'
import HabitForm from '../../components/HabitForm/HabitForm';
import './CreateHabitPage.css'
export class CreateHabitPage extends Component {
  
  render() {
    return (
    <section>
      <header >
        <h1>Create Habit</h1>
      </header>
      <section className= 'createHabit'>
            <HabitForm {...this.props} />
      </section>
      </section>
    )
  }
}

export default CreateHabitPage