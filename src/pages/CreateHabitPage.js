import React, { Component } from 'react'
import HabitForm from '../components/HabitForm';

export class CreateHabitPage extends Component {
  
  render() {
    return (
    <main>
      <header >
        <h1>Create Habit</h1>
      </header>
      <section>
            <HabitForm {...this.props} />
      </section>
      </main>
    )
  }
}

export default CreateHabitPage